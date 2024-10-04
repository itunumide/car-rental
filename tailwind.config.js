/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "--clr-primary": "#ffca08",
        customBlue: 'rgb(87, 132, 186)',
      },
      transform: {
        '3d': 'rotateX(180deg) rotateY(180deg)', // Custom 3D rotation
      },
    },
  },
  plugins: [],
}