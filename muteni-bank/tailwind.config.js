/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'white': '#ffffff',
        'secondary-brand': '#222C4A',
        'primary-brand': '#13AA9A'
      },
    },
  },
  plugins: [],
}

