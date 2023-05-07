/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'cleveland': "url('../../assets/cleveland.png')"
      },
      fontWeight: {
        thin: '50',
      },
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
        Lato: 'Lato',
        ClashGroteskSemibold: ['ClashGroteskSemibold', 'bold'],
      },
      fontSize: {
        '7xl': '64px',
      },
      inset: {
        '3/5': '60%',
        '4/5': '-12rem',
        '4/7': '70%',
        '5/6': '80%',
        '5/8': '85%',
        '5/9': '90%',
        '7/8': '98%',
        '7/9': '105%',
        '7/10': '128%'
      },
      borderRadius: {
        'lg': '4rem',
      }
    },
  },
  plugins: [],
};
