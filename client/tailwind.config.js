/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#F0FDF4',
          100: '#DCFCE7',
          200: '#BBF7D0',
          300: '#86EFAC',
          400: '#4ADE80',
          500: '#22C55E',
          600: '#16A34A',
          700: '#15803D',
          800: '#166534',
          900: '#14532D',
          950: '#052e16',
        },
        accent: {
          400: '#4ADE80',
          500: '#16A34A',
          600: '#15803D',
        },
        forest: '#14532D',
        heading: '#111827',
        body: '#64748B',
        surface: '#F8FAFC',
        line: '#E5E7EB',
        grape: {
          400: '#4ADE80',
          500: '#16A34A',
          600: '#15803D',
        },
        blush: {
          400: '#86EFAC',
          500: '#16A34A',
        },
      },
      fontFamily: {
        sans: ['Figtree', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Syne', 'Figtree', 'ui-sans-serif', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 12px 30px -12px rgba(22, 163, 74, 0.35)',
        soft: '0 10px 30px -14px rgba(17, 24, 39, 0.12)',
        card: '0 16px 40px -24px rgba(17, 24, 39, 0.16)',
        'card-hover': '0 22px 50px -22px rgba(22, 163, 74, 0.22)',
      },
      backgroundImage: {
        'grid-slate':
          'linear-gradient(to right, rgba(22,163,74,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(22,163,74,0.05) 1px, transparent 1px)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-24px) translateX(12px)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(40px, -30px) scale(1.12)' },
          '66%': { transform: 'translate(-30px, 20px) scale(0.92)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.8)', opacity: '0.7' },
          '80%, 100%': { transform: 'scale(2.2)', opacity: '0' },
        },
        tilt: {
          '0%, 100%': { transform: 'rotate(-1.5deg)' },
          '50%': { transform: 'rotate(1.5deg)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'floatSlow 9s ease-in-out infinite',
        shimmer: 'shimmer 2.2s infinite',
        blob: 'blob 14s ease-in-out infinite',
        marquee: 'marquee 28s linear infinite',
        'spin-slow': 'spinSlow 22s linear infinite',
        'pulse-ring': 'pulseRing 3s cubic-bezier(0.4,0,0.6,1) infinite',
        tilt: 'tilt 8s ease-in-out infinite',
        'fade-up': 'fadeUp 0.7s ease forwards',
      },
    },
  },
  plugins: [],
}
