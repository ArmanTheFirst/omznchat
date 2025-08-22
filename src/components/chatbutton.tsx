"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/utils/utils";
import { motion } from "framer-motion";

const MotionLink = motion.create(Link);

interface ChatButtonProps
  extends Omit<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    | "onAnimationStart"
    | "onDragEnd"
    | "onDragStart"
    | "onDrag"
    | "onDragOver"
    | "onDragEnter"
    | "onDragLeave"
    | "onDragExit"
    | "onDragOverCapture"
    | "onDragStartCapture"
    | "onDragEndCapture"
    | "onTransitionEnd"
    | "onTransitionStart"
    | "onTransitionEndCapture"
    | "onTransitionStartCapture"
  > {
  label?: string;
  disableAnimations?: boolean;
}

export default function ChatButton({
  label = "Start Chatting",
  className,
  disableAnimations = false,
  ...props
}: ChatButtonProps) {
  const Component = disableAnimations ? Link : MotionLink;

  return (
    <Component
      {...props}
      href="/chat"
      className={cn(
        "group flex w-fit items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-500 via-blue-600 to-sky-500 px-6 py-2 font-semibold text-white shadow-lg transition-transform duration-150 ease-in-out hover:scale-105 hover:shadow-xl",
        className,
      )}
      {...(!disableAnimations && {
        initial: { opacity: 0, y: -30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.7, ease: "easeOut" },
      })}
    >
      {label}
      <ArrowRight className="ml-1 h-4 w-4 tracking-normal transition-transform duration-150 ease-in-out group-hover:-translate-x-0.5" />
    </Component>
  );
}
