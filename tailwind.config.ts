import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/assets/**/*.{svg}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "menu-color": "#172554",
      },
      backgroundImage: {
        "open-menu": 'url("/assets/icons/menu.svg")',
        "close-menu": 'url("/assets/icons/close.svg")',
        "hero-img": 'url("/assets/images/hero2.jpg")',
        "cine-img": 'url("/assets/images/ticket.jpg")',
        "cupon-img": 'url("/assets/images/cupon2.png")',
      },
      backgroundColor: {
        "hero-shadow-img": "rgba(0, 0, 0, 0.6)",
      },
    },
  },
  plugins: [],
};
export default config;
