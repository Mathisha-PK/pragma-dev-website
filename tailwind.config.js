/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Core brand palette — pulled directly from the Pragma Development mark
        navy: {
          950: '#080D1A', // deepest bg, hero
          900: '#0B1120', // page dark bg
          800: '#121A2E', // card surface on dark
          700: '#1B2540', // hairline / border on dark
        },
        brand: {
          blue: '#0B5FD9',   // primary — matches logo blue (#0156C2)
          'blue-dark': '#083E8F',
          'blue-light': '#4E8FF2',
          red: '#D82614',    // accent — matches logo red, used sparingly
          'red-dark': '#A81E10',
        },
        paper: '#F6F8FC',   // light section background
        ink: '#101827',     // primary text on light
        slate: {
          400: '#8592AD',
          500: '#64708A',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      backgroundImage: {
        'radial-fade': 'radial-gradient(circle at 20% 20%, rgba(11,95,217,0.25), transparent 55%)',
      },
    },
  },
  plugins: [],
}
