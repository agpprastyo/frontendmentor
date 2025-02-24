/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

  "colors": {
  "10": "#ff9797",
      "11": "#f8f8fb",
      "12": "#141625",
      "01": "#7c5dfa",
      "02": "#9277ff",
      "03": "#1e2139",
      "04": "#252945",
      "05": "#dfe3fa",
      "06": "#888eb0",
      "07": "#7e88c3",
      "08": "#ec5757"
},
  "fontSize": {
  "sm": "0.8125rem",
      "base": "0.9375rem",
      "lg": "1.5rem",
      "xl": "2.25rem"
},
  "fontFamily": {
  "league-spartan": "League Spartan"
},
  "borderRadius": {
  "rounded-0": "0rem",
      "rounded-1": "0.10082333087921143rem",
      "rounded-2": "0.13333333333333333rem",
      "rounded-3": "0.13804000218709309rem",
      "rounded-4": "0.1718733310699463rem",
      "rounded-5": "0.26666666666666666rem",
      "rounded-6": "0.4rem",
      "rounded-7": "0.5333333333333333rem",
      "rounded-8": "1.3333333333333333rem",
      "rounded-9": "1.6rem"
}

    },
  },
  plugins: [],
}

