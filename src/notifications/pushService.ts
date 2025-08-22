import { env } from "@/env";
import { getReadyServiceWorker, isServiceWorkerSupported } from "@/utils/serviceWorker";

function isPushSupported(): boolean {
  return (
    typeof window !== 'undefined' &&
    'PushManager' in window &&
    isServiceWorkerSupported()
  );
}

export async function getCurrentPushSubscription(): Promise<PushSubscription | null> {
  if (!isPushSupported()) {
    console.warn('Push notifications are not supported in this environment');
    return null;
  }

  try {
    const sw = await getReadyServiceWorker();
    if (!sw) return null;
    return await sw.pushManager.getSubscription();
  } catch (error) {
    console.error('Error getting push subscription:', error);
    return null;
  }
}

export async function registerPushNotifications(): Promise<boolean> {
  if (!isPushSupported()) {
    console.warn('Push notifications are not supported in this environment');
    return false;
  }

  try {
    const existingSubscription = await getCurrentPushSubscription();
    if (existingSubscription) {
      console.log('Existing push subscription found');
      return true;
    }

    const sw = await getReadyServiceWorker();
    if (!sw) {
      throw new Error('Service worker not available');
    }

    const subscription = await sw.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: env.NEXT_PUBLIC_WEB_PUSH_PUBLIC_KEY,
    });

    return await sendPushSubscriptionToServer(subscription);
  } catch (error) {
    console.error('Error registering push notifications:', error);
    return false;
  }
}

export async function unregisterPushNotifications(): Promise<boolean> {
  if (!isPushSupported()) {
    console.warn('Push notifications are not supported in this environment');
    return false;
  }

  try {
    const existingSubscription = await getCurrentPushSubscription();
    if (!existingSubscription) {
      console.log('No existing push subscription found');
      return true;
    }

    const success = await deletePushSubscriptionFromServer(existingSubscription);
    if (success) {
      await existingSubscription.unsubscribe();
    }
    return success;
  } catch (error) {
    console.error('Error unregistering push notifications:', error);
    return false;
  }
}

export async function sendPushSubscriptionToServer(
  subscription: PushSubscription
): Promise<boolean> {
  try {
    const response = await fetch("/api/register-push", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(subscription),
    });

    if (!response.ok) {
      throw new Error("Failed to send push subscription to server");
    }
    return true;
  } catch (error) {
    console.error('Error sending push subscription to server:', error);
    return false;
  }
}

export async function deletePushSubscriptionFromServer(
  subscription: PushSubscription
): Promise<boolean> {
  try {
    const response = await fetch("/api/register-push", {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(subscription),
    });

    if (!response.ok) {
      throw new Error("Failed to delete push subscription from server");
    }
    return true;
  } catch (error) {
    console.error('Error deleting push subscription from server:', error);
    return false;
  }
}
