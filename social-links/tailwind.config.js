/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter ", "sans-serif"],

      },
      colors: {

            green: {
            DEFAULT: "hsl(75, 94%, 57%)",
            },
            white: {
            DEFAULT: "hsl(0, 0%, 100%)",
            },
            gray: {
              700: "hsl(0, 0%, 20%)",
              800: "hsl(0, 0%, 12%)",
              900: "hsl(0, 0%, 8%)",
            }
      },
    },
  },
  plugins: [],
}

