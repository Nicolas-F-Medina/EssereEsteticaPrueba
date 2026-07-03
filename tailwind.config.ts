import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        essereRose: "#b83f69",
        essereBlush: "#f3a8bd",
        esserePetal: "#fff0f5",
        essereInk: "#31232a"
      }
    }
  },
  plugins: []
};

export default config;
