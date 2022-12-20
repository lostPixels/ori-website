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
      },
    },
  },
  plugins: [],
  safelist: ['delay-250', 'delay-500']
}
