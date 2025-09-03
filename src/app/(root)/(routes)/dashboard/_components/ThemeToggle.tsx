"use client";

import { capitalize } from "@/utils/utils";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface ThemeToggleProps {
  showText?: boolean;
  className?: string;
  iconSize?: number;
  variant?: 'minimal' | 'outline' | 'ghost';
}

export default function ThemeToggle({ 
  showText = false, 
  className = "",
  iconSize = 16,
  variant = 'minimal'
}: ThemeToggleProps) {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const variantClasses = {
    minimal: 'border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50',
    outline: 'border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50',
    ghost: 'hover:bg-gray-100 dark:hover:bg-gray-800/50 rounded-lg'
  };

  const iconClass = `transition-all duration-300 ease-in-out ${
    !mounted ? 'invisible' : 'text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
  }`;
  
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <button
        className={`relative flex items-center justify-center p-2 transition-all ${variantClasses[variant]}
          hover:scale-105`}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        aria-label="Toggle theme"
      >
        <Sun 
          className={`${iconClass} rotate-0 scale-100 dark:-rotate-90 dark:scale-0`} 
          style={{ width: `${iconSize + 2}px`, height: `${iconSize + 2}px` }}
        />
        <Moon 
          className={`${iconClass} absolute rotate-90 scale-0 dark:rotate-0 dark:scale-100`} 
          style={{ width: `${iconSize + 2}px`, height: `${iconSize + 2}px` }}
        />
      </button>
      {showText && (
        <span className="ml-2 text-sm text-gray-600 dark:text-gray-300 transition-opacity duration-300 ease-in-out">
          {mounted ? `${capitalize(theme || "Unknown")} Mode` : "Loading..."}
        </span>
      )}
    </div>
  );
}
