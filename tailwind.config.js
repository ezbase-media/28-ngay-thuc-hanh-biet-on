/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        warm: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#d2bab0',
          500: '#a3877b',
          600: '#8a6d61',
          700: '#695046',
          800: '#4a362f',
          900: '#2e201b',
        },
        pastel: {
          green: '#e8f3e8',
          darkgreen: '#8fad8f'
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        serif: ['"Merriweather"', 'serif'],
      }
    },
  },
  plugins: [],
}
