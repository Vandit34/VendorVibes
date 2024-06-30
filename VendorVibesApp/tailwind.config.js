/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        caveat: ['"Caveat Brush"', 'cursive'],
        nunito: ['"Nunito"', 'sans-serif'],
        Shadow:["Shadows Into Light", 'cursive']
      }
    }
  },
  plugins: []
}
