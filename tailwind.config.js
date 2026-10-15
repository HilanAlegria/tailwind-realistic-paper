module.exports = {
  content: [
    "./*.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('./tailwind-realistic-paper')
  ],
}
