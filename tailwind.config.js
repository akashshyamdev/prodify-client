const color = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    inset: {
      '-24': '-6rem',
    },
    color: {
      transparent: 'transparent',
      white: 'white',
      gray: {
        light: '#A1A1A1',
        medium: '#8A8A8A',
        dark: '#524B4B',
      },
      primary: {
        100: '#F8F4FC',
        200: '#F5EFFD',
        300: '#F5EDFF',
        400: '#F4EAFF',
        500: '#D9BBFF',
        600: '#A45FFD',
        700: '#923DFE',
      },
      yellow: {
        400: '#FFE299',
        500: '#FFC83C',
        600: '#c48221',
      },
      peach: '#FFCAB9',
      purple: '#FABEFF',
    },
    extend: {
      color: {
        transparent: 'transparent',
        white: 'white',
        gray: {
          light: '#A1A1A1',
          medium: '#8A8A8A',
          dark: '#524B4B',
        },
        primary: {
          100: '#F8F4FC',
          200: '#F5EFFD',
          300: '#F5EDFF',
          400: '#F4EAFF',
          500: '#D9BBFF',
          600: '#A45FFD',
          700: '#923DFE',
        },
        yellow: {
          400: '#FFE299',
          500: '#FFC83C',
          600: '#c48221',
        },
        peach: '#FFCAB9',
        purple: '#FABEFF',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
