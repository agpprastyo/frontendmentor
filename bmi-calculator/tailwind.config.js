/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            "colors": {
                "gunmetal": "rgba(37, 51, 71, 1)",
                "dark-electric-blue": "rgba(94, 110, 133, 1)",
                "blue": "rgba(52, 95, 246, 1)",
                "pure-white": "rgba(255, 255, 255, 1)"
            },
            fontFamily: {
                'barlow-semi-condensed': ['"Barlow Semi Condensed"', 'sans-serif'],
                'fraunces': ['"Fraunces"', 'serif'],
                'inter': ['"Inter"', 'sans-serif'],
                'manrope': ['"Manrope"', 'sans-serif'],
                'montserrat': ['"Montserrat"', 'sans-serif'],
                'poppins': ['"Poppins"', 'sans-serif'],
                'public-sans': ['"Public Sans"', 'sans-serif'],
            },
        }
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}

