import {
  ChannelList,
  ChannelPreviewMessenger,
  ChannelPreviewUIComponentProps,
} from "stream-chat-react";
import MenuBar from "./MenuBar";
import { UserResource } from "@clerk/types";
import { useCallback, useEffect, useState } from "react";
import UsersMenu from "./UsersMenu";

interface ChatSidebarProps {
  user: UserResource;
  show: boolean;
  onClose: () => void;
  customActiveChannel?: string;
}

export default function ChatSidebar({
  user,
  show,
  onClose,
  customActiveChannel,
}: ChatSidebarProps) {
  const [usersMenuOpen, setUsersMenuOpen] = useState(false);

  useEffect(() => {
    if (!show) setUsersMenuOpen(false);
  }, [show]);

  const ChannelPreviewCustom = useCallback(
    (props: ChannelPreviewUIComponentProps) => (
      <ChannelPreviewMessenger
        {...props}
        onSelect={() => {
          props.setActiveChannel?.(props.channel, props.watchers);
          onClose();
        }}
      />
    ),
    [onClose]
  );

  return (
    <div
      className={`relative w-full flex-col md:max-w-[360px] ${
        show ? "flex" : "hidden"
      }`}
    >
      <div className="relative h-full w-full overflow-hidden">
        {usersMenuOpen && (
          <div className="absolute inset-0 z-10 h-full w-full bg-white dark:bg-[#020817]">
            <UsersMenu
              loggedInUser={user}
              onClose={() => setUsersMenuOpen(false)}
              onChannelSelected={() => {
                setUsersMenuOpen(false);
                onClose();
              }}
            />
          </div>
        )}
        <div className={`h-full w-full ${usersMenuOpen ? 'invisible' : 'visible'}`}>
          <MenuBar onUserMenuClick={() => setUsersMenuOpen(true)} />
          <ChannelList
            filters={{
              type: "messaging",
              members: { $in: [user.id] },
            }}
            sort={{ last_message_at: -1 }}
            options={{ state: true, presence: true, limit: 10 }}
            customActiveChannel={customActiveChannel}
            showChannelSearch
            additionalChannelSearchProps={{
              searchForChannels: true,
              searchQueryParams: {
                channelFilters: {
                  filters: { members: { $in: [user.id] } },
                },
              },
            }}
            Preview={ChannelPreviewCustom}
          />
        </div>
      </div>
    </div>
  );
}
