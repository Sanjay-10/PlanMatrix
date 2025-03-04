/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      height: {
        100: "30rem",
      },
      width: {
        100: "24rem",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(100deg, #000000, #000000, #1917f3, #ffffff)",
      },
      colors: {
        "hot-pink": "#1e40af",
        "dark-pink": "#1917f3",
        "bright-yellow": "#fff078",
      },
    },
  },
  plugins: [require("daisyui")],
};
