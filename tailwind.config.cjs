/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      overskrifter: "#A77979",
      baggrund: "#8F3928",
      roed: "#C60601",
      blaa: "#55AFF5",
      bg: "#F7FFFF",
      stjerner: "#EBF55F",
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
