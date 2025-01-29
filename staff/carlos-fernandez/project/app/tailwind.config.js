const {
  fontFamily,
  screens,
  animation,
  keyframes,
} = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        customBackground: "rgb(243, 236, 217)",
        customBackgroundDarker: "rgb(180, 200, 225)",
        textPinkColor: "rgb(239, 121, 157)",
        headerColor: "rgb(255, 203, 225)",
        darkPink: "rgb(235, 63, 115, 0.821)",
      },
    },
    keyframes: {
      ...keyframes,
      expandShadow: {
        "0%": {
          boxShadow: "0 0 0 0 rgba(255, 203, 225))",
        },
        "100%": {
          boxShadow: "0 0 800px 300px rgba(255, 203, 225)",
        },
      },
      fadeIn: {
        "0%": { opacity: "0" },
        "100%": { opacity: "1" },
      },
      wiggle: {
        "0%, 100%": { transform: "rotate(-3deg)" },
        "50%": { transform: "rotate(3deg)" },
      },
      buzzing: {
        "0%, 50%, 72%, 85%, 95%": { filter: "opacity(1)" },
        "30%, 90%, 100%": { filter: "opacity(0)" },
        "65%": { filter: "opacity(60%)" },
        "80%": { filter: "opacity(40%)" },
      },
    },
    animation: {
      ...animation,
      expandShadow: "expandShadow 1s ease-out forwards",
      fadeIn: "fadeIn 5s ease-in-out",
      "spin-slow": "spin 10s linear infinite",
      wiggle: "wiggle 2s ease-in-out infinite",
      "low-pulse": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      buzzing: "buzzing 2s ease-in-out infinite",
    },
    fontFamily: {
      sans: ["Noto Sans Japanese", "sans-serif"],
    },
    fontFamily,
    screens: {
      "3xs": { min: "320px" },
      "2xs": { min: "380px" },
      xs: { min: "475px" },
      ...screens,
      "max-xl": { max: "1279px" },
      "max-lg": { max: "1023px" },
      "max-md": { max: "767px" },
      "max-sm": { max: "639px" },
      "max-xs": { max: "474px" },
      "max-2xs": { max: "379px" },
      "max-3xs": { max: "319px" },
    },
    aspectRatio: {
      "1/1": "1 / 1",
      "3/4": "3 / 4",
    },
  },
  daisyui: {
    themes: ["light"],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
