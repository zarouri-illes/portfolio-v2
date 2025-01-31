import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
    },
    extend: {
      fontFamily:{
        sans: 'var(--font-sans)',
        serif: 'var(--font-serif)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        changeColor: {
          '0%': { fill: '#505fff' },
          '25%': { fill: '#c664ed' },
          '50%': { fill: '#ff69b4' },
          '75%': { fill: '#ff0062' },
          '100%': { fill: '#5085ff' },
        },
        glow: {
          '0%': { filter: 'drop-shadow(0 0 5px rgba(255, 255, 255, 0.8))' },
          '50%': { filter: 'drop-shadow(0 0 25px rgb(180, 180, 180))' },
          '100%': { filter: 'drop-shadow(0 0 5px rgba(255, 255, 255, 0.8)' },
        },
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'change-color': 'changeColor 5s infinite',
        'glow': 'glow 2s infinite',
      },
    },
  },
  plugins: [],
};
export default config;
