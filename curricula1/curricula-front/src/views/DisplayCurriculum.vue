<template>
  <v-container>
    <p>DisplayCurriculum.vue</p>
    <p>{{ curriculum.name }}</p>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      curriculum: null
    };
  },
  // 组件创建完后获取数据
  created() {
    // 根据路由中的id 值, 从Vuex 中查询数据
    this.curriculum = this.$store.state.curriculaData.find(curriculum => {
      return curriculum.id === this.$route.params.id;
    });
  }
};
</script>
