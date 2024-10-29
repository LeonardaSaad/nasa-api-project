/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{html,js, jsx}",
    "./components/**/*.{html,js, jsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      inter: ["Inter", "sans-serief"],
    },
    colors: {
      primary: "var(--color-primary)",
      primaryDarker: "var(--color-primary-darker)",
      primaryDarkest: "var(--color-primary-darkest)",
      base: "var(--color-base)",
      white: "var(--color-white)",
      black: "var(--color-black)",
      primaryBlack: "var(--color-primary-black)",
      grayLightest: "var(--color-gray-lightest)"
    },
  },
  plugins: [],
};
