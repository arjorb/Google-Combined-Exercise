/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    fontFamily: { sans: ['Arial'] },
    extend: {
      colors: {
        grey: {
          300: '#212121',
          250: '#3c4043',
          200: '#5f6368',
          100: '#F0F0F0',
          50: '#9aa0a6',
        },
        cyanblue: { 300: '#2215A4', 200: '#1a73e8' },
        greyblue: { 200: '#dfe1e5', 150: '#F8F9FA' },
        raven: { 200: '#70757A', 100: '#F2F2F2' },
      },
    },
  },
  plugins: [],
};
