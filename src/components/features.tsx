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
    name: "Ultra-fast & real-time",
    desc: "Stream-powered, near-instant messaging.",
    icon: Zap,
    demo: (
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
    ),
  },
  {
    name: "AI-assisted chat",
    desc: "Smart suggestions, summaries, auto-replies.",
    icon: MessageSquare,
    demo: (
      <div className="relative flex h-12 w-full items-start justify-start">
        <div className="flex max-w-[100px] rounded-lg rounded-tl-none bg-gray-200 px-2 py-1 text-xs dark:bg-gray-700">
          Want to meet tomorrow?
        </div>

        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: [0, 1, 1, 0], y: [0, -2, -2, -4] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 0.5,
          }}
          className="absolute left-28 top-1 z-10 rounded-md border border-blue-300 bg-blue-50 px-2 py-1 text-[8px] text-blue-600 shadow-sm dark:border-blue-700 dark:bg-blue-900/40 dark:text-blue-300"
        >
          <div className="absolute -bottom-1 left-4 h-2 w-2 rotate-45 bg-blue-50 dark:bg-blue-900/40"></div>
          <div className="flex items-center gap-1 text-xs">
            <span>💡</span>
            <span>Reply: &quot;What time works?&quot;</span>
          </div>
        </motion.div>
      </div>
    ),
  },
  {
    name: "Clean & modern UI",
    desc: "Optimized for speed, clarity, and ease of use.",
    icon: Layout,
    demo: (
      <div className="grid w-full grid-cols-2 gap-2">
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
    ),
  },
  {
    name: "End-to-end encryption",
    desc: "Your conversations stay private & secure.",
    icon: Lock,
    demo: (
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="relative h-8 w-8"
      >
        <div className="absolute inset-0 rounded-full border-2 border-blue-500 border-t-transparent" />
        <div className="absolute inset-2 rounded-full border-2 border-green-500 border-t-transparent" />
      </motion.div>
    ),
  },
  {
    name: "Built for teams & communities",
    desc: "Organize discussions, shared spaces.",
    icon: Users,
    demo: (
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
    ),
  },
  {
    name: "Interactive & engaging",
    desc: "AI-driven interactivity, reactions, and insights.",
    icon: Sparkles,
    demo: (
      <div className="flex space-x-1">
        {["👍", "❤️", "🎉", "💡"].map((emoji, i) => (
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
    ),
  },
];

export default function Features() {
  return (
    <section className="relative py-20 text-center" id="product">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl" />
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-4xl font-bold md:text-5xl"
      >
        Experience the Next Generation of Chat
      </motion.h1>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:grid-cols-3">
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
            className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-lg transition-all duration-300 hover:border-blue-500 hover:shadow-blue-500/10 dark:border-gray-800 dark:bg-gray-900"
          >
            <div className="absolute -right-10 -top-10 h-20 w-20 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-xl transition-all duration-300 group-hover:scale-150" />

            <feature.icon className="mb-4 h-8 w-8 text-blue-500" />

            <h3 className="mb-2 text-xl font-semibold">{feature.name}</h3>
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              {feature.desc}
            </p>

            <div className="mt-4 flex h-12 items-center justify-center">
              {feature.demo}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16"
      >
        <ChatButton className="m-auto" />
      </motion.div>
    </section>
  );
}
