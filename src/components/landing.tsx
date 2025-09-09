"use client";

import Hero from "./hero";
import HowItWorks from "./examples";
import Features from "./features";
import FinalCTA from "./final-cta";

export default function Landing() {
  return (
    <div className="relative w-full">
      <Hero />
      <div className="space-y-32 px-4 sm:px-16 py-24 md:py-32">
        <HowItWorks />
        <Features />
        <FinalCTA />
      </div>
    </div>
  );
}
