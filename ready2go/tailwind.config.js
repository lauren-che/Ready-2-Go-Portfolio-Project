/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
      Poppins: ['Poppins', 'sans-serif'],
        Lato: 'Lato',
        ClashGroteskSemibold: ['ClashGroteskSemibold', 'bold'],
      },
      fontSize: {
        '7xl': '64px',
      },
    },
  },
  plugins: [],
};


