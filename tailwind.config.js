/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
  "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors:{
        primary: 'var(--red-color)',
      },
      fontSize: {
        small : 'var(--font-s)',
        p : 'var(--font-p)',
        h1: 'var(--font-h1)',
        h2: 'var(--font-h2)',
        h3: 'var(--font-h3)',
      },
      fontFamily: {
        inria : ['Inria Serif'],
      },
      width: {
        '120' : '30rem',
        '295' : '295px',
        '500' : '500px',
      },
      borderRadius: {
        first: '200px 100px',
        second: '200px 200px 0 0',
        round: '50% 50%',
      },
      height: {
        '461' : '461px',
        '500': '500px',
      },
      rotate : {
        '30': '30deg',
      },
      gap: {
        '40rem' : '40rem',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
],
}

