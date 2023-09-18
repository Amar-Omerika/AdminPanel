/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: "#438096",
        red: "#CE5C60",
        lightBlue: "#23A2CE",
        orange: "#E3A73C",
        blue: "#3762A9",
        purple: "#624590",
        lightGrey: "#E6E8E9",
        grey: "#707071",
        pink: "#B85797",
      },
    },
  },
  plugins: [],
});
