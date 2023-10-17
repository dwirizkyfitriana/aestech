/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#053D41',
        white: '#FFFFFF',
        orange: '#F58342',
        black: '#1B1B1B',
        'light-grey': '#F8F8F8'
      }
    }
  },
  plugins: []
}
