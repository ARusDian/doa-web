/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'fontColor': '#8789A3',
        'neutralSilver': '#F5F5F7FA',
        'neutralDGrey': '#4D4D4D',
        'brandPrimary': '#863ED5',
      },
      backgroundColor: {
        'neutralWhite': '#F5EFFB',
        'neutralGrey': '#717171',
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}

