/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.jsx",
    ],
    theme: {
        extend: {
            colors: {
                'slightly-desaturated-cyan': '#5FB4A2',
                'dark-blue': '#203A4C',
                'grayish-dark-blue': '#33323D',
                'very-light-gray': '#FAFAFA',
                'light-gray': '#EAEAEB',
                'bright-red': '#F43030'

            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}
