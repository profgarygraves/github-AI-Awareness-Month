/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        night: '#050816',
        ink: '#0a1024',
        aurora: '#23d3ff',
        violet: '#8b5cf6',
        ember: '#f7c873',
      },
      boxShadow: {
        glow: '0 0 36px rgba(35, 211, 255, 0.26)',
        violet: '0 0 34px rgba(139, 92, 246, 0.22)',
      },
      backgroundImage: {
        'radial-grid':
          'radial-gradient(circle at 20% 10%, rgba(35,211,255,.18), transparent 32%), radial-gradient(circle at 80% 0%, rgba(139,92,246,.18), transparent 30%), linear-gradient(rgba(255,255,255,.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.045) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};
