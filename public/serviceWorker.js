// @ts-check

/// <reference no-default-lib="true"/>
/// <reference lib="esnext" />
/// <reference lib="webworker" />

// Use self instead of sw for better service worker compatibility
// @ts-ignore - self is available in service worker context
const sw = /** @type {ServiceWorkerGlobalScope} */ (self);

// Keep track of the last notification time and content
let lastNotification = {
  time: 0,
  title: '',
  body: '',
  channelId: ''
};

// Time window in milliseconds to consider notifications as duplicates
const DUPLICATE_WINDOW = 2000;

/**
 * Handles incoming push events
 */
sw.addEventListener('push', (event) => {
  if (!event.data) {
    console.warn('Push event received without data');
    return;
  }

  try {
    const message = event.data.json();
    const { title, body, icon, image, channelId } = message || {};

    if (!title || !channelId) {
      console.warn('Push message missing required fields:', { title, channelId });
      return;
    }

    console.log('Received push message', { title, channelId });

    const handlePushEvent = async () => {
      try {
        const now = Date.now();
        const isDuplicate = (
          lastNotification.title === title &&
          lastNotification.body === body &&
          lastNotification.channelId === channelId &&
          (now - lastNotification.time) < DUPLICATE_WINDOW
        );

        if (isDuplicate) {
          console.log('Duplicate notification detected, skipping');
          return;
        }

        // Update last notification info
        lastNotification = { title, body: body || '', channelId, time: now };

        const windowClients = await sw.clients.matchAll({
          type: 'window',
          includeUncontrolled: true
        });

        // Check if any window is focused
        const appInForeground = windowClients.some(client => client.focused);

        if (appInForeground) {
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
          actions: [{ title: 'Open chat', action: 'open_chat' }],
          tag,
          renotify: true,
          data: { channelId },
          timestamp: now
        };

        // Show the notification
        await sw.registration.showNotification(title, notificationOptions);
      } catch (error) {
        console.error('Error handling push event:', error);
      }
    };

    event.waitUntil(handlePushEvent());
  } catch (error) {
    console.error('Error parsing push event data:', error);
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
