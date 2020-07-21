module.exports = {
  lintOnSave: false, //关闭Eslint语法检查

  // 适配
  css: {
    loaderOptions: {
      css: {},
      postcss: {
        plugins: [
          require("postcss-px2rem")({
            remUnit: 75,
          }),
        ],
      },
    },
  },

  // 代理服务器
  devServer: {
    open: true, // 自动打开浏览器
    proxy: {
      // 配置代理
      "/api": {
        // 只处理以/api开头的请求
        target: "http://localhost:6001", // 转发的目标地址
        pathRewrite: {
          "^/api": "", //去掉前面的/api
        },
        changeOrigin: true, // 支持跨域
      },
    },
  },
};
