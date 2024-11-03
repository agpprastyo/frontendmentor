/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          darkCyan: 'hsl(158, 36%, 37%)',
          darkerDarkCyan: 'hsl(158, 70%, 25%)', // More saturated and darker
          cream: 'hsl(30, 38%, 92%)',
        },
        neutral: {
          veryDarkBlue: 'hsl(212, 21%, 14%)',
          darkGrayishBlue: 'hsl(228, 12%, 48%)',
          white: 'hsl(0, 0%, 100%)',
        },
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        fraunces: ['Fraunces', 'serif'],
      },
      fontSize: {
        paragraph: '14px',
      },
      fontWeight: {
        medium: 500,
        bold: 700,
      },
    },
  },
  plugins: [],
}