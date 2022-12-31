/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
      boxShadow: {
        shadow1: "0 2px 0 -1px #1d90f5",
      },
    },
  },
  plugins: [],
};
