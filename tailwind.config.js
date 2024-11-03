/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1DA1F2",
        secondary: "#14171A",
        accent: "#FFAD1F",
      },
    },
  },
  darkMode: "class",
  plugins: [
    require("@tailwindcss/typography"), // Plugin untuk tipografi
  ],
};
