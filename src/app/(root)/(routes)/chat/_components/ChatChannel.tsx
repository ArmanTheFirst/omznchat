import {
  Channel,
  MessageInput,
  MessageList,
  Thread,
  Window,
  useChannelStateContext,
} from "stream-chat-react";
import CustomTypingIndicator from "./CustomTypingIndicator";
import { EmojiPicker } from "stream-chat-react/emojis";
import CustomChannelHeader from "./CustomChannelHeader";
import { useDismissKeyboard } from "@/hooks/useDismissKeyboard";
import useWindowSize from "@/hooks/useWindowSize";
import { lgBreakpoint, smBreakpoint } from "@/utils/tailwind";

interface ChatChannelProps {
  show: boolean;
  hideChannelOnThread: boolean;
}

const CustomMessageInput = () => {
  const { channel, thread } = useChannelStateContext();
  const { containerRef } = useDismissKeyboard();
  
  const inputContainerClass = thread ? 
    "pb-4 md:pb-4 sm:pb-[calc(env(safe-area-inset-bottom,0px)+1rem)]" : 
    "pb-6 md:pb-6 sm:pb-[calc(env(safe-area-inset-bottom,0px)+1.5rem)]";
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey && !(e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      const form = e.currentTarget.closest('form');
      form?.requestSubmit();
      channel?.stopTyping();
    } else {
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

const ResponsiveChannelContent = () => {
  const { thread } = useChannelStateContext();
  const windowSize = useWindowSize();
  
  const isDesktop = windowSize.width >= lgBreakpoint;
  const shouldShowMainChannel = !thread || isDesktop;

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
      <Channel 
        EmojiPicker={EmojiPicker} 
        TypingIndicator={CustomTypingIndicator}
      >
        <ResponsiveChannelContent />
      </Channel>
    </div>
  );
}