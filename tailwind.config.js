/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3B82F6',
          50: '#EBF2FF',
          100: '#D7E5FF',
          200: '#B0CCFB',
          300: '#88B3F8',
          400: '#619AF4',
          500: '#3B82F6',
          600: '#0B61EE',
          700: '#074BC0',
          800: '#053692',
          900: '#032064',
        },
      },
    },
  },
  plugins: [],
};
