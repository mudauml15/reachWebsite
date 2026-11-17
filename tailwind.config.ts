import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: { sans: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"] },
      colors: {
        cream: "#F9F8F4",
        ink: "#132B47",
        coral: "#E8664D",
        gold: "#EDB33F",
        teal: "#4A8C85",
        mint: "#E6EEE9",
        deep: "#173B4D",
        panel: "#214B5C",
        navy: "#112B47",
      },
    },
  },
  plugins: [],
};

export default config;
