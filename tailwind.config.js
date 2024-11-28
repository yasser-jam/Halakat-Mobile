/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes').light,
          primary: '#0D9488',
          secondary: '#06B6D4',
          warning: '#FFA800',
          error: '#f1416c',
          light: '#eef0f8',
        },
      },
    ],
  },
}
