import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#AAFF00',
        background: '#0A0A0A',
        surface: '#111111',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 10px rgba(170,255,0,0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(170,255,0,0.6)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
