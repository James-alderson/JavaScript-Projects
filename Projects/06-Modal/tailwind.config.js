/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "36rem", // 576px
      md: "48rem", // 768px
      lg: "62rem", // 992px
      xl: "75rem", // 1200px
      xxl: "87.5rem" // 1400px
    },
    extend: {
      colors: {
        white: "#ffffff",
        black: "#000000"
      }
    },
  },
  plugins: [],
}
