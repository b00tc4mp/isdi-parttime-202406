import mainPlugin from './tailwind.main.plugin.js'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      '--base-dark': 'var(--base-dark)',
      '--base-light': 'var(--base-light)',
      '--focus': 'var(--focus)',
      '--shadow': 'var(--shadow)',
      '--text-dark': 'var(--text-dark)',
      '--text': 'var(--text)',
      '--text-light': 'var(--text-light)',
      '--danger': 'var(--danger)',
      '--danger-text': 'var(--danger-text)',
      '--success': 'var(--success)',
      '--success-text': 'var(--succes-text)'
    },
    extend: {},
  },
  plugins: [mainPlugin],
}