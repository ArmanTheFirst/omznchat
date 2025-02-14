"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { useEffect } from "react";
import AOS from "aos";

export default function ChatButton() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
    });
  });

  return (
    <Link href="/chat">
      <button
        className="group btn btn-primary text-lg"
        data-aos="fade-right"
        data-aos-once="true"
        data-aos-delay="300"
      >
        <Image
          src={logo}
          alt="logo"
          width={30}
          height={30}
          className="transition-all duration-300 group-hover:-rotate-12"
        />
        <span className="transition-all duration-300 group-hover:translate-x-0.5">
          Take me to Chat
        </span>
      </button>
    </Link>
  );
}
