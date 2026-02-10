/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e3a8a', // Deep Royal Blue
        'primary-light': '#3b82f6',
        secondary: '#ffffff',
        accent: '#f3f4f6', // Soft Grey
        'accent-blue': '#eff6ff', // Light Blue
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
