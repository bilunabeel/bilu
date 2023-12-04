/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      fontFamily:{
        jost: ["Jost","sans-serif"] //extralight, light, regular, medium, semibold
      },
      colors: {
        'yellow_primary':'#f36e26',
        'bg_primary': "#E5E4C7",
        'black_sec':'#212222',
        'gray_primary':'#dadad8'
        
      },
    },
  },
  plugins: [],
}