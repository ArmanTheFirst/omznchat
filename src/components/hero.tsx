import ChatButton from "./chatbutton";
import { motion, useAnimation, useInView, Variants, Transition } from "framer-motion";
import { useEffect, useRef } from "react";
import { Sparkles, Users, MessageSquare, Zap } from "lucide-react";

export default function Hero() {
  // For entrance animation on text content
  const textRef = useRef(null);
  const textInView = useInView(textRef, { once: true, margin: "-100px" });
  const textControls = useAnimation();
  useEffect(
    function handleTextInView() {
      if (textInView) {
        textControls.start("visible");
      }
    },
    [textInView, textControls],
  );

  // Variants for staggered text entrance
  const textVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        type: "spring" as const,
        stiffness: 60,
        damping: 18,
      },
    }),
  };

  // Abstract floating icons animation
  const iconTransition: Transition = {
    duration: 16,
    repeat: Infinity,
    ease: "easeInOut",
    repeatType: "loop" as const,
  };

  const iconVariants = {
    animate: (delay = 0) => ({
      y: [0, -10, 0, 10, 0],
      x: [0, 10, 0, -10, 0],
      transition: {
        ...iconTransition,
        delay,
      },
    }),
  };

  return (
    <section className="relative flex flex-col items-center justify-center md:pb-24 md:pt-8 lg:pb-32 lg:pt-16">
      {/* Abstract floating icons background */}
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
        <motion.div
          custom={0}
          animate={iconVariants.animate(0)}
          className="absolute left-1/4 top-12 hidden h-16 w-16 rounded-full bg-blue-100/60 dark:bg-blue-900/30 md:block"
        >
          <Sparkles className="m-4 h-8 w-8 text-blue-400 dark:text-blue-300" />
        </motion.div>
        <motion.div
          custom={1}
          animate={iconVariants.animate(2)}
          className="absolute bottom-16 right-1/4 hidden h-14 w-14 rounded-full bg-indigo-100/60 dark:bg-indigo-900/30 md:block"
        >
          <Zap className="m-3 h-7 w-7 text-indigo-400 dark:text-indigo-300" />
        </motion.div>
        <motion.div
          custom={2}
          animate={iconVariants.animate(4)}
          className="absolute bottom-8 left-8 hidden h-12 w-12 rounded-full bg-sky-100/60 dark:bg-sky-900/30 md:block"
        >
          <Users className="m-2 h-6 w-6 text-sky-400 dark:text-sky-300" />
        </motion.div>
        <motion.div
          custom={3}
          animate={iconVariants.animate(6)}
          className="absolute right-8 top-8 hidden h-10 w-10 rounded-full bg-purple-100/60 dark:bg-purple-900/30 md:block"
        >
          <MessageSquare className="m-1 h-5 w-5 text-purple-400 dark:text-purple-300" />
        </motion.div>
      </div>
      {/* Textual content */}
      <div
        ref={textRef}
        className="relative z-10 flex max-w-2xl flex-1 flex-col items-center text-center"
      >
        <motion.span
          custom={1}
          initial="hidden"
          animate={textControls}
          variants={textVariants}
          className="mb-4 mt-8 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 md:mt-12"
        >
          <Sparkles className="h-4 w-4" /> AI Chat SaaS
        </motion.span>
        <motion.h1
          custom={2}
          initial="hidden"
          animate={textControls}
          variants={textVariants}
          className="mb-3 text-4xl font-extrabold tracking-tight text-light_text_primary dark:text-text-primary sm:text-5xl md:text-6xl"
        >
          Smarter Conversations.{" "}
          <span className="bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
            AI-Powered. Free Forever.
          </span>
        </motion.h1>
        <motion.p
          custom={3}
          initial="hidden"
          animate={textControls}
          variants={textVariants}
          className="mb-6 max-w-xl text-base font-medium text-light_text_secondary dark:text-text-secondary sm:text-lg"
        >
          OMZN Chat is the modern AI chat platform for teams, creators, and
          businesses. Enjoy real-time messaging, smart replies, and secure
          collaboration—no paywalls, no nonsense.
        </motion.p>
        <motion.ul
          custom={4}
          initial="hidden"
          animate={textControls}
          variants={textVariants}
          className="mb-8 flex flex-wrap items-center justify-center gap-2 md:gap-3"
        >
          <li className="flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-blue-700 shadow-sm ring-1 ring-blue-100 dark:bg-gray-900/80 dark:text-blue-300 dark:ring-blue-900/30">
            <MessageSquare className="h-4 w-4" /> Smart AI Chat
          </li>
          <li className="flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-indigo-700 shadow-sm ring-1 ring-indigo-100 dark:bg-gray-900/80 dark:text-indigo-300 dark:ring-indigo-900/30">
            <Zap className="h-4 w-4" /> Real-Time Messaging
          </li>
          <li className="flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-sky-700 shadow-sm ring-1 ring-sky-100 dark:bg-gray-900/80 dark:text-sky-300 dark:ring-sky-900/30">
            <Users className="h-4 w-4" /> Built for Teams
          </li>
        </motion.ul>
        <motion.div
          custom={5}
          initial="hidden"
          animate={textControls}
          variants={textVariants}
        >
          <ChatButton label="Start Free – No Card Needed" />
        </motion.div>
      </div>
    </section>
  );
}
