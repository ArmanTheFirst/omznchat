"use client";

import Hero from "./hero";
import HowItWorks from "./examples";
import Features from "./features";
import FinalCTA from "./final-cta";

export default function Landing() {
  return (
    <div className="px-25 relative min-h-screen w-full space-y-32 pt-16 sm:px-16 md:pb-32">
      <Hero />
      <HowItWorks />
      <Features />
      <FinalCTA />
    </div>
  );
}
