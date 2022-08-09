const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    proxy: {
      "/api/wechat": {
        target: "http://shop.datong0.com"
      },
    },
  },
});
