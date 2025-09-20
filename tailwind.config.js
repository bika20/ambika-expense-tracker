/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'mygradient':"linear-gradient(90deg,rgba(31, 79, 68, 1) 6%, rgba(247, 192, 60, 1) 91%);"
      }
    },
  },
  plugins: [],
}

