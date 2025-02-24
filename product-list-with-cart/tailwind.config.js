/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
        aspectRatio: {
              '3/2' : '3 / 2',
            '4/3': '4 / 3',
            '5/4': '5 / 4',
        },
        screens: {
              'mobile' : '375px',
            'tablet' : '768px',
            'desktop' : '1440px',
        },
  		colors: {
            "color-red": "rgba(199, 59, 15, 1)",
            "color-rose-900": "rgba(38, 15, 8, 1)",
            "color-rose-500": "rgba(135, 99, 90, 1)",
            "color-rose-400": "rgba(173, 138, 133, 1)",
            "color-rose-300": "rgba(202, 175, 167, 1)",
            "color-rose-100": "rgba(245, 238, 236, 1)",
            "color-rose-50": "rgba(252, 248, 246, 1)",
            "color-green": "rgba(30, 165, 117, 1)",
            "color-black": "rgba(0, 0, 0, 1)",
            "color-white": "rgba(255, 255, 255, 1)"
        }
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

