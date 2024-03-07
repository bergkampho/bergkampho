/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "selector",
  theme: {
    fontFamily: {
      sans: ["Inter", "Sans Serif", "Georgia"],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.25rem",
        lg: "2rem",
        xl: "3rem",
        "2xl": "4rem",
      },
    },
    colors: {
      salmon: "var(--color-salmon)",
      ocean: "var(--color-ocean)",
      lemon: "var(--color-lemon)",
      gray: colors.gray,
    },
    extend: {
      textColor: {
        skin: {
          base: "var(--body-base-color)",
          pop: "var(--body-pop-color)",
          "nav-link": "var(--nav-link-color)",
          "nav-link-hover": "var(--nav-link-hover-color)",
        },
      },
      backgroundColor: {
        skin: {
          fill: "var(--bg-fill-color)",
        },
      },
    },
  },
  plugins: [],
};
