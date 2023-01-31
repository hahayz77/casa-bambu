/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {}, 
    colors: {
      'rose': '#c37c7c',
      'bege': '#fffbf6',
      'green': '#5b6146',
      'white': '#ffffff',
      'black': '#1c1f0f'
    },
    fontFamily: {
      sans: ['Oswald', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
  },
  plugins: [],
}