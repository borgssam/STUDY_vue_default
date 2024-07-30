// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true,
//   outputDir:"docs",
// })

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/STUDY_vue_default/" : "/",
  outputDir: "docs",
};

// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })