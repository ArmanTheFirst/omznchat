import type { Config } from "tailwindcss";
import daisyui from "daisyui";

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
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: 'hsl(var(--card))',
        'card-foreground': 'hsl(var(--card-foreground))',
        popover: 'hsl(var(--popover))',
        'popover-foreground': 'hsl(var(--popover-foreground))',
        
        // Text colors
        muted: 'hsl(var(--muted))',
        'muted-foreground': 'hsl(var(--muted-foreground))',
        
        // Accent colors
        accent: 'hsl(var(--accent))',
        'accent-foreground': 'hsl(var(--accent-foreground))',
        
        // UI elements
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        
        // Status colors
        destructive: 'hsl(var(--destructive))',
        'destructive-foreground': 'hsl(var(--destructive-foreground))',
        success: 'hsl(var(--success))',
        'success-foreground': 'hsl(var(--success-foreground))',
        warning: 'hsl(var(--warning))',
        'warning-foreground': 'hsl(var(--warning-foreground))',
        
        // Primary brand colors
        primary: 'hsl(var(--primary))',
        'primary-foreground': 'hsl(var(--primary-foreground))',
        
        // Secondary brand colors
        secondary: 'hsl(var(--secondary))',
        'secondary-foreground': 'hsl(var(--secondary-foreground))',
        
        // Special UI elements
        navbar: 'hsl(var(--navbar))',
        'navbar-foreground': 'hsl(var(--navbar-foreground))',
        footer: 'hsl(var(--footer))',
        'footer-foreground': 'hsl(var(--footer-foreground))',
        
        // Highlight colors for hero component
        'highlight-light': 'hsl(var(--highlight-light))',
        'highlight-dark': 'hsl(var(--highlight-dark))',
        
        // Blue variants for gradients and accents
        'blue-primary': 'hsl(var(--blue-primary))',
        'blue-secondary': 'hsl(var(--blue-secondary))',
        'blue-tertiary': 'hsl(var(--blue-tertiary))',
        
        // Indigo variants for gradients
        'indigo-primary': 'hsl(var(--indigo-primary))',
        'indigo-secondary': 'hsl(var(--indigo-secondary))',
        'indigo-tertiary': 'hsl(var(--indigo-tertiary))',
        
        // Gray variants
        'gray-100': 'hsl(var(--gray-100))',
        'gray-200': 'hsl(var(--gray-200))',
        'gray-300': 'hsl(var(--gray-300))',
        'gray-400': 'hsl(var(--gray-400))',
        'gray-500': 'hsl(var(--gray-500))',
        'gray-600': 'hsl(var(--gray-600))',
        'gray-700': 'hsl(var(--gray-700))',
        'gray-800': 'hsl(var(--gray-800))',
        'gray-900': 'hsl(var(--gray-900))',
        
        // Gradient text colors
        'gradient-from': 'hsl(var(--gradient-from))',
        'gradient-to': 'hsl(var(--gradient-to))',
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
};

export default config;
