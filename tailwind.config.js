/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        accent: "#CCA4DE",
        base: "#232323",
        base2: "#303030",
      },
    },
  },
  plugins: [],
};
