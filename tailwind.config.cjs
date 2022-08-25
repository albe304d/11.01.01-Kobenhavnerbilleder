/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      overskrifter: "#A77979",
      baggrund: "#704F4F",
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
