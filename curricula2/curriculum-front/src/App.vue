<template>
  <v-app id="app">
    <!-- 组件 -->
    <TopNav />
    <v-content>
      <router-view />
    </v-content>
    <!-- 
      v-snackbar 消息框, 任意组件都可触发, 在视口的同一位置显示提示

      状态保存在Vuex 中
      curricula2\curriculum-front\src\store\state.js
        snackbar: {
          show: false,
          variant: 'success',
          message: ''
        }
      
      <v-snackbar                   
        v-model="snackbar.show"     → 为true 的时候就会显示
        :multi-line="true"          → 加高
        :right="true"               → 显示时的位置(相对于视口)
        :top="true"
        :timeout="6000"             → 自动消失的时间
        :color="snackbar.variant"   → 用关键字切换内置的颜色
      >
        {{ snackbar.message }}      → 包含的信息
        <v-btn                      → 手动关闭按钮
          light
          text
          @click="updateSnackbar({show: false})"
        >
          Close
        </v-btn>
      </v-snackbar>
     -->
    <v-snackbar
      v-model="snackbar.show"
      :multi-line="true"
      :right="true"
      :top="true"
      :timeout="6000"
      :color="snackbar.variant"
    >
      {{ snackbar.message }}
      <v-btn light text @click="updateSnackbar({ show: false })">
        Close
      </v-btn>
    </v-snackbar>
  </v-app>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import TopNav from "./components/TopNav.vue";

export default {
  components: {
    TopNav
  },
  computed: {
    // @/store/state.js
    // mapState, 把给定的数组(Vuex 中的状态)自动映射成computed(计算属性), 不用一个个写了
    // 传入的格式, 对象或数组都行, 最终都会被normalizeMap 转为键值对(数组的话就键值对相同)
    ...mapState(["snackbar"])
  },
  methods: {
    /*
    @/store/mutations.js
    提交 mutation
      this.$store.commit('xxx')
      或者使用 mapMutations将组件中的 methods 映射为store.commit 调用（需要在根节点注入 store）
    */
    ...mapMutations(["updateSnackbar"])
  }
};

/*
mapState 的作用:


computed: mapState([
  /// 映射 this.count 为 store.state.count, 缺点是computed 没办法接收其它计算属性了
  'count'
])

/// 混合两种状态的计算属性
computed: {
  /// 组件私有状态映射的计算属性
  localComputed () {  },
  /// Vuex 状态映射的计算属性
  ...mapState({
    /// ...
  })
}
*/
</script>
