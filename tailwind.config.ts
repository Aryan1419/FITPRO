import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        fitpro: {
          blue: {
            50: "#f0f9ff",
            100: "#e0f2fe",
            200: "#bae6fd",
            300: "#7dd3fc",
            400: "#38bdf8",
            500: "#0ea5e9",
            600: "#0284c7", // Core Brand Blue (from whistle logo)
            700: "#0369a1",
            800: "#075985",
            900: "#0c4a6e",
          },
          lime: {
            50: "#f7fee7",
            100: "#ecfccb",
            200: "#d9f99d",
            300: "#bef264",
            400: "#a3e635",
            500: "#84cc16", // Brand Tagline Lime: "Train • Play • Achieve"
            600: "#65a30d",
            700: "#4d7c0f",
          },
          charcoal: {
            50: "#f8fafc",
            100: "#f1f5f9",
            800: "#1e293b",
            900: "#0f172a",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
