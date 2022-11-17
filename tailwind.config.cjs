/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        secondary: "#bbbbbb",
      },
      boxShadow: {
        card: "0px 0px 10px 6px rgba(0,0,0,0.2)",
      },
      animation: {
        rotate: "rotate 15s  infinite",
      },
      keyframes: {
        rotate: {
          from: { transform: "rotate(0)" },
          to: { transform: "rotate(360deg)" },
        },
      },
    },
  },

  plugins: [require("@tailwindcss/typography")],
};
