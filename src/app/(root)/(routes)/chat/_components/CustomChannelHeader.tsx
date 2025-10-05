import {
  ChannelHeader,
  ChannelHeaderProps,
  useChannelActionContext,
  useChannelStateContext,
} from "stream-chat-react";
import { UserResource } from "@clerk/types";
import { Bell, BellOff } from "lucide-react";
import { useUser } from "@clerk/nextjs";

export default function CustomChannelHeader(props: ChannelHeaderProps) {
  const { user } = useUser();

  const {
    channel: { id: channelId },
  } = useChannelStateContext();

  return (
    <div className="flex items-center justify-between gap-3 bg-white dark:bg-[#17191C] border-b border-b-gray-200 dark:border-b-gray-800 p-3">
      <ChannelHeader {...props} />
      {user && channelId && (
        <ChannelNotificationToggleButton user={user} channelId={channelId} />
      )}
    </div>
  );
}

interface ChannelNotificationToggleButtonProps {
  user: UserResource;
  channelId: string;
}

function ChannelNotificationToggleButton({
  user,
  channelId,
}: ChannelNotificationToggleButtonProps) {
  const { addNotification } = useChannelActionContext();

  const mutedChannels = user.unsafeMetadata.mutedChannels || [];

  const channelMuted = mutedChannels.includes(channelId);

  async function setChannelMuted(channelId: string, muted: boolean) {
    try {
      let mutedChannelsUpdate: string[];

      if (muted) {
        mutedChannelsUpdate = [...mutedChannels, channelId];
      } else {
        mutedChannelsUpdate = mutedChannels.filter((id) => id !== channelId);
      }

      await user.update({
        unsafeMetadata: {
          mutedChannels: mutedChannelsUpdate,
        },
      });

      addNotification(
        `Channel notifications ${muted ? "muted" : "unmuted"}`,
        "success"
      );
    } catch (error) {
      console.error(error);
      addNotification("Something went wrong. Please try again.", "error");
    }
  }

  return (
    <div className="me-6">
      {!channelMuted ? (
        <button 
          onClick={() => setChannelMuted(channelId, true)}
          title="Mute channel notifications"
          className="p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-800 dark:text-gray-200"
        >
          <BellOff className="h-5 w-5" />
        </button>
      ) : (
        <button 
          onClick={() => setChannelMuted(channelId, false)}
          title="Unmute channel notifications"
          className="p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-800 dark:text-gray-200"
        >
          <Bell className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}
