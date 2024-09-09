/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors:{
        blue: '#0B2641',
        gold:{
          dark: '#BA9267',
          light: '#E5CCB3',
          extra_light: '#F9F5F2'
        },
      },
      screens:{
        xs: '381px',
        sm: '768px',
        md: '992px',
        lg: '1025px',
        xl: '1441px'
      }
    },
    fontFamily:{
      'montserrat': ['Montserrat', 'sans-serif'],
    }
  },
  plugins: [],
}

