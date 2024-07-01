/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        blue: '#006EDB',
        blueHover: '#0077ED',
        gray: {
          DEFAULT: '#86868b',
          100: '#94928d',
          200: '#afafaf',
          300: '#42424570'
        },
        zinc: '#101010'
      }
    }
  },
  plugins: []
}
