import { useEffect } from "react";

export function useScrollToTop() {
  useEffect(() => {
    const scrollToTop = () => {
      // Try multiple methods for better compatibility
      if (typeof window !== "undefined") {
        // Method 1: Instant scroll to top
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;

        // Method 2: Smooth scroll after a brief delay
        setTimeout(() => {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        }, 100);
      }
    };

    // Wait for animations and layout to settle before scrolling
    const timeoutId = setTimeout(scrollToTop, 800);

    return () => clearTimeout(timeoutId);
  }, []);
}
