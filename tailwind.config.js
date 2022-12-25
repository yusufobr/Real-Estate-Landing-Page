/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      // xl: "1440px",
    },
    extend: {
      colors : {
        mainBlue : '#BDCCFF',
        mainBlueLight : '#D3DDFF',
        mainBlueLighter : '#E9EEFF',
        mainButton : '#F85A47',
        mainButtonHover : '#ff4b37',
        cta : '#FF9900'
      }
    },
  },
  plugins: [],
}
