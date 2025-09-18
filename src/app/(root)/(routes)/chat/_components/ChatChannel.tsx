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

interface ChatChannelProps {
  show: boolean;
  hideChannelOnThread: boolean;
}

// Custom MessageInput with mobile-optimized padding
const CustomMessageInput = () => {
  // Check if we're in a thread view
  const { thread } = useChannelStateContext();
  
  // Apply consistent padding on all screen sizes, with extra padding on mobile for safe area
  const inputContainerClass = thread ? 
    "pb-4 md:pb-4 sm:pb-[calc(env(safe-area-inset-bottom,0px)+1rem)]" : 
    "pb-6 md:pb-6 sm:pb-[calc(env(safe-area-inset-bottom,0px)+1.5rem)]";
    
  return (
    <div className={inputContainerClass}>
      <MessageInput />
    </div>
  );
};

export default function ChatChannel({
  show,
  hideChannelOnThread,
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
