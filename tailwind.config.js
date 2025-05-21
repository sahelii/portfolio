/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#6366f1', // indigo-500
          DEFAULT: '#4f46e5', // indigo-600
          dark: '#3730a3', // indigo-800
        },
        accent: {
          light: '#a78bfa', // violet-400
          DEFAULT: '#8b5cf6', // violet-600
          dark: '#6d28d9', // violet-800
        },
      },
    },
  },
  plugins: [],
} 