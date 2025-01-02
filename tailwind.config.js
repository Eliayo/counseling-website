/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#6F2B90',
        secondary: ' #FFD700 '
      }
    },
    fontFamily:{
      OpenSans: ["Open Sans", "san serif"],
      Montserrat: ["Montserrat", "sans"] 
    },
    container:{
      center: true,
    }
  },
  plugins: [],
}