// vue.config.js 会被 @vue/cli-service 自动加载
// 配置文档https://cli.vuejs.org/zh/config/

module.exports = {
  // 默认情况下 babel-loader 会忽略所有 node_modules 中的文件
  // transpileDependencies 可以使得Babel 显式转译一个依赖
  transpileDependencies: ["vuetify"]
};

/*
调整 webpack 配置最简单的方式就是在 vue.config.js 中的 configureWebpack 选项提供一个对象
module.exports = {
  configureWebpack: {
    plugins: [
      new MyAwesomeWebpackPlugin()
    ]
  }
}
该对象将会被 webpack-merge 合并入最终的 webpack 配置。
*/