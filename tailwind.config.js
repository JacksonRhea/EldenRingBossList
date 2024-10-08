/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  
  theme: {
    extend: {
      colors: {
        important: '#AB966F', // Your custom color
      },
    },
  },
  plugins: [],
}
