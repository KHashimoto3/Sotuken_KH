//const { defineConfig } = require('@vue/cli-service')

module.exports = {
  pages: {
    index: {
      entry: "src/main.js",
      template: "public/index.html",
      filename: "index.html",
      title: "ホーム",
    },
    coding: {
      entry: "src/codingform.js",
      template: "public/codingform.html",
      filename: "codingform.html",
      title: "コーディングフォーム",
    },
  },
};
/*module.exports = defineConfig({
  transpileDependencies: true
})*/
