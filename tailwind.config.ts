import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/**/*.{ts,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#C41230",
          "red-dark": "#9B0E25",
          "red-light": "#E8173A",
          black: "#0A0A0A",
          "gray-dark": "#111111",
          "gray-mid": "#1A1A1A",
          "gray-light": "#2A2A2A",
          cream: "#F5F5F0",
          "cream-dark": "#E8E8E2",
          muted: "#888888",
        },
        background: "#0A0A0A",
        foreground: "#F5F5F0",
        primary: { DEFAULT: "#C41230", foreground: "#F5F5F0" },
        secondary: { DEFAULT: "#1A1A1A", foreground: "#F5F5F0" },
        muted: { DEFAULT: "#1A1A1A", foreground: "#888888" },
        accent: { DEFAULT: "#C41230", foreground: "#F5F5F0" },
        destructive: { DEFAULT: "#C41230", foreground: "#F5F5F0" },
        border: "#2A2A2A",
        input: "#2A2A2A",
        ring: "#C41230",
        card: { DEFAULT: "#111111", foreground: "#F5F5F0" },
        popover: { DEFAULT: "#111111", foreground: "#F5F5F0" },
      },
      fontFamily: {
        display: ['"Barlow Condensed"', "sans-serif"],
        body: ["Barlow", "sans-serif"],
        sans: ["Barlow", "sans-serif"],
      },
      borderRadius: {
        lg: "4px",
        md: "3px",
        sm: "2px",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
        "slide-in-left": "slideInLeft 0.5s ease forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;