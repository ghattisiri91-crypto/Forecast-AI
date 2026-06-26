/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0B1320',
          soft: '#101B2D',
          line: '#22304A',
        },
        paper: {
          DEFAULT: '#F6F3EC',
          dim: '#ECE7DA',
        },
        amber: {
          DEFAULT: '#F2A93B',
          soft: '#F7C36B',
        },
        forecast: {
          DEFAULT: '#36C2A1',
          soft: '#7FE0C9',
        },
        alert: {
          DEFAULT: '#E0584A',
        },
        slate: {
          ink: '#8C93A6',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      backgroundImage: {
        'ruled': 'repeating-linear-gradient(to bottom, transparent 0, transparent 39px, currentColor 39px, currentColor 40px)',
      },
    },
  },
  plugins: [],
}
