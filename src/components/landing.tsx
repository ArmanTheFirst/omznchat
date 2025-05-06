"use client";

import Hero from "./hero";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import HowItWorks from "./how-it-works";
import Features from "./features";
import Pricing from "./pricing";
import FinalCTA from "./final-cta";

export default function Landing() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
    });
  });

  return (
    <div className="px-25 relative min-h-screen w-full space-y-32 sm:px-24 md:pb-32">
      <div className="fixed left-0 top-20 z-40 w-full bg-yellow-50 py-2 text-center text-sm font-medium text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-200">
        🚧 This project is currently in development. Some features may not be
        fully functional yet.
      </div>
      <div className="pt-0">
        <Hero />
      </div>
      <HowItWorks />
      <Features />
      <Pricing />
      <FinalCTA />
    </div>
  );
}
