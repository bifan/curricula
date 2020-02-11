src
- assets - 图片资源, 不常修改数据
- components - 所有组件(原子组件, 业务公用组件, 页面拆分的组件)
- plugins - 插件, 如Vuetiry
- store - Vuex 数据
- vuews - 页面, 被路由的组件
- 
- App.vue - 主页面, 被main.js 导入的组件
- main.js - 开发服务器加载的入口文件
- registerServieceWorker.js - PWA 实现离线功能