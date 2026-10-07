/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F8FAFC',
        surface: '#FFFFFF',
        heading: '#0F172A',
        body: '#475569',
        brand: {
          teal: '#0F766E',
          tealDark: '#115E59',
          tealLight: '#14B8A6',
          tealBg: '#F0FDFA',
          blue: '#2563EB',
          blueDark: '#1D4ED8',
          blueLight: '#3B82F6',
          blueBg: '#EFF6FF',
        },
        border: '#E2E8F0',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        subtle: '0 1px 3px 0 rgba(15, 23, 42, 0.04), 0 1px 2px -1px rgba(15, 23, 42, 0.04)',
        card: '0 4px 6px -1px rgba(15, 23, 42, 0.03), 0 2px 4px -2px rgba(15, 23, 42, 0.03)',
        elevated: '0 10px 25px -3px rgba(15, 23, 42, 0.06), 0 4px 10px -4px rgba(15, 23, 42, 0.03)',
        highlight: '0 0 0 1px rgba(15, 118, 110, 0.1), 0 4px 20px -2px rgba(15, 118, 110, 0.06)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 250ms ease-out',
        fadeInUp: 'fadeInUp 450ms ease-out forwards',
      },
    },
  },
  plugins: [],
}
