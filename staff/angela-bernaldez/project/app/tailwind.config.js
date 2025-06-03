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
      // Animación para mover las sombras en la dirección del degradado
      moveShadow: {
        "0%": { 
          transform: "translate(0px, 0px)",
          boxShadow: "0 0 120px 80px rgba(255, 208, 143, 0.7), 0 0 180px 110px rgba(0, 119, 247, 0.6)",
        },
        "50%": { 
          transform: "translate(10px, -10px)", 
          boxShadow: "0 0 150px 100px rgba(255, 208, 143, 0.8), 0 0 220px 130px rgba(0, 119, 247, 0.7)",
        },
        "100%": { 
          transform: "translate(-10px, 10px)", 
          boxShadow: "0 0 120px 80px rgba(255, 208, 143, 0.7), 0 0 180px 110px rgba(0, 119, 247, 0.6)",
        },
      },
    },
    animation: {
      ...animation,
      "spin-slow": "spin 10s linear infinite",
      wiggle: "wiggle 2s ease-in-out infinite",
      "low-pulse": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      buzzing: "buzzing 10s ease-in-out infinite",
      moveShadow: "moveShadow 3s ease-in-out infinite", 
      'bounce-smooth': 'bounceSmooth 2s ease-in-out infinite'
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
            "primary": "#f9d08f", 
            "secondary": "#68a4fc", 
            "accent": "#0d77f7",
            "neutral": "#f9b233", 
            "base-100": "#aacef9"
          },
        },
      ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
