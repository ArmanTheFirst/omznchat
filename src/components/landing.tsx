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
    <div className="px-25 relative min-h-screen w-full space-y-32 pt-10 sm:px-24 md:pb-32">
      <Hero />
      <HowItWorks />
      <Features />
      <Pricing />
      <FinalCTA />
    </div>
  );
}
