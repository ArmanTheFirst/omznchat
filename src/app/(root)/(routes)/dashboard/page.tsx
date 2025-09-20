import { Metadata } from "next";
import { UserProfile } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import {
  Bell,
  History,
  InboxIcon,
  Languages,
  MessagesSquare,
  Palette,
  Sparkles,
  UserRoundCheck,
  ArrowRight,
  Home,
} from "lucide-react";
import {
  DashboardCard,
  DashboardCardContent,
} from "./_components/dashboard-card";
import Image from "next/image";
import Link from "next/link";
import Highlights from "./_components/highlights";
import { pluralize } from "@/utils/utils";
import ThemeToggle from "./_components/ThemeToggle";
import LanguageSelector from "./_components/LanguageSelector";
import ChatButton from "@/components/chatbutton";
import DashboardWrapper from "./_components/dashboard-wrapper";

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Your OMZN dashboard - manage your account and preferences',
};

export default async function Dashboard() {
  const user = await currentUser();
  const unreadMessages = 3;
  const activeChats = 5;
  const lastSeenDays = 6;
  const languages = [
    "English",
    "Spanish",
    "German",
    "Dutch",
    "Polish",
    "Brazilian Portuguese",
    "Serbian",
    "Turkish",
    "Vietnamese",
    "Chinese (China)",
    "Chinese (Taiwan)",
    "French",
    "Italian",
    "Arabian",
    "Czech",
    "Portuguese",
  ];
  const notifications = [
    "New Messages",
    "New Groups",
    "AI Reminders",
    "Product Updates",
  ];

  return (
    <DashboardWrapper>
      <div className="min-h-screen bg-background px-4 py-8">
        <div className="mx-auto max-w-7xl">
          <Header username={user!.username as string} />
          <div className="mt-8 space-y-8">
            <QuickData
              unreadMessages={unreadMessages}
              activeChats={activeChats}
              lastSeenDays={lastSeenDays}
            />
            <div className="flex flex-col gap-8 xl:flex-row">
              <div className="xl:w-[60%]">
                <Profile languages={languages} notifications={notifications} />
              </div>
              <div className="xl:w-[40%]">
                <Features />
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardWrapper>
  );
}

function Header({ username }: { username: string }) {
  return (
    <div className="flex flex-col gap-4 text-center">
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
        >
          <Home className="h-4 w-4" />
          <span className="underline">Back to Landing</span>
        </Link>
        <ThemeToggle />
      </div>
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
        Welcome back, {username} 👋
      </h1>
      <p className="text-xl font-medium text-gray-600 dark:text-gray-300">
        Here&apos;s what&apos;s happening in your chats today.
      </p>
      <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <span className="inline-flex items-center justify-center rounded-full bg-yellow-50 px-3 py-1 text-sm font-medium text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-200">
          ⚠️ This page features dummy data for development
        </span>
        <ChatButton label="To the Chat" disableAnimations />
      </div>
    </div>
  );
}

function QuickData({
  unreadMessages,
  activeChats,
  lastSeenDays,
}: {
  unreadMessages: number;
  activeChats: number;
  lastSeenDays: number;
}) {
  return (
    <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <DashboardCard
        label="Unread Messages"
        Icon={InboxIcon}
        amount={unreadMessages}
        description={`${pluralize(unreadMessages, "Message")} waiting for you`}
      >
        <div className="relative z-10">
          <Link
            className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
            href="/chat"
          >
            View Messages
            <ArrowRight className="ml-2 h-3 w-3" />
          </Link>
        </div>
      </DashboardCard>
      <DashboardCard
        label="Active Conversations"
        amount={activeChats}
        Icon={MessagesSquare}
        description={`${pluralize(activeChats, "Contact")} you are actively chatting with`}
      >
        <div className="mt-4 flex -space-x-4">
          {[
            "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=120&h=120&fit=crop&crop=faces",
            "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=120&h=120&fit=crop&crop=faces",
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=120&fit=crop&crop=faces",
          ]
            .slice(0, activeChats < 3 ? activeChats : 3)
            .map((avatar, index) => (
              <div
                className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-white dark:border-gray-800"
                key={index}
              >
                <Image
                  src={avatar}
                  alt="Profile picture"
                  className="object-cover"
                  fill
                />
              </div>
            ))}
          {activeChats > 3 && (
            <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white bg-gray-100 text-sm font-medium text-gray-600 dark:border-gray-800 dark:bg-gray-800 dark:text-gray-300">
              +{activeChats - 3}
            </div>
          )}
        </div>
        <div className="relative z-10">
          <Link
            href="/chat"
            className="mt-3 inline-flex items-center text-sm text-blue-600 underline transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            View all conversations
            <ArrowRight className="ml-1 h-3 w-3" />
          </Link>
        </div>
      </DashboardCard>
      <DashboardCard
        label="Last Login"
        Icon={History}
        amount={lastSeenDays}
        description={`${pluralize(lastSeenDays, "Day")} since you were last online`}
      />
      <DashboardCard label="Theme" Icon={Palette}>
        <ThemeToggle showText />
      </DashboardCard>
    </section>
  );
}

function Profile({
  languages,
  notifications,
}: {
  languages: string[];
  notifications: string[];
}) {
  return (
    <DashboardCardContent>
      <section className="flex items-center justify-between pb-4">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Your Profile
        </h2>
        <UserRoundCheck className="h-5 w-5 text-blue-500" />
      </section>
      <UserProfile
        routing="hash"
        fallback={
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-medium text-gray-600 dark:text-gray-300">
              Loading account details
            </h3>
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-blue-500 border-t-transparent" />
          </div>
        }
      />

      <div className="mt-8 space-y-8">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Languages className="h-5 w-5 text-blue-500" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Languages
            </h3>
          </div>
          <div className="flex cursor-pointer flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Select your desired language
            </p>
            <LanguageSelector languages={languages} />
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Bell className="h-5 w-5 text-blue-500" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Notifications
            </h3>
          </div>
          <div className="space-y-3">
            {notifications.map((notification) => (
              <label
                key={notification}
                className="flex cursor-pointer items-center gap-3 rounded-lg border border-gray-200 p-3 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800"
              >
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700"
                />
                <span className="text-sm text-gray-700 dark:text-gray-200">
                  {notification}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </DashboardCardContent>
  );
}

function Features() {
  return (
    <DashboardCardContent>
      <section className="flex items-center justify-between pb-4">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Discover Features
        </h2>
        <Sparkles className="h-5 w-5 text-blue-500" />
      </section>
      <Highlights />
    </DashboardCardContent>
  );
}
