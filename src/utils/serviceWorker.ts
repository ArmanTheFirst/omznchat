// Extend the Window interface to include Cypress
declare global {
  interface Window {
    Cypress?: boolean;
  }
}

// Check if service workers are supported in the current browser
export function isServiceWorkerSupported() {
  return (
    typeof window !== 'undefined' &&
    'serviceWorker' in navigator &&
    window.isSecureContext && // Service workers require HTTPS (or localhost for development)
    !window.Cypress // Skip during Cypress tests
  );
}

export async function registerServiceWorker() {
  if (!isServiceWorkerSupported()) {
    console.warn('Service workers are not supported in this environment');
    return null;
  }

  try {
    const registration = await navigator.serviceWorker.register('/serviceWorker.js');
    console.log('ServiceWorker registration successful with scope: ', registration.scope);
    return registration;
  } catch (error) {
    console.error('ServiceWorker registration failed: ', error);
    return null;
  }
}

export async function getReadyServiceWorker() {
  if (!isServiceWorkerSupported()) {
    console.warn('Service workers are not supported in this environment');
    return null;
  }

  try {
    return await navigator.serviceWorker.ready;
  } catch (error) {
    console.error('ServiceWorker ready check failed: ', error);
    return null;
  }
}

// Optional: Add a function to check if the page is being controlled by a service worker
export function isControlledByServiceWorker() {
  return isServiceWorkerSupported() && navigator.serviceWorker.controller !== null;
}
