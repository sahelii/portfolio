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
          light: '#7c3aed', // Vibrant purple
          DEFAULT: '#6d28d9', // Rich purple
          dark: '#5b21b6', // Deep purple
        },
        secondary: {
          light: '#06b6d4', // Cyan
          DEFAULT: '#0891b2', // Bright cyan
          dark: '#0e7490', // Deep cyan
        },
        accent: {
          light: '#f472b6', // Pink
          DEFAULT: '#ec4899', // Hot pink
          dark: '#db2777', // Deep pink
        },
        success: {
          light: '#34d399', // Emerald
          DEFAULT: '#10b981', // Green
          dark: '#059669', // Deep green
        },
        warning: {
          light: '#fbbf24', // Amber
          DEFAULT: '#f59e0b', // Orange
          dark: '#d97706', // Deep orange
        },
        background: {
          light: '#f8fafc', // Slate 50
          DEFAULT: '#f1f5f9', // Slate 100
          dark: '#0f172a', // Slate 900
        },
        surface: {
          light: '#ffffff',
          DEFAULT: '#f8fafc', // Slate 50
          dark: '#1e293b', // Slate 800
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%)',
        'gradient-accent': 'linear-gradient(135deg, #ec4899 0%, #f59e0b 100%)',
      },
      boxShadow: {
        'glow': '0 0 15px rgba(124, 58, 237, 0.5)',
        'glow-lg': '0 0 30px rgba(124, 58, 237, 0.5)',
        'glow-xl': '0 0 45px rgba(124, 58, 237, 0.5)',
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
      },
      keyframes: {
        'gradient-y': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'center top'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center center'
          }
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        }
      }
    },
  },
  plugins: [],
} 