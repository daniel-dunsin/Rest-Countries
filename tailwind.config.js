/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkBg: "hsl(207, 26%, 17%)",
        darkText: "hsl(0, 0%, 100%)",
        darkElement: "hsl(209, 23%, 22%)",
        lightBg: "hsl(0, 0%, 98%)",
        lightText: "hsl(200, 15%, 8%)",
      },
    },
  },
  plugins: [],
};
