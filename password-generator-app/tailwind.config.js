/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'color-1-red': 'rgba(246,74,74,1)',
        'color-2-orange': 'rgba(251,124,88,1)',
        'color-3-yellow': 'rgba(248,205,101,1)',
        'color-neon-green': 'rgba(164,255,175,1)',
        'color-almost-white': 'rgba(230,229,234,1)',
        'color-grey': 'rgba(129,125,146,1)',
        'color-dark-grey': 'rgba(36,35,44,1)',
        'color-very-dark-grey': 'rgba(24,23,31,1)',
      },
    },
  },
  plugins: [],
}

