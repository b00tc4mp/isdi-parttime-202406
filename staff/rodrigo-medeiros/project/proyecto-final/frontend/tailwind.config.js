import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Inclui todos os arquivos que podem conter classes Tailwind
  ],
  safelist: [
    // Classes usadas dinamicamente (ex: no componente de alerta)
    "fixed",
    "top-0",
    "left-0",
    "w-full",
    "z-50",
    "bg-blue-200",
    "text-blue-900",
    "bg-yellow-500",
    "text-white",
    "py-4",
    "text-center",
    "font-semibold",
    "text-lg",
  ],
  theme: {
    extend: {}, // Permite extensões futuras (ex: cores customizadas, tipografia)
  },
  plugins: [daisyui], // DaisyUI para componentes prontos com Tailwind
};
