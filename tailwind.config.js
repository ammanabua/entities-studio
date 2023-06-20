/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        fontFamily: {
          'krona': ['Krona One', 'sans-serif'],
          'rubik': ['Rubik' , 'sans-serif'],
          'barrio': ['Barrio', 'sans-serif']
        }
      },
    },
    plugins: [
      function ({ addVariant }) {
        addVariant('child', '& > *');
        addVariant('child-hover', '& > *:hover');
      }
    ],
  }
  