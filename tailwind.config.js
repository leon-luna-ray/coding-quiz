/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1.5rem',
        md: '2rem',
        lg: '4rem',
      },
      center: true,
    },
    extend: {
      colors: {
        primay: '#0264ff',
        slate: '#1C1A1A',
      },
      fontFamily: {
        'syne': ['Syne Mono', 'monospace'],
        'space': ['Space Mono', 'monospace'],
        'red-hat': ['Red Hat Display', 'sans-serif'],
      },
      boxShadow: {
        'glow-blue': '0 0.4rem 1.4rem 0 rgba(8, 114, 224, 0.6)',
        'glow-orange': '0 0.4rem 1.4rem 0 rgba(255, 0, 0, 0.5)',
      },
      animation: {
        none: 'none',
        bounce: 'bounce 1s infinite',
        ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
        pulse: 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        slide: 'slide 1s ease-in-out infinite alternate, slide-out 1s ease-in-out 1s infinite alternate',
        spin: 'spin 5s linear infinite',
        wiggle: 'wiggle 4s ease-in-out infinite',
      },
      keyframes: {
        bounce: {
          '0%, 100%': {
            transform: 'translateY(-25%)',
            animationTimingFunction: 'cubic-bezier(0.8,0,1,1)',
          },
          '50%': {
            transform: 'none',
            animationTimingFunction: 'cubic-bezier(0,0,0.2,1)',
          },
        },
        ping: {
          '75%, 100%': {
            transform: 'scale(2)',
            opacity: '0',
          },
        },
        pulse: {
          '50%': {
            opacity: '.3',
          },
        },
        slide: {
          '0%': {
            transform: 'translateX(-100%)',
          },
          '100%': {
            transform: 'translateX(0)',
          },
        },
        spin: {
          to: {
            transform: 'rotate(360deg)',
          },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
    },
  },
  plugins: [],
}

