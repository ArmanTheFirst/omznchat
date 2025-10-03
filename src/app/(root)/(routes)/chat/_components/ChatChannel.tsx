import { useRef } from "react";
import {
  Channel,
  MessageInput,
  MessageList,
  Thread,
  Window,
  useChannelStateContext,
  useMessageInputContext,
} from "stream-chat-react";
import { EmojiPicker } from "stream-chat-react/emojis";
import CustomChannelHeader from "./CustomChannelHeader";
import { useDismissKeyboard } from "@/hooks/useDismissKeyboard";

interface ChatChannelProps {
  show: boolean;
  hideChannelOnThread: boolean;
}

// Custom MessageInput with multi-line support
const CustomMessageInput = () => {
  // Check if we're in a thread view
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
            // Allow new lines with Shift+Enter or Cmd+Enter (Mac) / Ctrl+Enter (Windows)
            if (e.key === 'Enter' && !e.shiftKey && !(e.metaKey || e.ctrlKey)) {
              e.preventDefault();
              // Get the form element and submit it
              const form = e.currentTarget.closest('form');
              if (form) {
                form.requestSubmit();
              }
            }
          }
        }}
        minRows={1}
        maxRows={5}
      />
    </div>
  );
};

export default function ChatChannel({
  show,
}: ChatChannelProps) {
  return (
    <div className={`h-full w-full ${show ? "block" : "hidden"}`}>
      <Channel EmojiPicker={EmojiPicker}>
        <Window>
          <CustomChannelHeader />
          <MessageList />
          <CustomMessageInput />
        </Window>
        <Thread />
      </Channel>
    </div>
  );
}
