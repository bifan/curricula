import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify); // 通过全局方法Vue.use() 使用插件, 在new Vue() 启动应用之前完成

export default new Vuetify({
  theme: {
    dark: true // 使用Vuetify 内置的dark theme
  }
}); // ??? 为什么设计成Vue.use() 了还要在new Vue({}) 时再放入其对象? 应该是方便new 时自定义吧.

/*
Vue.js 官方提供的一些插件(如 vue-router) 会自动调用Vue.use()
*/
