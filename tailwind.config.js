/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        terracotta: '#B5673A',
        ocra: '#C9973E',
        cream: '#FAF7F2',
        'dark-green': '#2D4A3E',
        'warm-gray': '#8B7D72',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Lato', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
