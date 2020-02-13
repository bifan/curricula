<template>
  <v-navigation-drawer v-model="drawer" app clipped>
    <v-list dense>
      <v-list-item to="/">
        <v-list-item-action>
          <v-icon>mdi-home</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item to="/DisplayAllCurricula">
        <v-list-item-action>
          <v-icon>mdi-format-list-text</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>All curricula</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  computed: {
    drawer: {
      get() {
        return this.$store.state.drawer;
      },
      set(val) {
        this.$store.commit("setDrawerStatus", val);
      }
    }
  }
};
</script>

<!--
Vuetiry 的drawer 侧边栏的显示隐藏, 除了v-app-bar 中的按钮, 还有空白区域点击
drawer 在较小屏幕打开时会覆盖v-app-bar 的按钮, 这是点击空白处会隐藏drawer
点击空白处隐藏drawer 这个动作, 想要生效就得修改Vuex 中的状态

姿势1, 使用语法糖v-model, 重写drawer 的getter\setter

  v-model="drawer"

  computed: {
    drawer: {
      get() {
        return this.$store.state.drawer;
      },
      set(val) {
        this.$store.commit("setDrawerStatus", val);
      }
    }
  }

姿势2, 不适用语法糖, 直接用v-bind:value v-on:input

  :value="$store.state.drawer" @input="$store.commit('setDrawerStatus', $event)"

参考https://stackoverflow.com/questions/47442621/
-->
