import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xs: ["0.8rem", "0.96rem"],
      base: ["1rem", "1.2rem"],
      md: ["1.25rem", "1.5rem"],
      lg: ["1.5rem", "1.813rem"],
      xl: ["2rem", "2.375rem"],
      "2xl": ["3rem", "3.625rem"],
      "3xl": ["4rem", "4.813rem"],
      "4xl": ["6rem", "7.188rem"],
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Dracula's Castle + Sci-Fi Theme
        "primary-text": "#E8E3FF",
        "secondary-text": "#B399FF",
        "tertiary-text": "#8B7AFF",
        stroke: "#4A3B5C",
        "primary-purple": "#6B46C1",
        "secondary-purple": "#8B5CF6",
        "accent-purple": "#A855F7",
        "dark-purple": "#3B1E5B",
        "deep-purple": "#1E0A2E",
        "primary-blue": "#3730A3",
        "secondary-blue": "#5B21B6",
        "neon-purple": "#C084FC",
        "neon-pink": "#E879F9",
        "castle-stone": "#2D1B42",
        "castle-dark": "#1A0B26",
        "light-background": "#2D1B42",
        "white-background": "#1A0B26",
        "shadow-purple": "#4C1D95",
        "glow-purple": "#9333EA",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        'purple-glow': '0 0 20px rgba(147, 51, 234, 0.5)',
        'purple-glow-lg': '0 0 40px rgba(147, 51, 234, 0.8)',
        'castle-depth': '0 8px 32px rgba(26, 11, 38, 0.8)',
        'inner-glow': 'inset 0 0 20px rgba(192, 132, 252, 0.3)',
      },
      backgroundImage: {
        'castle-gradient': 'linear-gradient(135deg, #1A0B26 0%, #2D1B42 50%, #3B1E5B 100%)',
        'neon-gradient': 'linear-gradient(90deg, #8B5CF6 0%, #C084FC 50%, #E879F9 100%)',
        'royal-gradient': 'linear-gradient(180deg, #6B46C1 0%, #3730A3 100%)',
      },
      animation: {
        'pulse-glow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
