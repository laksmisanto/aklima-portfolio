/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      colors: {
        violet: {
          50:  '#F3F0FF',
          100: '#E0D9FF',
          200: '#C4B8FF',
          300: '#A091F7',
          400: '#8B6FF0',
          500: '#7C3AED',
          600: '#6D28D9',
          700: '#5B21B6',
          800: '#4C1D95',
          950: '#2E1065',
        },
      },
      animation: {
        'pulse-dot': 'pulse-dot 2s ease-in-out infinite',
        'spin-slow':  'spin 20s linear infinite',
        'drift-1':    'drift1 12s ease-in-out infinite alternate',
        'drift-2':    'drift2 8s ease-in-out infinite alternate',
      },
      keyframes: {
        'pulse-dot': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(34,197,94,0.4)' },
          '50%':       { boxShadow: '0 0 0 6px rgba(34,197,94,0)' },
        },
        drift1: {
          from: { transform: 'translate(0, 0) scale(1)' },
          to:   { transform: 'translate(40px, -30px) scale(1.1)' },
        },
        drift2: {
          from: { transform: 'translate(0, 0) scale(1)' },
          to:   { transform: 'translate(-30px, 20px) scale(0.95)' },
        },
      },
    },
  },
  plugins: [],
}
