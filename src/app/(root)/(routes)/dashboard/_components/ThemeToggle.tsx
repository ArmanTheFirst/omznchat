"use client";

import { capitalize } from "@/utils/utils";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle({ showText = false }) {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  // Ensure the component is mounted before rendering theme-dependent content
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex items-center gap-1">
      <button
        className="btn btn-ghost relative flex items-center justify-center overflow-hidden rounded-full border-gray-500"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </button>
      {showText && (
        <span className="ml-2 transition-opacity duration-300 ease-in-out">
          {mounted ? `${capitalize(theme || "Unknown")} Mode` : "Loading..."}
        </span>
      )}
    </div>
  );
}
