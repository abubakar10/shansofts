/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef4ff',
          100: '#d9e6ff',
          200: '#bcd2ff',
          300: '#8eb4ff',
          400: '#598bff',
          500: '#3563ff',
          600: '#1f40f5',
          700: '#182fe1',
          800: '#1a29b6',
          900: '#1c298f',
          950: '#151a57',
        },
        accent: {
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
        },
        grape: {
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
        },
        blush: {
          400: '#f472b6',
          500: '#ec4899',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'ui-sans-serif', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 20px 50px -20px rgba(53, 99, 255, 0.55)',
        soft: '0 10px 40px -12px rgba(37, 60, 130, 0.18)',
        card: '0 20px 60px -25px rgba(30, 50, 120, 0.28)',
        'card-hover': '0 30px 70px -25px rgba(31, 64, 245, 0.35)',
      },
      backgroundImage: {
        'grid-slate':
          'linear-gradient(to right, rgba(30,64,175,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(30,64,175,0.06) 1px, transparent 1px)',
        'mesh':
          'radial-gradient(at 20% 20%, rgba(53,99,255,0.18) 0px, transparent 50%), radial-gradient(at 80% 10%, rgba(34,211,238,0.16) 0px, transparent 50%), radial-gradient(at 70% 80%, rgba(139,92,246,0.16) 0px, transparent 50%), radial-gradient(at 15% 75%, rgba(236,72,153,0.12) 0px, transparent 50%)',
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
        gradient: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
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
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'floatSlow 9s ease-in-out infinite',
        shimmer: 'shimmer 2.2s infinite',
        gradient: 'gradient 6s ease infinite',
        blob: 'blob 14s ease-in-out infinite',
        marquee: 'marquee 28s linear infinite',
        'spin-slow': 'spinSlow 22s linear infinite',
        'pulse-ring': 'pulseRing 3s cubic-bezier(0.4,0,0.6,1) infinite',
        tilt: 'tilt 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
