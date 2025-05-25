/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['"Noto Sans JP"', 'sans-serif'],
      },
      colors: {
        primary: {
          blue: '#0060A7',
        },
        alert: {
          red: '#CC0000',
        },
      },
    },
  },
  plugins: [],
};
