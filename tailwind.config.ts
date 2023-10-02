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
        "nav-color": "#525252",
      },
      backgroundImage: {
        "open-menu": 'url("/assets/icons/menu.svg")',
        "close-menu": 'url("/assets/icons/close.svg")',
      },
    },
  },
  plugins: [],
};
export default config;
