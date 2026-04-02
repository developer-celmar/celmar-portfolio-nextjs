import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f5f8ff",
          100: "#eaf0ff",
          200: "#cfdcff",
          300: "#afc1ff",
          400: "#7f9cff",
          500: "#4f78ff",
          600: "#345ce5",
          700: "#2948b6",
          800: "#243e8f",
          900: "#23366f"
        }
      },
      boxShadow: {
        soft: "0 20px 60px rgba(15, 23, 42, 0.14)"
      }
    },
  },
  plugins: [],
};

export default config;
