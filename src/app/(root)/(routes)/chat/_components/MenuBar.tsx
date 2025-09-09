import { UserButton } from "@clerk/nextjs";
import { BellOff, BellRing, LayoutDashboard, Moon, Sun, Users, Home, DotIcon } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  getCurrentPushSubscription,
  registerPushNotifications,
  unregisterPushNotifications,
} from "@/notifications/pushService";
import { LoadingIndicator } from "stream-chat-react";
import DisappearingMessage from "@/components/chat/DisappearingMessage";
import ThemeToggle from "../../dashboard/_components/ThemeToggle";

interface MenuBarProps {
  onUserMenuClick: () => void;
}

export default function MenuBar({ onUserMenuClick }: MenuBarProps) {

  return (
    <div className="flex items-center justify-between gap-3 border-e border-e-[#DBDDE1] bg-white p-3 dark:border-e-gray-800 dark:bg-[#020817]">
      <UserButton
        userProfileUrl="/dashboard"
        afterSignOutUrl="/"
      >
      </UserButton> 
      <div className="flex items-center gap-6">
        <PushSubscriptionToggleButton />
        <Link href="/dashboard" title="Go to Dashboard">
          <LayoutDashboard className="h-5 w-5 cursor-pointer" />
        </Link>
        <span title="Show users">
          <Users className="cursor-pointer" onClick={onUserMenuClick} />
        </span>
        <div className="flex-shrink-0">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}

function PushSubscriptionToggleButton() {
  const [hasActivePushSubscription, setHasActivePushSubscription] =
    useState<boolean>();

  const [loading, setLoading] = useState(false);

  const [confirmationMessage, setConfirmationMessage] = useState<string>();

  useEffect(() => {
    async function getActivePushSubscription() {
      const subscription = await getCurrentPushSubscription();
      setHasActivePushSubscription(!!subscription);
    }
    getActivePushSubscription();
  }, []);

  async function setPushNotificationsEnabled(enabled: boolean) {
    if (loading) return;
    setLoading(true);
    setConfirmationMessage(undefined);

    try {
      if (enabled) {
        await registerPushNotifications();
      } else {
        await unregisterPushNotifications();
      }
      setConfirmationMessage(
        "Push notifications " + (enabled ? "enabled" : "disabled")
      );
      setHasActivePushSubscription(enabled);
    } catch (error) {
      console.error(error);
      if (enabled && Notification.permission === "denied") {
        alert("Please enable push notifications in your browser settings");
      } else {
        alert("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  }

  if (hasActivePushSubscription === undefined) return null;

  return (
    <div className="relative">
      {loading && (
        <span className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
          <LoadingIndicator />
        </span>
      )}
      {confirmationMessage && (
        <DisappearingMessage className="absolute left-1/2 top-8 z-10 -translate-x-1/2 rounded-lg bg-white px-2 py-1 shadow-md dark:bg-black">
          {confirmationMessage}
        </DisappearingMessage>
      )}
      {hasActivePushSubscription ? (
        <span title="Disable push notifications on this device">
          <BellOff
            onClick={() => setPushNotificationsEnabled(false)}
            className={`cursor-pointer ${loading ? "opacity-10" : ""}`}
          />
        </span>
      ) : (
        <span title="Enable push notifications on this device">
          <BellRing
            onClick={() => setPushNotificationsEnabled(true)}
            className={`cursor-pointer ${loading ? "opacity-10" : ""}`}
          />
        </span>
      )}
    </div>
  );
}
