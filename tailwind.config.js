/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.hbs", './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {},
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
