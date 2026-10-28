/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef9ff',
          100: '#d8f0ff',
          200: '#b9e5ff',
          300: '#89d4ff',
          400: '#52bbff',
          500: '#029ceb',
          600: '#007bbd',
          700: '#006299',
          800: '#03537f',
          900: '#094569',
          950: '#052b44',
        },
        sahara: {
          50: '#fcf8f4',
          100: '#f8efe6',
          200: '#efdcce',
          300: '#e3c2ab',
          400: '#d5a181',
          500: '#c8835d',
          600: '#ba6e49',
          700: '#9b573a',
          800: '#7d4733',
          900: '#663c2c',
          950: '#381e15',
        },
        dark: {
          950: '#04070c',
          900: '#070a0f',
          850: '#0d131d',
          800: '#131b29',
          750: '#1a2436',
          700: '#222f46',
        }
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        arabic: ['Cairo', 'Amiri', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-cyan': '0 0 50px -10px rgba(2, 156, 235, 0.25)',
        'glow-gold': '0 0 50px -10px rgba(200, 131, 93, 0.25)',
        'glow-emerald': '0 0 50px -10px rgba(16, 185, 129, 0.25)',
      }
    },
  },
  plugins: [],
}
