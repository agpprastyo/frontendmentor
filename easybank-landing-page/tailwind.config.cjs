/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.jsx",
    ],
    theme: {
        container: {
            center: true,
            screens: {
                sm: "100%",
                md: "100%",
                lg: "1024px",
                xl: "1280px",
            },
        },
        extend: {
            aspectRatio: {
                '4/3': '4 / 3',
            },

            fontFamily: {
                fraunces: ['Fraunces', 'serif'],
                montserrat: ['Montserrat', 'sans-serif'],
                publicSans: ['Public Sans', 'sans-serif'],
            },
            fontSize: {
                base: '18px',
            },
            colors: {
                primary: {
                    darkBlue: 'hsl(233, 26%, 24%)',
                    limeGreen: 'hsl(136, 65%, 51%)',
                    brightCyan: 'hsl(192, 70%, 51%)',
                    lightLimeGreen: 'hsl(136, 65%, 75%)', // Lighter lime green
                    lightBrightCyan: 'hsl(192, 70%, 75%)' // Lighter bright cyan
                },
                neutral: {
                    grayishBlue: 'hsl(233, 8%, 62%)',
                    lightGrayishBlue: 'hsl(220, 16%, 96%)',
                    veryLightGray: 'hsl(0, 0%, 98%)',
                    white: 'hsl(0, 0%, 100%)',
                },
            },
        },
    },
    plugins: [],
}
