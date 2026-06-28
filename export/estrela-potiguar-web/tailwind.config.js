export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        night: {
          950: '#07061d', 900: '#0a0930', 800: '#0d0b3b', 700: '#100f46',
          600: '#191760', 500: '#252178', 400: '#383293', 300: '#534caf',
        },
        star: {
          100: '#fffbe3', 200: '#fff3a8', 300: '#fbe96b',
          400: '#f8de22', 500: '#e6c70f', 600: '#bfa406',
        },
        sand: {
          50: '#faf6ef', 100: '#f3ecdf', 200: '#e9e0d2',
          300: '#d6c9b4', 400: '#b8a987', 500: '#8f8062',
        },
        aurora: { 300: '#fa9af4', 400: '#f637ec', 500: '#c819c0' },
        mare: { 300: '#c2f07e', 400: '#96df29', 500: '#74b417' },
      },
      fontFamily: {
        display: ['"Noto Serif EP"', 'Georgia', 'serif'],
        body: ['Roboto', 'system-ui', 'sans-serif'],
        italic: ['"Roboto EP"', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'glow-sm': '0 0 10px rgba(248,222,34,0.45)',
        'glow-md': '0 0 22px rgba(248,222,34,0.55)',
        'glow-lg': '0 0 40px rgba(248,222,34,0.5)',
        float: '0 12px 48px rgba(4,4,20,0.55)',
      },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-7px)' } },
        breathe: { '0%,100%': { opacity: '0.55', transform: 'scale(0.92)' }, '50%': { opacity: '1', transform: 'scale(1.06)' } },
        sweep: { '0%': { left: '-42%' }, '100%': { left: '102%' } },
        drift: { to: { backgroundPosition: '-220px 220px' } },
        shoot: {
          '0%': { opacity: '0', transform: 'rotate(208deg) translateX(0)' },
          '6%': { opacity: '1' },
          '34%': { opacity: '1' },
          '48%,100%': { opacity: '0', transform: 'rotate(208deg) translateX(-130%)' },
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        breathe: 'breathe 3.4s ease-in-out infinite',
        sweep: 'sweep 1.7s ease-in-out infinite',
        drift: 'drift 70s linear infinite',
      },
    },
  },
  plugins: [],
};
