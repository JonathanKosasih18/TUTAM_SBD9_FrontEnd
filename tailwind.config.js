/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'jk-white': '#F7F7F7',
        'jk-black': '#1F1F1F',
        'jk-gray': '#929AAB',
        'jk-text-white': '#EEEEEE',
        'jk-text-black': '#1F1F1F',
        'jk-lighter-black': '#2A2A2A',
        'jk-sky': '#00A3E0',
        'jk-dark-gray': '#1A1A1A',
        'jk-light-gray': '#98AFC7',
        'jk-green': '#009045',
        'jk-light-green': '#B0EF8F',
        'jk-dark-green': '#007A39',
      },
    },
  },
  plugins: [],
}