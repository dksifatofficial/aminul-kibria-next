/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        logoPicture: {
          '0%, 100%': { left:'0px', top:'50px' },
          '50%': { left:'0px', top:'80px' },
        }
      }
    },
    typography: (theme) => ({}),
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

