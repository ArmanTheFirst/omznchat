import type { Config } from "tailwindcss";
import daisyui from "daisyui";

// Define your color variables
const lightColors = {
  primary: "hsl(222.2 47.4% 11.2%)",
  background: "hsl(0 0% 100%)",
  foreground: "hsl(222.2 47.4% 11.2%)",
  card: "hsl(0 0% 100%)",
  'card-foreground': "hsl(222.2 47.4% 11.2%)",
  popover: "hsl(0 0% 100%)",
  'popover-foreground': "hsl(222.2 47.4% 11.2%)",
  muted: "hsl(210 40% 96.1%)",
  'muted-foreground': "hsl(215.4 16.3% 46.9%)",
  accent: "hsl(210 40% 96.1%)",
  'accent-foreground': "hsl(222.2 47.4% 11.2%)",
  border: "hsl(214.3 31.8% 91.4%)",
  input: "hsl(214.3 31.8% 91.4%)",
  ring: "hsl(222.2 47.4% 11.2%)",
  destructive: "hsl(0 84.2% 60.2%)",
  'destructive-foreground': "hsl(210 40% 98%)",
  success: "hsl(142.1 76.2% 36.3%)",
  'success-foreground': "hsl(210 40% 98%)",
  warning: "hsl(38 92% 50%)",
  'warning-foreground': "hsl(210 40% 98%)",
  navbar: "hsl(0 0% 100%)",
  'navbar-foreground': "hsl(222.2 47.4% 11.2%)",
  footer: "hsl(0 0% 98%)",
  'footer-foreground': "hsl(222.2 47.4% 11.2%)",
};

const darkColors = {
  primary: "hsl(210 40% 98%)",
  background: "hsl(222.2 47.4% 11.2%)",
  foreground: "hsl(210 40% 98%)",
  card: "hsl(222.2 47.4% 11.2%)",
  'card-foreground': "hsl(210 40% 98%)",
  popover: "hsl(222.2 47.4% 11.2%)",
  'popover-foreground': "hsl(210 40% 98%)",
  muted: "hsl(217.2 32.6% 17.5%)",
  'muted-foreground': "hsl(215 20.2% 65.1%)",
  accent: "hsl(217.2 32.6% 17.5%)",
  'accent-foreground': "hsl(210 40% 98%)",
  border: "hsl(217.2 32.6% 17.5%)",
  input: "hsl(217.2 32.6% 17.5%)",
  ring: "hsl(212.7 26.8% 83.9%)",
  destructive: "hsl(0 62.8% 30.6%)",
  'destructive-foreground': "hsl(210 40% 98%)",
  success: "hsl(142.1 70.6% 45.3%)",
  'success-foreground': "hsl(210 40% 98%)",
  warning: "hsl(38 92% 50%)",
  'warning-foreground': "hsl(210 40% 98%)",
  navbar: "hsl(222.2 47.4% 11.2%)",
  'navbar-foreground': "hsl(210 40% 98%)",
  footer: "hsl(222.2 47.4% 15%)",
  'footer-foreground': "hsl(210 40% 98%)",
};

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Base colors
        background: 'hsl(var(--color-background))',
        foreground: 'hsl(var(--color-foreground))',
        card: 'hsl(var(--color-card))',
        'card-foreground': 'hsl(var(--color-card-foreground))',
        popover: 'hsl(var(--color-popover))',
        'popover-foreground': 'hsl(var(--color-popover-foreground))',
        
        // Text colors
        muted: 'hsl(var(--color-muted))',
        'muted-foreground': 'hsl(var(--color-muted-foreground))',
        
        // Accent colors
        accent: 'hsl(var(--color-accent))',
        'accent-foreground': 'hsl(var(--color-accent-foreground))',
        
        // UI elements
        border: 'hsl(var(--color-border))',
        input: 'hsl(var(--color-input))',
        ring: 'hsl(var(--color-ring))',
        
        // Status colors
        destructive: 'hsl(var(--color-destructive))',
        'destructive-foreground': 'hsl(var(--color-destructive-foreground))',
        success: 'hsl(var(--color-success))',
        'success-foreground': 'hsl(var(--color-success-foreground))',
        warning: 'hsl(var(--color-warning))',
        'warning-foreground': 'hsl(var(--color-warning-foreground))',
        
        // Special UI elements
        navbar: 'hsl(var(--color-navbar))',
        'navbar-foreground': 'hsl(var(--color-navbar-foreground))',
        footer: 'hsl(var(--color-footer))',
        'footer-foreground': 'hsl(var(--color-footer-foreground))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [daisyui, require("tailwindcss-animate")],
  daisyui: {
    themes: [
      {
        light: {
          ...lightColors,
          "--color-primary-focus": lightColors.primary,
          "--color-secondary": lightColors.muted,
          "--color-accent": lightColors.accent,
          "--color-neutral": lightColors.border,
          "--color-base-100": lightColors.background,
          "--color-base-200": lightColors.card,
          "--color-base-300": lightColors.border,
          "--color-info": "#3B82F6",
          "--color-success": lightColors.success,
          "--color-warning": lightColors.warning,
          "--color-error": lightColors.destructive,
        },
      },
      {
        dark: {
          ...darkColors,
          "--color-primary-focus": darkColors.primary,
          "--color-secondary": darkColors.muted,
          "--color-accent": darkColors.accent,
          "--color-neutral": darkColors.border,
          "--color-base-100": darkColors.background,
          "--color-base-200": darkColors.card,
          "--color-base-300": darkColors.border,
          "--color-info": "#60A5FA",
          "--color-success": darkColors.success,
          "--color-warning": darkColors.warning,
          "--color-error": darkColors.destructive,
        },
      },
    ],
    darkTheme: "dark",
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: true,
  },
};

export default config;
