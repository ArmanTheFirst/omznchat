import React from "react";
import { motion } from "framer-motion";
import {
  MessageSquare,
  Zap,
  Layout,
  Lock,
  Users,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import { LucideIcon } from "lucide-react";
import ChatButton from "./chatbutton";

interface Feature {
  name: string;
  desc: string;
  icon: LucideIcon;
  demo: React.ReactElement;
}

const features: Feature[] = [
  {
    name: "AI-Powered Messaging",
    desc: "Smart chat assistant, automated replies, and real-time AI insights for every conversation.",
    icon: MessageSquare,
    demo: (
      <div className="relative flex h-12 w-full items-start justify-start">
        <div className="flex max-w-[100px] rounded-lg rounded-tl-none bg-gray-200 px-2 py-1 text-xs dark:bg-gray-700">
          Can you summarize this chat?
        </div>
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: [0, 1, 1, 0], y: [0, -2, -2, -4] }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 0.5 }}
          className="absolute left-28 top-1 z-10 rounded-md border border-blue-300 bg-blue-50 px-2 py-1 text-[8px] text-blue-600 shadow-sm dark:border-blue-700 dark:bg-blue-900/40 dark:text-blue-300"
        >
          <div className="absolute -bottom-1 left-4 h-2 w-2 rotate-45 bg-blue-50 dark:bg-blue-900/40"></div>
          <div className="flex items-center gap-1 text-xs">
            <span>🤖</span>
            <span>"This chat covers project launch and next steps."</span>
          </div>
        </motion.div>
      </div>
    ),
  },
  {
    name: "Ultra-Fast, Real-Time Chat",
    desc: "Lightning-fast team chat tool with instant delivery and seamless sync across devices.",
    icon: Zap,
    demo: (
      <div className="flex w-full flex-col items-center justify-center">
        <div className="flex items-center space-x-2">
          <motion.div
            animate={{ scale: [1, 0.9, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="h-3 w-3 rounded-full bg-green-500"
          />
          <div className="h-2 w-32 rounded-full bg-gray-200 dark:bg-gray-700">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, repeat: Infinity }}
              className="h-full rounded-full bg-blue-500"
            />
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "Smart Replies & Suggestions",
    desc: "AI-enhanced conversations with context-aware smart replies and productivity boosters.",
    icon: Sparkles,
    demo: (
      <div className="flex w-full items-center justify-center">
        <div className="flex space-x-1">
          {["👍", "💡", "🚀", "🤖"].map((emoji, i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 1, delay: i * 0.1, repeat: Infinity }}
              className="text-lg"
            >
              {emoji}
            </motion.div>
          ))}
        </div>
      </div>
    ),
  },
  {
    name: "End-to-End Encryption",
    desc: "Your data stays private and secure—always. Built for privacy-focused teams and users.",
    icon: Lock,
    demo: (
      <div className="flex w-full items-center justify-center">
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="relative h-8 w-8"
        >
          <div className="absolute inset-0 rounded-full border-2 border-blue-500 border-t-transparent" />
          <div className="absolute inset-2 rounded-full border-2 border-green-500 border-t-transparent" />
        </motion.div>
      </div>
    ),
  },
  {
    name: "Built for Teams & Communities",
    desc: "Organize group chats, collaborate in channels, and boost productivity with AI for messaging.",
    icon: Users,
    demo: (
      <div className="flex w-full items-center justify-center">
        <div className="flex -space-x-2">
          {[
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=faces",
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=faces",
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=faces",
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&crop=faces",
          ].map((avatar, i) => (
            <motion.div
              key={i}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity }}
              className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-white dark:ring-gray-800"
            >
              <Image
                src={avatar}
                alt="Team member avatar"
                fill
                sizes="40px"
                className="object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    ),
  },
  {
    name: "Modern, Clean UI",
    desc: "Sleek, distraction-free design optimized for speed, clarity, and SaaS standards.",
    icon: Layout,
    demo: (
      <div className="flex w-full items-center justify-center">
        <div className="grid w-24 grid-cols-2 gap-2">
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              backgroundColor: ["#E5E7EB", "#93C5FD", "#E5E7EB"],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="h-4 rounded bg-gray-200 dark:bg-gray-700"
          />
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              backgroundColor: ["#E5E7EB", "#93C5FD", "#E5E7EB"],
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
            className="h-4 rounded bg-gray-200 dark:bg-gray-700"
          />
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              backgroundColor: ["#E5E7EB", "#93C5FD", "#E5E7EB"],
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
            className="col-span-2 h-4 rounded bg-gray-200 dark:bg-gray-700"
          />
        </div>
      </div>
    ),
  },
];

export default function Features() {
  return (
    <section
      className="relative px-2 py-16 text-center sm:px-4 md:px-0 md:py-20"
      id="features"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl" />
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-4 text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl"
      >
        AI Chat Platform Features for Teams & Creators
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto mb-10 max-w-xl text-base text-gray-600 dark:text-gray-300 sm:text-lg"
      >
        OMZN Chat empowers you with AI messaging, real-time collaboration, and
        secure, distraction-free chat—built for modern SaaS teams and creators.
      </motion.p>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-2 sm:px-4 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
            className="flex min-h-[300px] flex-col items-center justify-between rounded-2xl border border-gray-100 bg-white p-5 shadow-md transition-all duration-300 hover:border-blue-200 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-700 sm:p-7"
          >
            <div className="mb-3 flex items-center justify-center">
              <feature.icon className="h-8 w-8 text-blue-500" aria-hidden />
            </div>
            <h3 className="mb-1 text-center text-lg font-semibold text-gray-900 dark:text-white sm:text-xl">
              {feature.name}
            </h3>
            <p className="mb-3 text-center text-sm text-gray-600 dark:text-gray-300 sm:text-base">
              {shortenDesc(feature.desc)}
            </p>
            <div className="flex w-full flex-1 items-center justify-center">
              {feature.demo}
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <ChatButton
          label="Start Your AI Chat Free"
          className="w-full max-w-xs"
        />
      </div>
    </section>
  );
}

function shortenDesc(desc: string) {
  // Lightweight, visually consumable: keep to ~12 words, break at first period or comma if possible
  if (desc.length < 80) return desc;
  const firstBreak =
    desc.indexOf(".") > 0 ? desc.indexOf(".") : desc.indexOf(",");
  if (firstBreak > 0 && firstBreak < 80) return desc.slice(0, firstBreak + 1);
  return desc.slice(0, 80) + "...";
}
