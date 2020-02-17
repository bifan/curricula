// Vue CLI 前端开发服务器的入口文件

// import, 使用export命令定义了模块的对外接口以后，其他 JS 文件就可以通过import命令加载这个模块
// import 的路径值如果只是模块名，不带有路径，那么必须有配置文件，告诉 JavaScript 引擎该模块的位置
import Vue from "vue";

/*
'@'相当于'src'目录的别名
无论当前文件层级有多深, 不用操心使用多少个../../ 了
在重构调整代码时很方便, 不用关心路径问题了
*/
import App from "@/App.vue"; // 不用.vue 后缀也是可以的, 但是加上易读
import router from "@/router"; // 路径名是个目录时, 约定加载目录下的index.js 文件
import store from "@/store";
import vuetify from "@/plugins/vuetify"; // 不需要后缀名.js

import "@/registerServiceWorker"; // PWA
import i18n from "./i18n";

// 控制台打印常见问题的帮助信息
Vue.config.productionTip = true;

new Vue({
  // router 是router: router 的缩写
  // vue-router 是vue的插件, 其使用方式跟普通的vue插件类似都需要按照、插件和注册
  router,

  // 把store 对象提供给“store” 选项，这可以把store 的实例注入所有的子组件
  store,

  // 插件的知识点在vuetify.js 中注释
  vuetify,

  i18n,
  render: h => h(App)
}).$mount("#app"); // #app 是在curricula1\curricula-front\public\index.html 文件中定义的

/*
Vue 实例 new Vue({})
Vue 应用都是通过用Vue 函数创建一个新的 Vue 实例开始的
所有的Vue 组件也都是Vue 实例, 并且接受相同的选项对象 
*/

/*
render: h => h(App) // 把App.vue 渲染到<div id="app"></div>
h 是Hyperscript 的缩写, 是指生成HTML 结构的script 脚本，因为HTML 是 hyper-text markup language

易读的写起来大概这样:
render: function (createElement) {
    return createElement(App); // 根据App.vue 创建虚拟DOM 并返回
}
*/

/*
Obj.$mount("element"), 把对象挂载到DOM 节点上
new Vue().$mount('#app') 等同于 new Vue({el: '#app')
使用$mount 可以作用于当前尚未存在的动态生成的元素上
*/

/*
'$' 开头的是Vue 内置的属性和方法, https://cn.vuejs.org/v2/api/#实例属性
var data = { a: 1 }
var vm = new Vue({
  el: '#example',
  data: data // el 和data 都是内置属性, 但是赋值的时候不需要写$
})

vm.$data === data // => true
vm.$el === document.getElementById('example') // => true

插件也自行添加这样的属性和方法, 如vue-router 插件就添加了$router
使用 this.$router 的原因是不用在每个独立需要封装路由的组件中都导入路由
*/
