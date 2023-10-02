import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/assets/**/*.{svg}",
  ],
  theme: {
    extend: {
      colors: {
        "menu-color": "#172554",
        "nav-color": "#14532D",
      },
      backgroundImage: {
        "open-menu": 'url("/assets/icons/menu.svg")',
        "close-menu": 'url("/assets/icons/close.svg")',
        "hero-img": 'url("/assets/images/hero2.jpg")',
      },
      backgroundColor: {
        "hero-shadow-img": "rgba(0, 0, 0, 0.6)",
      },
    },
  },
  plugins: [],
};
export default config;
