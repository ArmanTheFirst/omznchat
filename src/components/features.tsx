"use client";

import React from 'react';
import { 
  MessageSquare, 
  Zap, 
  Lock, 
  Sparkles, 
  Bell, 
  Code2, 
  Mic, 
  Users, 
  Plug, 
  Palette,
  Server,
  User,
  PhoneCall,
  Moon,
  PenLine,
  Pin,
  Clock,
  Glasses
} from 'lucide-react';
import { GlowingEffect } from '@/components/ui/glowing-effect';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  isWishlist?: boolean;
  area?: string;
  variant?: 'default' | 'tall' | 'wide';
}

const FeatureCard = ({ 
  title, 
  description, 
  icon, 
  isWishlist = false, 
  area = ''
}: FeatureCardProps) => {
  return (
    <li className={`min-h-[12rem] xs:min-h-[13rem] sm:min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-4 overflow-hidden rounded-xl p-4 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="flex items-center justify-between">
              <div className="rounded-lg border border-border p-1.5 sm:p-2">
                {icon}
              </div>
              {isWishlist && (
                <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900/50 dark:text-blue-300">
                  on wishlist
                </span>
              )}
            </div> 
            <div className="space-y-2 sm:space-y-2">
              <h3 className="text-lg font-semibold text-foreground md:text-xl">
                {title}
              </h3>
              <p className="text-base leading-snug text-muted-foreground">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

interface FeatureItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  area: string;
  isWishlist?: boolean;
}

const currentFeatures: FeatureItem[] = [
  {
    title: "real-time chat that just works",
    description: "snappy messages—what you type, they see. nothing lost in space.",
    icon: <MessageSquare className="h-4 w-4 text-primary" />,
    area: "[grid-area:1/1/2/3] md:[grid-area:1/1/2/7] lg:[grid-area:1/1/2/5] xl:[grid-area:1/1/2/5]"
  },
  {
    title: "simple, safe sign-in",
    description: "sign in with your favorite account—no password headaches, no drama.",
    icon: <User className="h-4 w-4 text-primary" />,
    area: "[grid-area:1/3/2/5] md:[grid-area:1/7/2/13] lg:[grid-area:2/1/3/5] xl:[grid-area:2/1/3/5]"
  },
  {
    title: "notifications—if you want them",
    description: "turn on push in your browser (or pwa) and get pinged for new messages. no pressure, zero spam.",
    icon: <Users className="h-4 w-4 text-primary" />,
    area: "[grid-area:2/1/3/5] md:[grid-area:2/1/3/7] lg:[grid-area:1/5/3/8] xl:[grid-area:1/5/3/8]"
  },
  {
    title: "dashboard for your chats",
    description: "see all chats and settings on one clean dashboard route. control in one place.",
    icon: <Code2 className="h-4 w-4 text-primary" />,
    area: "[grid-area:3/1/4/3] md:[grid-area:2/7/3/13] lg:[grid-area:1/8/2/13] xl:[grid-area:1/8/2/13]"
  }
];

const wishlistFeatures: FeatureItem[] = [
  {
    title: "incognito chat",
    description: "anonymously participate in direct/group chats to honestly share our thoughts",
    icon: <Glasses className="h-4 w-4 text-primary" />,
    area: "[grid-area:3/3/4/5] md:[grid-area:3/1/4/13] lg:[grid-area:2/8/3/13] xl:[grid-area:2/8/3/13]",
    isWishlist: true,
  },
  {
    title: "pin anything, find anything",
    description: "star messages, pin media, and search your entire chat history—because lost info is so last decade.",
    icon: <Zap className="h-4 w-4 text-primary" />,
    area: "[grid-area:4/1/5/3] md:[grid-area:4/1/5/7] lg:[grid-area:3/1/4/5] xl:[grid-area:3/1/4/5]",
    isWishlist: true,
  },
  {
    title: "ai for chat gossip",
    description: "summarize conversations that you missed, ask explicit questions about the chat",
    icon: <Sparkles className="h-4 w-4 text-primary" />,
    area: "[grid-area:4/3/5/5] md:[grid-area:4/7/5/13] lg:[grid-area:3/5/4/9] xl:[grid-area:3/5/4/9]",
    isWishlist: true,
  },
  {
    title: "ai writing buddy",
    description: "intelligent messages that use your writing style and fit the chat",
    icon: <PenLine className="h-4 w-4 text-primary" />,
    area: "[grid-area:5/1/6/5] md:[grid-area:5/1/6/13] lg:[grid-area:3/9/4/13] xl:[grid-area:3/9/4/13]",
    isWishlist: true,
  },
  {
    title: "remind me, but nicer",
    description: "auto-reminders for birthdays, deadlines, or just when someone needs a nudge—zero nagging, promise.",
    icon: <Clock className="h-4 w-4 text-primary" />,
    area: "[grid-area:6/1/7/3] md:[grid-area:6/1/7/7] lg:[grid-area:4/1/5/7] xl:[grid-area:4/1/5/7]",
    isWishlist: true,
  },
  {
    title: "agent mode",
    description: "let an ai workflow speak for you while you sleep",
    icon: <Moon className="h-4 w-4 text-primary" />,
    area: "[grid-area:6/3/7/5] md:[grid-area:6/7/7/13] lg:[grid-area:4/7/5/10] xl:[grid-area:4/7/5/10]",
    isWishlist: true,
  },
  {
    title: "voice & call support",
    description: "voice messages, calls as well as ai-assistance for them",
    icon: <PhoneCall className="h-4 w-4 text-primary" />,
    area: "[grid-area:7/1/8/5] md:[grid-area:7/1/8/13] lg:[grid-area:4/10/5/13] xl:[grid-area:4/10/5/13]",
    isWishlist: true,
  }
];

// Combine features with type for better type safety
const features: FeatureItem[] = [
  ...currentFeatures.map(feature => ({ ...feature, isWishlist: false })),
  ...wishlistFeatures.map(feature => ({ ...feature, isWishlist: true }))
];

export default function Features() {
  return (
    <section className="py-0 px-4" id="features">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight">what’s in the box</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            everything you need to chat smarter, not harder. (even more on the way.)
          </p>
        </div>

        <ul className="grid grid-cols-4 gap-3 md:grid-cols-12 md:grid-rows-4 lg:max-h-[60rem] lg:grid-rows-4">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              isWishlist={feature.isWishlist}
              area={feature.area}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
