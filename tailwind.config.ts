import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        mono: ["var(--font-mont)"],
      },
      gridTemplateColumns: {
        // Создаем кастомный шаблон колонок
        'custom-layout': '1fr 2fr 1fr',
      },
    },
    screens: {
      '400': '400px',
      '450': '450px',
      '480': '480px',
      '550': '550px',
      '600': '600px',
      '650': '650px',
      '680': '680px',
      '681': '681px',
      '800': '800px',
      '900': '900px',
      '949': '949px',
      '950': '950px',
      '1024': '1024px',
      '1050': '1050px',
      '1238': '1238px'
    }
  },
  plugins: [],
};
export default config;
