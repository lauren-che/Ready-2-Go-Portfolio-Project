/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Poppins: 'Poppins',
      },
      fontSize: {
        '7xl': '65px',
      },
    },
  },
  plugins: [],
};