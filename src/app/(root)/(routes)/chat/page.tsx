"use client";

import { useCallback, useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { Chat, LoadingIndicator, Streami18n } from "stream-chat-react";
import ChatSidebar from "./_components/ChatSidebar";
import useInitializeChatClient from "./useInitializeChatClient";
import ChatChannel from "./_components/ChatChannel";
import { Menu, X } from "lucide-react";
import useWindowSize from "@/hooks/useWindowSize";
import { mdBreakpoint } from "@/utils/tailwind";
import { useTheme } from "next-themes";
import { registerServiceWorker } from "@/utils/serviceWorker";
import {
  getCurrentPushSubscription,
  sendPushSubscriptionToServer,
} from "@/notifications/pushService";
import PushMessageListener from "./_components/PushMessageListener";
import { useSearchParams } from 'next/navigation';

const i18Instance = new Streami18n({ language: "en" });

function ChatContent() {
  const { resolvedTheme } = useTheme();
  const searchParams = useSearchParams();
  const channelId = searchParams?.get('channelId') || undefined;
  const [chatSidebarOpen, setChatSidebarOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const windowSize = useWindowSize();
  const isLargeScreen = windowSize.width >= mdBreakpoint;
  const chatClient = useInitializeChatClient();
  const { user } = useUser();
  
  const handleSidebarOnClose = useCallback(() => {
    setChatSidebarOpen(false);
  }, []);

  // Handle sidebar state based on window size
  useEffect(() => {
    if (windowSize.width >= mdBreakpoint) {
      setChatSidebarOpen(false);
    }
  }, [windowSize.width]);

  // Handle push notifications
  useEffect(() => {
    async function setupPushNotifications() {
      try {
        await registerServiceWorker();
        const subscription = await getCurrentPushSubscription();
        if (subscription) {
          await sendPushSubscriptionToServer(subscription);
        }
      } catch (error) {
        console.error("Push notification setup failed:", error);
      }
    }
    setupPushNotifications();
  }, []);

  // Handle URL cleanup
  useEffect(() => {
    if (channelId) {
      history.replaceState(null, "", "/chat");
    }
  }, [channelId]);

  // Initialize mounted state and set initial theme
  useEffect(() => {
    setIsMounted(true);
    
    // Set initial theme
    const isDarkMode = resolvedTheme === 'dark' || 
                      (resolvedTheme === 'system' && 
                       window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    document.documentElement.classList.toggle('dark', isDarkMode);
    document.documentElement.style.colorScheme = isDarkMode ? 'dark' : 'light';
    
    // Cleanup function
    return () => {
      // Reset styles if needed
      document.documentElement.style.colorScheme = '';
    };
  }, [resolvedTheme]);
  
  // Show loading state until everything is ready
  if (!isMounted || !chatClient || !user) {
    return (
      <div className="flex h-dvh items-center justify-center bg-background">
        <LoadingIndicator size={40} />
      </div>
    );
  }

  return (
    <div className="h-dvh bg-background text-foreground transition-colors duration-300"> 
      <div className="m-auto flex h-full min-w-[350px] max-w-[1600px] flex-col">
        <Chat
          key={`chat-${resolvedTheme}`}
          client={chatClient}
          i18nInstance={i18Instance}
          theme={resolvedTheme === 'dark' || 
                 (resolvedTheme === 'system' && 
                  typeof window !== 'undefined' && 
                  window.matchMedia('(prefers-color-scheme: dark)').matches) 
                ? "str-chat__theme-dark" 
                : "str-chat__theme-light"}
        >
          <div className="flex justify-center border-b border-border p-3 md:hidden">
            <button onClick={() => setChatSidebarOpen(!chatSidebarOpen)}>
              {!chatSidebarOpen ? (
                <span className="flex items-center gap-1">
                  <Menu /> Menu
                </span>
              ) : (
                <X />
              )}
            </button>
          </div>
          <div className="flex h-full flex-row overflow-y-auto">
            <ChatSidebar
              user={user}
              show={isLargeScreen || chatSidebarOpen}
              onClose={handleSidebarOnClose}
              customActiveChannel={channelId}
            />
            <ChatChannel
              show={isLargeScreen || !chatSidebarOpen}
              hideChannelOnThread={!isLargeScreen}
            />
          </div>
          <PushMessageListener />
        </Chat>
      </div>
    </div>
  );
}

export default function ChatPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    document.title = 'Chat | OMZN';
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Or a loading spinner
  }

  return <ChatContent />;
}