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
    // fontFamily: {
    //   inter: ["Inter", "serif"],
    // },
    colors: {
      primary: "var(--cl-primary)",
      primaryDarker: "var(--cl-primary-darker)",
      primaryDarkest: "var(--cl-primary-darkest)",
      base: "var(--cl-base)",
      grayDark: "var(--cl-gray-dark)",
      grayLight: "var(--cl-gray-light)",
      primaryBlack: "var(--cl-primary-b)",
      grayLightest: "var(--cl-gray-lightest)",
      grayDarkest: "var(--cl-gray-darkest)",
      gray: "var(--cl-gray)",
      clB0: "var(--b0)",
      clW0: "var(--w0)",
    },
    fontFamily: {
      'inter': ['Inter'],
      'public': ['Public Sans']
    }
  },
  plugins: [],
};
