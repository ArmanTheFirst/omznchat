import { useEffect } from "react";
import { useChatContext } from "stream-chat-react";

export default function PushMessageListener() {
  const { client, setActiveChannel } = useChatContext();

  useEffect(() => {
    // Only run on client-side where navigator is available
    if (typeof window === "undefined" || !('serviceWorker' in navigator)) {
      return;
    }

    const messageListener = async (event: MessageEvent) => {
      console.log("Received message from service worker", event.data);

      const channelId = event.data?.channelId;

      if (channelId) {
        try {
          const channels = await client.queryChannels({ id: channelId });
          if (channels.length > 0) {
            setActiveChannel(channels[0]);
          } else {
            console.error(
              "PushMessageListener: A channel with this channelId was not found"
            );
          }
        } catch (error) {
          console.error("Error in PushMessageListener:", error);
        }
      }
    };

    // Add event listener
    navigator.serviceWorker.addEventListener("message", messageListener);

    // Cleanup function
    return () => {
      if (navigator.serviceWorker) {
        navigator.serviceWorker.removeEventListener("message", messageListener);
      }
    };
  }, [client, setActiveChannel]);

  return null;
}
