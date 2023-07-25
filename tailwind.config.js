/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1d9bf0",
        hoverBtn: "#1A8EDB",
        headerBG: "#feffffd9",
        grayColor: "#536471",
        grayBg: "#F7F9F9",
        likeColor: "#F91B82",
        retweetColor: "#00BA7C"
      }
    },
  },
  plugins: [],
}
