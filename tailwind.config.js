/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['"Roboto"'],
    },
  },
  variants: {
    fill: ['hover', 'focus'],
  },
  plugins: [],
  darkMode: 'class',
}
