/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {},
    screens: {
      tablet: '765px',
      // => @media (min-width: 944px) { ... }
      pc: '1220px',
    },
  },
  plugins: [],
};
