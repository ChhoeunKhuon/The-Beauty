/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
  "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors:{
        primary: 'var(--red-color)',
        hover: 'var(--hover-color)',
      },
      gradientColorStops: {

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
        '308' : '308px',
        '1000' : '1000px',
        '800' : '800px',
      },
      borderRadius: {
        first: '200px 100px',
        second: '200px 200px 0 0',
        round: '50% 50%',
      },
      height: {
        '461' : '461px',
        '500': '500px',
        '355' : '355px',
        '140' : '42rem',
        '110' : '30rem',
      },
      rotate : {
        '30': '30deg',
      },
      gap: {
        '40rem' : '40rem',
      },
      screens:{
        'custom-md' : '720px',
      }
     
    },
  },
  plugins: [
    require('flowbite/plugin')
],
}

