/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.jsx",
  ],
  theme: {
    extend: {
      aspectRatio: {
        '4/3': '4 / 3',
        '5/4': '5 / 4',
      },
      colors: {
        primary: {
          red: 'hsl(0, 78%, 62%)',
          cyan: 'hsl(180, 62%, 55%)',
          orange: 'hsl(34, 97%, 64%)',
          blue: 'hsl(212, 86%, 64%)',
        },
        neutral: {
          'very-dark-blue': 'hsl(234, 12%, 34%)',
          'grayish-blue': 'hsl(229, 6%, 66%)',
          'very-light-gray': 'hsl(0, 0%, 98%)',
        },
      },
      fontFamily: {
        body: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        body: '15px',
      },
    },
  },
  plugins: [],
}
