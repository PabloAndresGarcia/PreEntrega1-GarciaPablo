/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: {
         100: "#FFFFFF",
         700: "#828282",
         900: "#D6D6D6"
        }
        ,
      }
    },
  },
  plugins: [],
}