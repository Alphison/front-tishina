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
        // 👇 Add CSS variables
        sans: ["var(--font-plus)"],
        mono: ["var(--font-mont)"],
      },
    },
    screens: {
      '400': '400px',
      '450': '450px',
      '480': '480px',
      '600': '600px',
      '650': '650px',
      '680': '680px',
      '681': '681px',
      '800': '800px',
      '949': '949px',
      '950': '950px',
      '1050': '1050px',
      '1238': '1238px'
    }
  },
  plugins: [],
};
export default config;
