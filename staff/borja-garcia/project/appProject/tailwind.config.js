/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/styles/main.css"
  ],
  
  plugins: [daisyui],
  
  // Configuración de DaisyUI
  daisyui: {
    themes: [
      {
        maintheme: {
          "primary": "#2A5C82",
          "secondary": "#F4A261",
          "accent": "#6C757D",
          "neutral": "#3D4451",
          "base-100": "#F8F9FA",
        },
      },
      "dark" 
    ],
  },

  theme: {
    extend: {
      colors: { 
        primary: '#2A5C82',
        secondary: '#F4A261',
        accent: '#6C757D',
      },
      keyframes: {
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
        "spin-slow": "spin 10s linear infinite",
        wiggle: "wiggle 2s ease-in-out infinite",
        "low-pulse": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        buzzing: "buzzing 2s ease-in-out infinite",
      },
    },
  },
}