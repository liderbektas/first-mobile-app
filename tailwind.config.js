/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#030014',
        secondary: '#15132',
        light: {
          100: '#d6c7ff',
          200: '#a8b8d5',
          300: '#9ca4b',
        },
        dark: {
          100: '#221f3d',
          200: '#0f0d32',
        },
        accent: '#AB8BFF',
      },
    },
  },
  plugins: [],
};
