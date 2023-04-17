/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "light": "#fffcf2",
        "dark": "#252422",
        "primary": "#f4a261",
        "secondary": "#403d39",
        "tertiary": "#ccc5b9",
      },
    },
  },
  plugins: [],
};
