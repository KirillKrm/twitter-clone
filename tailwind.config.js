/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryText: {
          light: '#0f1419',
          dark: '#e7e9ea',
        },
        secondaryText: {
          light: '#536471',
          dark: '#71767b',
        },
        primaryBg: {
          light: '#ffffff',
          dark: '#000000',
        },
        secondaryBg: {
          light: '#f7f9f9',
          dark: '#16181c',
        },
        tertiaryBg: {
          light: '#eff3f4',
          dark: '#202327',
        },
        primaryBorder: {
          light: '#cfd9de',
          dark: '#333639',
        },
        logo: {
          light: '#1d9bf0',
          dark: '#ffffff',
        },
        pink: '#f91880',
        green: '#00ba7c',
        red: '#f4212e',
      },
    },

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
