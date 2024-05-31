/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: '#000',
          100:'000319'
        },
        pink: {
          DEFAULT: '#F72585',
          100: '#FF74D4',
          200: '#FFB8DE',
          300: '#FFDDE1'
        },
        fandango: {
          DEFAULT: '#B5179E'
        },
        purple: {
          DEFAULT: '#480CA8',
          100:'#560BAD',
          200: '#7209B7'
        },
        blue: {
          DEFAULT: '#3A0CA3',
          100: '#3F37C9',
          200: '#4361EE',
          300: '#4895EF',
          400: '#4CC9F0'
        }

      },
      backgroundImage: {
        'bg-img-1': "url('/img-1.png')",
        'bg-img-2': "url('/img-2.png')",
        'feature-bg': "url('/feature-bg.png')",
        pattern: "url('/pattern.png')",
        'pattern-2': "url('/pattern-bg.png')",
      },
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
      maxWidth: {
        '10xl': '1512px',
      },
      borderRadius: {
        '5xl': '40px',
      },
    },
  },
  plugins: [],
};