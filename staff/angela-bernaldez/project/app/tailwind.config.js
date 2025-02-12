const { dracula } = require("daisyui/src/theming/themes");
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
    "./src/**/*.{jsx,js}",
  ],
  theme: {
    keyframes: {
      ...keyframes,
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
      "spin-slow": "spin 10s linear infinite",
      wiggle: "wiggle 2s ease-in-out infinite",
      "low-pulse": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      buzzing: "buzzing 2s ease-in-out infinite",
    },
    fontFamily: {
      ...fontFamily,
      sans: ["Montserrat", "sans-serif"]
    },
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
      themes: [
        {
          mytheme: {
            "primary": "#B1F0F7", 
            "secondary": "#81BFDA", 
            "accent": "#F5F0CD",
            "neutral": "#FADA7A", 
            "base-100": "#EEF5FF"
          },
        },
      ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
