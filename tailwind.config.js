/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation:{
        "loop-scroll": "loop-scroll 25s linear infinite",
        "fade-in": "fade-in 2s",
      },
      keyframes:{
        "loop-scroll": {
          from: {transform: "translateX(0)"},
          to: {transform: "translateX(-100%)"},
        },
        "fade-in": {
          from: {opacity: 0},
          to: {opacity: 100}
        },
      },
      fontFamily: {
        Precursive: ['Edu Australia VIC WA NT Hand Precursive'],
        Raleway: ['Raleway'],
      }
  },
  plugins: [],
}
}


