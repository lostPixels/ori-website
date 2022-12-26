/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'primary': "'Bebas Neue', cursive;",
      'sans': "'Fira Sans', sans-serif;"

    },
    extend: {
      colors: {
        'pop': 'rgba(196, 56, 77, 1)',
        'cool': 'rgba(32, 58,87)',
        'cool-pop': 'rgba(32, 75,91)',
        'background': 'linear-gradient(180deg, #FFFFFF 0%, #E7E7E7 55.51%)'
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
  safelist: ['delay-250', 'delay-500']
}

