/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Instrument Serif", "serif"],
        mono: ["DM Mono", "monospace"],
      },
      colors: {
        cream: "#f0ede6",
        ink: "#0a0a0a",
      },
    },
  },
  plugins: [],
};