/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        '121212': '#121212',
        'D4D4D8': '#D4D4D8',
        '04F': '#04F',
        'F5F5F5': '#F5F5F5',
      },
    },
  },
  plugins: [],
}
