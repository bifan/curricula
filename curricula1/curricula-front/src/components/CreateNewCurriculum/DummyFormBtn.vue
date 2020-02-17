<template>
  <!-- dummyObj 可以, dummyObje() 也可以 -->
  <v-btn x-small @click="dummyObj" class="text-capitalize">{{
    $t("dummy")
  }}</v-btn>
</template>
<script>
export default {
  name: "DummyFormBtn",
  methods: {
    // ??? 此函数只在当前组件中使用, 使用了$emit, 必须得得放在export 中吗?
    dummyObj: function() {
      const obj = this.$t("obj");
      obj.id = obj.id + this.$store.state.dummyIdCount;
      obj.name = obj.name + this.$store.state.dummyIdCount;
      this.$store.commit("incrementDummyIdCount");
      this.$emit("dummy", obj); // 利用自定义事件向父组件传参
    },
    dummyForm: function(obj) {
      this.curriculum = obj;
    }
  }
};
</script>

<i18n>
{
  "en": {
    "dummy": "Dummy",
    "obj" : {
        "id": "5c9caf-a912-466c-888f-1",
        "name": "Dummy Name",
        "goal": "Dummy Goal",
        "description": "Dummy Description",
        "sections": [
          {
            "name": "Dummy section name",
            "goal": "Dummy section goal",
            "resources": [
              { "name": "Dummy resource name", "url": "https://bifan.io" },
              { "name": "Dummy resource name2", "url": "https://bifan.io" },
              { "name": "Dummy resource name3", "url": "https://bifan.io" }
            ],
            "projects": [
              { "name": "Dummy project name", "url": "https://bifan.io" },
              { "name": "Dummy project name2", "url": "https://bifan.io" }
            ]
          }
        ]
      }
  },
  "zh":{
    "dummy": "伪数据",
    "obj" : {
        "id": "5c9caf-a912-466c-888f-1",
        "name": "名称伪数据",
        "goal": "目标伪数据",
        "description": "描述伪数据",
        "sections": [
          {
            "name": "阶段名称伪数据",
            "goal": "阶段目标伪数据",
            "resources": [
              { "name": "资源名称伪数据1", "url": "https://bifan.io" },
              { "name": "资源名称伪数据2", "url": "https://bifan.io" },
              { "name": "资源名称伪数据3", "url": "https://bifan.io" }
            ],
            "projects": [
              { "name": "练习项目名称伪数据1", "url": "https://bifan.io" },
              { "name": "练习项目名称伪数据2", "url": "https://bifan.io" }
            ]
          }
        ]
      }
  }
}
</i18n>
