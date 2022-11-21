/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    fontFamily: { sans: ['Arial'] },
    fontSize: {
      2: '0.25rem',
      5: '0.5rem',
      7: '0.75rem',
      8: '0.8rem',
      8.5: '0.85rem',
      9: '0.9375rem',
      10: '1rem',
      15: '1.5rem',
      20: '2rem',
      25: '2.5rem',
      30: '3rem',
      40: '3.5rem',
      50: '4rem',
      60: '4.5rem',
      70: '5rem',
    },
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
      spacing: {
        2.5: '0.62rem',
      },
      maxWidth: {
        47: '47vw',
        68: '68vw',
        97: '97vw',
        99: '99.5vw',
      },
      height: {
        100: '100vh',
        108: '108vh',
        111: '111vh',
      },
      borderRadius: {
        1: '0.25rem',
      },
    },
  },
  plugins: [],
};
