/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif'], // Override default sans font
      },
      colors: {
        recipickPrimary: '#F9EBD8',
        recipicktext: '#D97C48',
        serveasebackground: '#FFEEEE',
        serveasetext: '#604439',
      },
    },
  },
  plugins: [],
};
