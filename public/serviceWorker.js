// @ts-check

/// <reference no-default-lib="true"/>
/// <reference lib="esnext" />
/// <reference lib="webworker" />

// Use self instead of sw for better service worker compatibility
// @ts-ignore - self is available in service worker context
const sw = /** @type {ServiceWorkerGlobalScope} */ (self);

// Track processed messages with timestamps
const processedMessages = new Map();
const MESSAGE_TTL = 5 * 60 * 1000; // 5 minutes TTL for processed messages

// Clean up old message entries
const cleanupOldMessages = () => {
    const now = Date.now();
    for (const [id, timestamp] of processedMessages.entries()) {
        if (now - timestamp > MESSAGE_TTL) {
            processedMessages.delete(id);
        }
    }
};

// Generate a unique ID for messages
function getMessageId(message) {
    if (message.id) return `msg_${message.id}`;
    const str = `${message.channelId}_${message.title}_${message.body || ''}_${message.created_at || Date.now()}`;
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return `hash_${hash}`;
}

/**
 * Handles incoming push events
 */
sw.addEventListener('push', (event) => {
    if (!event.data) {
        console.warn('Push event received without data');
        return;
    }

    const handlePushEvent = async () => {
        try {
            // Parse the message
            const message = event.data?.json();
            if (!message) {
                console.warn('Failed to parse push message');
                return;
            }

            const { title, body, channelId, icon, image } = message;
            
            // Validate required fields
            if (!title || !channelId) {
                console.warn('Push message missing required fields:', { title, channelId });
                return;
            }

            // Generate a unique ID for this message
            const messageId = getMessageId(message);
            const now = Date.now();
            
            // Clean up old messages and check for duplicates
            cleanupOldMessages();
            if (processedMessages.has(messageId)) {
                console.log('Duplicate message detected, ignoring:', messageId);
                return;
            }
            
            // Mark as processed
            processedMessages.set(messageId, now);
            console.log('Processing push message:', { messageId, title, channelId });

            // Check if app is in foreground
            const windowClients = await sw.clients.matchAll({
                type: 'window',
                includeUncontrolled: true
            });

            const isAppInForeground = windowClients.some(client => client.focused);
            if (isAppInForeground) {
                console.log('App is in foreground, not showing notification');
                return;
            }

            // Use a consistent tag for the same channel to replace old notifications
            const tag = `message-${channelId}`;
            
            const notificationOptions = {
                body: body || '',
                icon: icon || '/logo.png',
                image: image,
                badge: '/logo.png',
                actions: [{ 
                    title: 'Open chat', 
                    action: 'open_chat' 
                }],
                tag,
                renotify: true,
                data: { 
                    channelId,
                    messageId,
                    timestamp: now
                },
                timestamp: now,
                requireInteraction: false,
                silent: false
            };

            console.log('Showing notification:', { title, tag, channelId });
            
            // Show the notification
            await sw.registration.showNotification(title, notificationOptions);
            
        } catch (error) {
            console.error('Error in push event handler:', error);
        }
    };

    // Ensure the waitUntil is called with the promise
    if (event && typeof event.waitUntil === 'function') {
        event.waitUntil(handlePushEvent());
    } else {
        console.warn('Push event missing waitUntil method, running handler directly');
        handlePushEvent().catch(console.error);
    }
});

/**
 * Handles notification click events
 */
sw.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const { notification } = event;
  const { channelId } = notification.data || {};

  if (!channelId) {
    console.warn('Notification clicked but no channelId found');
    return;
  }

  const handleNotificationClick = async () => {
    try {
      const windowClients = await sw.clients.matchAll({
        type: 'window',
        includeUncontrolled: true,
      });

      const urlToOpen = new URL(`/chat?channelId=${channelId}`, sw.location.origin).href;

      // Check if there's already a chat window open
      const matchingClient = windowClients.find(
        client => client.url.includes('/chat') && 'focus' in client
      );

      if (matchingClient) {
        await matchingClient.focus();
        matchingClient.postMessage({ channelId, type: 'NAVIGATE_TO_CHANNEL' });
      } else {
        await sw.clients.openWindow(urlToOpen);
      }
    } catch (error) {
      console.error('Error handling notification click:', error);
    }
  };

  event.waitUntil(handleNotificationClick());
});

// Handle push subscription changes
sw.addEventListener('pushsubscriptionchange', (event) => {
  console.log('Push subscription changed');
  // You might want to implement subscription renewal logic here
});
