import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const colors = {
  // Core colors
  primary: "#1D4ED8", // Main brand color (buttons, links, icons)
  background: "#0F172A", // App background (charcoal blue)
  surface: "#1E293B", // Card/containers (steel blue)
  card_border: "#334155", // (grayish blue)
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

  // Light mode colors

  light_background: "#FAFAFA",
  light_surface: "#F2F2F2",
  light_accent: "#2563EB",
  light_text_primary: "#101010",
  light_text_secondary: "#4D4D4D",
  light_error: "#DC2626",
  light_success: "#16A34A",
  light_warning: "#EAB308",
  light_navbar: "#EDEDED",
  light_footer: "#EDEDED",
  light_primary: "#2563EBA",
  light_card_border: "#D1D5DB", // (soft gray),
};

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors,
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
          ...colors,
          secondary: colors.accent,
          neutral: colors.surface,
          "base-100": colors.background,
          info: colors.accent,
        },
      },
    ],
  },
} satisfies Config;
