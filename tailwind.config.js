/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        neuchaCurve: ['Neucha', 'cursive'],
        neucha: ['Poppins', 'sans-seri', 'Unbounded', 'cursive'],
      },
      zIndex: {
        '1': '1',
      },
      boxShadow: {
        'custom': '0 0 10px 1000px rgba(0, 0, 0, 0.5)',
        'addBtn': '0 0 10px black',
        'addBtnA': '0 0 5px black'

      },
      width: {
        '40': '40%',
        '90': '90%'
      }
    },
  },
  plugins: [],
}