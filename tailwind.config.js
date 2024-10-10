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
            primary: "rgb(var(--color-primary))",
            primaryDarker: "rgb(var(--color-primary-darker))",
            primaryDarkest: "rgb(var(--color-primary-darkest))",
            base: "rgb(var(--color-base))",
            white: "rgb(var(--color-white))",
            black: "rgb(var(--color-black))",
        },
    },
    plugins: [],
};
