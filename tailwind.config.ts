import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.css"
  ],
  theme: {
    extend: {
      colors: {
        foam: "#f7fbf7",
        tile: "#d8eee3",
        mint: "#8fcfba",
        deep: "#173f3a",
        ink: "#16211f",
        coral: "#ef766f",
        sun: "#f4c96d",
        steel: "#7c9290"
      },
      boxShadow: {
        studio: "0 24px 70px rgba(23, 63, 58, .18)"
      },
      borderRadius: {
        studio: "8px"
      }
    }
  },
  plugins: []
};

export default config;
