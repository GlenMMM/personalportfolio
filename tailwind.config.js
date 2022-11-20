/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeIn1s: "fadeIn 1s ease-in-out",
        fadeIn2s: "fadeIn 1.5s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translate(0px,40px)" },
          "100%": { opacity: 100, transform: "translate(0px,0px)" },
        },
      },
      fontFamily: {
        poppins: ["Poppins"],
        neue: ["Neue Haas Unica"],
      },
    },
  },
  plugins: [],
};
