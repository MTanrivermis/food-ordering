/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ffbe33",
        secondary: "#222831",
      },
      fontFamily: {
        dancing: ["Dancing Script", "cursive"],
      }
    },
  },
  plugins: [],
};
