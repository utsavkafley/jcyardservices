/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'orange': '#F46036', 
        'black': '#393D3F', 
        'white': '#E8EDDF',
        'blue' : '#83BCFF'
      },
      fontFamily: {
        sans: ['Arial', 'sans-serif'],
        complementary: ['Lato', 'sans-serif']
      }
    },
  },
  plugins: [],
}

