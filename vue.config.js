module.exports = {
  publicPath: "",
  pages: {
    index: {
      entry: "./src/client/main.js",
    },
  },
  lintOnSave: process.env.NODE_ENV !== "production",
};
