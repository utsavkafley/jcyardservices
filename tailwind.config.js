/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#F46036",
        black: "#393D3F",
        white: "#FFF",
        blue: "#83BCFF",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        complementary: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};
