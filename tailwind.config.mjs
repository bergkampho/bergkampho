/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "selector",
  theme: {
    fontFamily: {
      sans: ["Inter", "Sans Serif", "Georgia"],
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.25rem",
        lg: "2rem",
        xl: "3rem",
      },
    },
    colors: {
      salmon: "var(--color-salmon)",
      ocean: "var(--color-ocean)",
      lemon: "var(--color-lemon)",
      gray: colors.gray,
      primary: "var(--primary-color)",
      secondary: "var(--secondary-color)",
    },
    extend: {
      fontSize: {
        "6xl": "3.5rem",
      },
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
          pop: "var(--bg-pop-color)",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
