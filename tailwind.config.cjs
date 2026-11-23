/** @type {import('tailwindcss').Config} */

// Woodland palette. The existing class names are kept (orange = accent,
// red = second accent, zinc = neutrals) so every section re-themes at once:
//   orange -> moss    red -> fern    zinc -> forest-tinted neutrals
const moss = {
  50: "#f4f8ec",
  100: "#e6efd3",
  200: "#cfe0aa",
  300: "#b2cc78",
  400: "#96b752",
  500: "#7c9c3a",
  600: "#62802b",
  700: "#4c6424",
  800: "#3e5022",
  900: "#344420",
  950: "#1a240d",
};

const fern = {
  50: "#edf8f1",
  100: "#d4eedd",
  200: "#ade0c1",
  300: "#7bcb9e",
  400: "#4caf79",
  500: "#2f915f",
  600: "#21744c",
  700: "#1c5d3f",
  800: "#194a34",
  900: "#163d2c",
  950: "#0b2218",
};

const forest = {
  50: "#f6f7f3",
  100: "#eceee7",
  200: "#dadfd3",
  300: "#bec5b5",
  400: "#949d8a",
  500: "#6d7664",
  600: "#535b4c",
  700: "#3e453a",
  800: "#2a3028",
  900: "#1b201a",
  950: "#0e120e",
};

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        orange: moss,
        red: fern,
        zinc: forest,
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'grid-scroll': 'grid-scroll 20s linear infinite',
        'gradient': 'gradient 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'grid-scroll': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(50px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        }
      },
      backgroundImage: {
        'grid-white': 'linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
        'grid-black': 'linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 1px, transparent 1px)',
      }
    },
  },
  plugins: [],
}
