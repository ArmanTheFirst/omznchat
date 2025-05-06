"use client";

import Link from "next/link";

import { useEffect } from "react";
import AOS from "aos";
import { ArrowRight } from "lucide-react";
import { cn } from "@/utils/utils";

interface ChatButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  label?: string;
}

export default function ChatButton({
  label = "Start Chatting",
  className,
  ...props
}: ChatButtonProps) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
    });
  });

  return (
    <Link
      {...props}
      href="/chat"
      className={cn(
        "group flex w-fit items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-500 via-blue-600 to-sky-500 px-6 py-2 font-semibold text-white shadow-lg transition-transform duration-150 ease-in-out hover:scale-105 hover:shadow-xl",
        className,
      )}
      data-aos="fade-down"
      data-aos-delay="400"
      data-aos-offset="0"
      data-aos-once="true"
    >
      {label}
      <ArrowRight className="ml-1 h-4 w-4 tracking-normal transition-transform duration-150 ease-in-out group-hover:-translate-x-0.5" />
    </Link>
  );
}
