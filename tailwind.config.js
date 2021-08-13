module.exports = {
  mode: "jit",
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
  purge: {
    content: [
      "./src/**/*.html",
      "./src/**/*.js",
      "./src/**/*.jsx",
      "./src/**/*.ts",
      "./src/**/*.tsx",
      "./public/index.html",
    ],
    options: {
      // Whitelist specific selectors by name
      // safelist: [],
    },
  },
};
