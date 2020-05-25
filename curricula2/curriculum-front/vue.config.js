// 配置选项文档 → https://cli.vuejs.org/zh/config/
module.exports = {
  // eslint-loader 把错误显示在页面中 → (默认情况下, 警告仅仅会被输出到命令行, 且不会使得编译失败)
  "lintOnSave": false,
  // babel-loader 转义Vuetify → (babel-loader 默认会忽略node_modules 中的文件)
  "transpileDependencies": [
    "vuetify"
  ]

// vue inspect --rule images, 在命令行打印出最终生效的webpack 配置中images 的rule

// 搜索案例 → github.com → tab → filename:vue.config.js

// 对内部的 webpack 配置进行更细粒度的修改
/*
,chainWebpack(config) {
  config.plugins.delete('preload')
  config.plugins.delete('prefetch')
  
  config.module
    .rule("images")
    .test(/\.(gif|png|jpe?g|webp)$/i)
    .use("image-webpack-loader")
    .loader("image-webpack-loader")
    .options({
      /// bypassOnDebug: true
      /// disable: true
    })
    .end();
  /// set svg-sprite-loader
  config.module
    .rule('svg')
    .exclude.add(resolve('src/icons'))
    .end()
  config.module
    .rule('icons')
    .test(/\.svg$/)
    .include.add(resolve('src/icons'))
    .end()
    .use('svg-sprite-loader')
    .loader('svg-sprite-loader')
    .options({
      symbolId: 'icon-[name]'
    })
    .end();
  }*/

}