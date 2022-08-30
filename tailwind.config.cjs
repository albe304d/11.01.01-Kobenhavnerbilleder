/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      overskrifter: "#A77979",
      baggrund: "#8F3928",
      roed: "#C60601",
      blaa: "#55AFF5",
      bg: "#F7FFFF",
      stjerner: "#EBF55F",
      darksort: "#000000",
      darkgron: "#103033",
      darkblaa: "#3E4EC7",
      darkoverskrift: "#A1CFB5",
    },
    extend: {
      fontFamily: {
        khand: "'Khand', system-ui, sans-serif",
        redhat: "'Red Hat Text', sans-serif",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
