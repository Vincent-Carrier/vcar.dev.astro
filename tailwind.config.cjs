const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,astro,jsx,tsx,vue,mdx,ts,js}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'AlegreyaSans',
          'InterVariable',
          'Inter',
          ...defaultTheme.fontFamily.sans,
        ],
        serif: ['AlegreyaVariable', ...defaultTheme.fontFamily.serif],
        display: ['Alegreya SC'],
      },
    },
  },
  plugins: [],
}
