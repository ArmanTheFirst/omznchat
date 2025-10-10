"use client";

import { useChannelStateContext, useChatContext, useTypingContext } from 'stream-chat-react';
import type { TypingIndicatorProps } from 'stream-chat-react';

export const CustomTypingIndicator = (props: TypingIndicatorProps) => {
  const { threadList } = props;

  const { channelConfig, thread } = useChannelStateContext();
  const { client } = useChatContext();
  const { typing = {} } = useTypingContext();

  if (channelConfig?.typing_events === false) {
    return null;
  }

  const typingInChannel = !threadList
    ? Object.values(typing).filter(
        ({ parent_id, user }) => user?.id !== client.user?.id && !parent_id,
      )
    : [];

  const typingInThread = threadList
    ? Object.values(typing).filter(
        ({ parent_id, user }) =>
          user?.id !== client.user?.id && parent_id === thread?.id,
      )
    : [];

  const typingUsers = threadList ? typingInThread : typingInChannel;

  if (typingUsers.length === 0) {
    return null;
  }

  return (
    <div className="str-chat__typing-indicator">
      <div className="str-chat__typing-indicator__avatars">
        {(threadList ? typingInThread : typingInChannel).map(({ user }, i) => (
          <div key={`typing-${user?.id || i}`} className="username">
            <div className="typing-indicator-name">{user?.name}</div>
          </div>
        ))}
        <span className="typing-indicator-text">is typing</span>
      </div>
      <div className="str-chat__typing-indicator__dots">
        <div className="str-chat__typing-indicator__dot" />
        <div className="str-chat__typing-indicator__dot" />
        <div className="str-chat__typing-indicator__dot" />
      </div>
    </div>
  );
};

export default CustomTypingIndicator;