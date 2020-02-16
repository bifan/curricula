<template>
  <!-- dummyObj 可以, dummyObje() 也可以 -->
  <v-btn x-small @click="dummyObj">dummy</v-btn>
</template>
<script>
export default {
  name: "DummyFormBtn",
  methods: {
    // ??? 此函数只在当前组件中使用, 使用了$emit, 必须得得放在export 中吗?
    dummyObj: function() {
      const obj = {
        id: "5c9caf-a912-466c-888f-1" + this.$store.state.dummyIdCount,
        name: "Dummy Name" + this.$store.state.dummyIdCount,
        goal: "Dummy Goal",
        description: "Dummy Description",
        sections: [
          {
            name: "Dummy section name",
            goal: "Dummy section goal",
            resources: [
              { name: "Dummy resource name", url: "https://bifan.io" },
              { name: "Dummy resource name2", url: "https://bifan.io" },
              { name: "Dummy resource name3", url: "https://bifan.io" }
            ],
            projects: [
              { name: "Dummy project name", url: "https://bifan.io" },
              { name: "Dummy project name2", url: "https://bifan.io" }
            ]
          }
        ]
      };
      this.$store.commit("incrementDummyIdCount");
      this.$emit("dummy", obj); // 利用自定义事件向父组件传参
    },
    dummyForm: function(obj) {
      this.curriculum = obj;
    }
  }
};
</script>
