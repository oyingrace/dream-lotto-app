// File: tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dream-blue': {
          light: '#3B82F6',  // Primary blue
          DEFAULT: '#2563EB', // Default blue
          dark: '#1D4ED8',   // Dark blue
        },
        'dream-yellow': {
          light: '#FDE68A',
          DEFAULT: '#FACC15', // The yellow used in the logo
          dark: '#D97706',
          subtlelight: '#f5bb1b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
      },
    },
  },
  plugins: [],
}