/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {

        'custom-yellow': {       // This defines a color named `custom-yellow`
          100: '#fff4cc',       // Lightest shade
          200: '#ffe999',       // Lighter shade
          300: '#ffde66',       // Normal, lighter shade
          400: '#ffd433',       // Base yellow (close to default)
          500: '#ffca08',       // Original color (#ffca08)
          600: '#e6b207',       // Slightly darker
          700: '#cc9a06',       // Darker
          800: '#b38205',       // Even darker
          900: '#996a04',       // Darkest shade
        },
      }
      
    },

        customYellow: '#ffca08',
        customP: '#aaaaaa',
        customAccordionColor: '#5b5748',
        customGray: '#1e1e1e',
        formBg: '#1C1601',
      },


      screens: {
        '500px': {'max': '500px'},
      }
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