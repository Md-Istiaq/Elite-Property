module.exports = {
  content: ["./src/**/*.{html,js}" ,'./node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      "forest"
    ],
  },
  plugins: [require("daisyui" ,'tw-elements/dist/plugin')],
}
