/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.jsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        'hanken': ['Hanken Grotesk', 'sans-serif'],
        'hanken-medium': ['Hanken Grotesk Medium', 'sans-serif'],
        'hanken-bold': ['Hanken Grotesk Bold', 'sans-serif'],
        'hanken-extrabold': ['Hanken Grotesk ExtraBold', 'sans-serif'],
      },
      colors: {
        'light-red': 'hsl(0, 100%, 67%)',
        'orange-yellow': 'hsl(39, 100%, 56%)',
        'green-teal': 'hsl(166, 100%, 37%)',
        'cobalt-blue': 'hsl(234, 85%, 45%)',
        'light-slate-blue': 'hsl(252, 100%, 67%)',
        'light-royal-blue': 'hsl(241, 81%, 54%)',
        'violet-blue': 'hsla(256, 72%, 46%, 1)',
        'persian-blue': 'hsla(241, 72%, 46%, 0)',
        'white': 'hsl(0, 0%, 100%)',
        'pale-blue': 'hsl(221, 100%, 96%)',
        'light-lavender': 'hsl(241, 100%, 89%)',
        'dark-gray-blue': 'hsl(224, 30%, 27%)',
      },
      fontSize: {
        'paragraph': '18px',
      },
    },
  },
  plugins: [],
};
