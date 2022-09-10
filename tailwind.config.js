/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      'Bwhite': '#ffffff',
      'Bred': '#D34242',
      'Bblue': '#567F9E',
      'Bblack': '#3A3A3A',
    },
    extend: {
      width: {
        c: '45rem',
      },
    },
  },
  plugins: [],
};
