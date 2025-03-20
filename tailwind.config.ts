import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F5F1EA',
        primary: '#4C4E41',
        hover: '#31322C',
      },
      lineHeight: {
        base: "20px", // Теперь можно использовать leading-base
      },
      letterSpacing: {
        '3p': '3%', // добавляем пользовательский класс для letter-spacing 3%
      },
  },
 },
  plugins: [],
} satisfies Config;
