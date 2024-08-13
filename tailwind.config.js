/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{tsx,ts,js,jsx}',
    './app/*.{tsx,ts,js,jsx}',
    './components/*.{tsx,ts,js,jsx}',
    './components/**/*.{tsx,ts,js,jsx}',
  ],
  theme: {
    extend: {
      colors:{
        danger:"#bb2d3b",
        primary:"#0D6EFD",
        secondary: '#5C636A',
        success: "#157347",
        warning: "#FFC107",
        info: "#31D2F2",
        light:"#F9FAFB",
      }
    },
  },
  plugins: [],
}

