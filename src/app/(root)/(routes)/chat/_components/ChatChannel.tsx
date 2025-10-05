import {
  Channel,
  MessageInput,
  MessageList,
  Thread,
  Window,
  useChannelStateContext,
} from "stream-chat-react";
import { EmojiPicker } from "stream-chat-react/emojis";
import CustomChannelHeader from "./CustomChannelHeader";
import { useDismissKeyboard } from "@/hooks/useDismissKeyboard";
import useWindowSize from "@/hooks/useWindowSize";
import { mdBreakpoint, lgBreakpoint, smBreakpoint } from "@/utils/tailwind";

interface ChatChannelProps {
  show: boolean;
  hideChannelOnThread: boolean;
}

// Custom MessageInput with multi-line support
const CustomMessageInput = () => {
  const { thread } = useChannelStateContext();
  const { containerRef } = useDismissKeyboard();
  
  // Apply consistent padding on all screen sizes, with extra padding on mobile for safe area
  const inputContainerClass = thread ? 
    "pb-4 md:pb-4 sm:pb-[calc(env(safe-area-inset-bottom,0px)+1rem)]" : 
    "pb-6 md:pb-6 sm:pb-[calc(env(safe-area-inset-bottom,0px)+1.5rem)]";
  
  return (
    <div ref={containerRef} className={inputContainerClass}>
      <MessageInput 
        additionalTextareaProps={{
          onKeyDown: (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
            if (e.key === 'Enter' && !e.shiftKey && !(e.metaKey || e.ctrlKey)) {
              e.preventDefault();
              const form = e.currentTarget.closest('form');
              form?.requestSubmit();
            }
          }
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

export default function ChatChannel({ show }: ChatChannelProps) {
  return (
    <div className={`h-full w-full ${show ? "block" : "hidden"}`}>
      <Channel EmojiPicker={EmojiPicker}>
        <ResponsiveChannelContent />
      </Channel>
    </div>
  );
}