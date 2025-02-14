import type { Config } from "tailwindcss";
import daisyui from "daisyui";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core colors
        primary: "#1D4ED8", // Main brand color (buttons, links, icons)
        background: "#0F172A", // App background (charcoal blue)
        surface: "#1E293B", // Card/containers (steel blue)
        accent: "#22D3EE", // Hover states, highlights, interactions
        "text-primary": "#F8FAFC", // Main text color (near white)
        "text-secondary": "#94A3B8", // Subtitles, timestamps (cool gray)

        // Feedback colors
        error: "#EF4444", // Errors or alerts
        success: "#22C55E", // Success messages (optional)
        warning: "#FBBF24", // Warnings (optional)

        // Background differentiation
        navbar: "#1E293B", // Navbar color to slightly contrast background
        footer: "#1E293B", // Footer base color
      },
      backgroundColor: {
        app: "var(--background)", // Syncing the main background with CSS variables
      },
      textColor: {
        foreground: "var(--foreground)", // Syncing text colors
      },
    },
  },
  darkMode: "class", // Enable class-based dark mode
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        omzn: {
          primary: "#1D4ED8",
          secondary: "#22D3EE",
          accent: "#22D3EE",
          neutral: "#1E293B",
          "base-100": "#0F172A",
          info: "#22D3EE",
          success: "#14B8A6",
          warning: "#F59E0B",
          error: "#EF4444",
          surface: "#1E293B",
          "text-primary": "#F8FAFC",
          "text-secondary": "#94A3B8",
          navbar: "#1E293B",
          footer: "#1E293B",
        },
      },
    ],
  },
} satisfies Config;
