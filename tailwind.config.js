/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        special: ['Playwrite GB S', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}

