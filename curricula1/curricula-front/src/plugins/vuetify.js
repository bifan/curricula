import Vue from "vue";
import Vuetify from "vuetify/lib";

import { getStorage, getSystemTheme } from "@/utils";

Vue.use(Vuetify); // 通过全局方法Vue.use() 使用插件, 在new Vue() 启动应用之前完成

// 优先使用用户选择的主题 || 其次使用系统主题 || 都找不到就使用开发者偏好的主题
// 当值为boolean 类型的时候就不能使用 || 操作符排优先级了, 只好把boolean 值存入{} 中
const theme = getStorage("theme") || getSystemTheme() || { isDarkTheme: true }; // 这里使用不了Vuex, 此时尚未注入

export default new Vuetify({
  theme: {
    dark: theme.isDarkTheme // true, 使用Vuetify 内置的dark theme; false, 使用light theme
  }
}); // ??? 为什么设计成Vue.use() 了还要在new Vue({}) 时再放入其对象? 应该是方便new 时自定义吧.

/*
Vue.js 官方提供的一些插件(如 vue-router) 会自动调用Vue.use()
*/
