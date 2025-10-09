import {
  Channel,
  MessageInput,
  MessageList,
  Thread,
  Window,
  useChannelStateContext,
} from "stream-chat-react";
import { ReactNode } from 'react';
import CustomTypingIndicator from "./CustomTypingIndicator";
import { EmojiPicker } from "stream-chat-react/emojis";
import CustomChannelHeader from "./CustomChannelHeader";
import { useDismissKeyboard } from "@/hooks/useDismissKeyboard";
import useWindowSize from "@/hooks/useWindowSize";
import { mdBreakpoint, lgBreakpoint, smBreakpoint } from "@/utils/tailwind";

interface ChatChannelProps {
  show: boolean;
  hideChannelOnThread: boolean;
}

// Custom MessageInput with multi-line support and typing events
const CustomMessageInput = () => {
  const { channel, thread } = useChannelStateContext();
  const { containerRef } = useDismissKeyboard();
  
  // Apply consistent padding on all screen sizes, with extra padding on mobile for safe area
  const inputContainerClass = thread ? 
    "pb-4 md:pb-4 sm:pb-[calc(env(safe-area-inset-bottom,0px)+1rem)]" : 
    "pb-6 md:pb-6 sm:pb-[calc(env(safe-area-inset-bottom,0px)+1.5rem)]";
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey && !(e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      const form = e.currentTarget.closest('form');
      form?.requestSubmit();
    } else {
      // Send typing start event
      channel?.keystroke(thread?.id);
    }
  };
  
  return (
    <div ref={containerRef} className={inputContainerClass}>
      <MessageInput 
        additionalTextareaProps={{
          onKeyDown: handleKeyDown,
        }}
        minRows={1}
        maxRows={5}
      />
    </div>
  );
};

// Component that handles responsive logic inside Channel context
const ResponsiveChannelContent = () => {
  const { thread } = useChannelStateContext();
  const windowSize = useWindowSize();
  
  // Define screen size conditions
  const isMobile = windowSize.width < smBreakpoint;
  const isTablet = windowSize.width >= smBreakpoint && windowSize.width < lgBreakpoint;
  const isDesktop = windowSize.width >= lgBreakpoint;
  
  // Hide main channel when thread is active on mobile or tablet
  const shouldShowMainChannel = !thread || isDesktop;
  
  console.log('Debug info:', {
    windowWidth: windowSize.width,
    isMobile,
    isTablet,
    isDesktop,
    hasThread: !!thread,
    shouldShowMainChannel
  });

  return (
    <>
      {shouldShowMainChannel && (
        <Window>
          <CustomChannelHeader />
          <MessageList />
          <CustomMessageInput />
        </Window>
      )}
      <Thread Input={CustomMessageInput}/>
    </>
  );
};

// Add typing indicator styles to the global styles
const TypingIndicatorStyles = () => (
  <style jsx global>{`
    .str-chat__typing-indicator {
      background: var(--str-chat__secondary-background-color);
      border-radius: 18px;
      padding: 4px 12px;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      margin: 4px 16px;
      max-width: calc(100% - 32px);
    }
    
    .str-chat__typing-indicator__avatars {
      display: flex;
      align-items: center;
      gap: 4px;
      font-size: 13px;
      line-height: 1.2;
      color: var(--str-chat__text-low-emphasis);
    }
    
    .str-chat__typing-indicator__username {
      font-weight: 500;
      color: var(--str-chat__text-color);
    }
    
    .str-chat__typing-indicator__dots {
      display: flex;
      align-items: center;
      gap: 3px;
      height: 16px;
      margin-left: 4px;
    }
    
    .str-chat__typing-indicator__dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: var(--str-chat__text-low-emphasis);
      animation: typing-dot-pulse 1.4s infinite ease-in-out both;
    }
    
    .str-chat__typing-indicator__dot:nth-child(1) { animation-delay: -0.32s; }
    .str-chat__typing-indicator__dot:nth-child(2) { animation-delay: -0.16s; }
    
    @keyframes typing-dot-pulse {
      0%, 100% { transform: scale(0.8); opacity: 0.5; }
      50% { transform: scale(1); opacity: 1; }
    }
  `}</style>
);

export default function ChatChannel({ show }: ChatChannelProps) {
  return (
    <div className={`h-full w-full ${show ? "block" : "hidden"}`}>
      <TypingIndicatorStyles />
      <Channel 
        EmojiPicker={EmojiPicker} 
        TypingIndicator={CustomTypingIndicator}
      >
        <ResponsiveChannelContent />
      </Channel>
    </div>
  );
}