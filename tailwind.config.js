/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
<<<<<<< HEAD
    extend: {
      colors: {
        "--clr-primary": "#ffca08",
        customBlue: 'rgb(87, 132, 186)',
      },
      transform: {
        '3d': 'rotateX(180deg) rotateY(180deg)', // Custom 3D rotation
      },
=======

    extend: {
      colors: {
        customYellow: '#ffca08',
        customP: '#aaaaaa',
        customAccordionColor: '#5b5748',
        customGray: '#1e1e1e',
        formBg: '#1C1601',
      },

      screens: {
        '500px': {'max': '500px'},
      }
>>>>>>> f94bd053c2eb3e0781c570f7427d5d7be0c40c61
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    ({ addUtilities }) => {
      addUtilities({
        '.scrollbar-hidden': {
          '&::-webkit-scrollbar': {
            display: 'none'
          },
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none'
        }
      })
    }
  ],
}