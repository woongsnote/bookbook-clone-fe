/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      'white': '#ffffff',
      'red': '#D34242',
      'blue': '#567F9E',
      'black': '#3A3A3A',
    },
    extend: {
      width: {
        c: '45rem',
      },
    },
  },
  plugins: [],
};
