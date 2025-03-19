// File: tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // This enables dark mode with the 'dark' class
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
        // Add dark mode specific colors
        'dark': {
          'bg-primary': '#121827',  // Dark background
          'bg-secondary': '#1e293b', // Slightly lighter dark background for cards
          'text-primary': '#f3f4f6', // Light text for dark mode
          'text-secondary': '#9ca3af', // Secondary text color for dark mode
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