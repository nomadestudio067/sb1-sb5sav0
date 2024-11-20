/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'rgb(1, 1, 0)',
          dark: 'rgb(3, 2, 1)',
          light: 'rgb(40, 40, 35)',
        },
        brown: {
          DEFAULT: 'rgb(70, 51, 22)',
          dark: 'rgb(34, 25, 11)',
          light: 'rgb(120, 100, 70)',
        },
        cream: {
          DEFAULT: 'rgb(245, 243, 240)',
          dark: 'rgb(235, 233, 230)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
      },
    },
  },
  plugins: [],
};