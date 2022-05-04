module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ED1B33",
        "red-dark": "#A61D24",
        "red-light": "#ED1B33",
        light: "#B1D4E0",
        dark: "#242422",
      },
    },
  },
  plugins: [],
};
