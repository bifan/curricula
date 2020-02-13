<!--
.vue 文件是Webpack 管理的CommonJS 标准的Module 机制, 支持ES2015 的module 语法(import export)

// 不使用单文件模式, 模板只能在template 属性中写, 无语法高亮, 无补全, 不易维护
Vue.component('c-name', {
  data: function () {
    return {}
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})

// 使用.vue 单文件方式, 易写易维护
-->

<template>
  <!-- v-app 是Vuetify 组件和功能的挂载点, 无需为布局的大小设置而烦恼, 仅可使用一次 -->
  <!--
    v-app
      v-navigation-drawer 侧边可隐藏导航栏(按钮)
      v-app-bar 最上方的工具条(导航条)
      v-footer 
      <v-content> 主要内容区域, 其大小会被上面三个组件动态改变
  -->
  <v-app>
    <VuetifyNavigationDrawer />
    <!-- 不加app 属性会导致v-app-bar 和v-content 均分空间, 加上app 属性则会是预期的保持一个条状空间-->
    <VuetifyAppBar>{{ appTitle }}</VuetifyAppBar>
    <!-- v-content 会动态地调整大小, 使用Vue Router 时将views 放在其中 -->
    <v-content>
      <!-- <router-view> 是Vue Router 的标签, 渲染匹配到的组件, 即Vue Router 加载的组件在此处显示 -->
      <router-view />
    </v-content>
    <v-footer app>
      <span>Vue 👣 Vue CLI 👣 Vuex 👣 Vue Router 👣 Vuetify</span>
    </v-footer>
  </v-app>
</template>

<script>
// 组件的代码要在哪里找到, 声明依赖
import VuetifyAppBar from "@/components/VuetifyAppBar.vue";
import VuetifyNavigationDrawer from "@/components/VuetifyNavigationDrawer.vue";
/*
export, 导出当前模块中的东西供其它组件用import 使用, 函数, 对象, 值
export xxx, 普通多处, 可用多次, export 的名称和import 用时要一模一样(可以用as 命令取别名)
export default xxx, 可以在import 时用任意名称接收, 只能使用一次
*/
export default {
  /*
  name, 当前组件的名称
  可以刚好的调试 - Vue 的浏览器开发者工具有组件层级, 显示名称就是来自name
  递归调用 - 可以在当前组件中使用自己, name: "Xxx", <Xxx></Xxx>
  保存组件状态 - 从其它地方切换回浏览过的组件, 保留以前的浏览状态
    <keep-alive include="vue-foo">
      keep-alive 中可能存在多个组件, 在include 中指定组件名称, 来保存其浏览状态
  */
  name: "App",
  // 注册局部组件
  components: {
    VuetifyNavigationDrawer,
    VuetifyAppBar // 使用组件前要注册
  },
  data() {
    return {
      appTitle: "Curricula 学程"
    };
  }
};
</script>
