/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js}",
    "./index.html",
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: ' "Inter", "sans - serif"',
      },
    },
  },
  plugins: [],
};
