<template>
  <v-container fluid>
    <v-form ref="form">
      <v-toolbar elevation="1">
        <v-toolbar-title>New Curriculum</v-toolbar-title>

        <v-spacer></v-spacer>
        <DummyFormBtn @dummy="dummyForm" />

        <!-- <v-btn text @click="dummyForm()">dummy</v-btn> -->
        <v-btn icon @click="submit">
          <v-icon>mdi-content-save</v-icon>
        </v-btn>
      </v-toolbar>
      <!--
        在<CurriculumBasicInfoCard> 内部, $parent 指的是<v-form>, 所以要用$parent.$parent 才能按预期得到值, 这要是后期重构嵌套更多蛋疼了, 弃 QAQ
        子组件的props 中用什么名称接, 就得v-bind:什么名称. 使用v-model 时就只能用"value" 接了
      -->
      <CurriculumBasicInfoCard v-bind:curriculum="curriculum" />
      <CurriculumSectionInfoCard v-bind:curriculum="curriculum" />
    </v-form>
  </v-container>
</template>

<script>
import DummyFormBtn from "@/components/CreateNewCurriculum/DummyFormBtn.vue";
import CurriculumBasicInfoCard from "@/components/CreateNewCurriculum/CurriculumBasicInfoCard.vue";
import CurriculumSectionInfoCard from "@/components/CreateNewCurriculum/CurriculumSectionInfoCard.vue";

export default {
  name: "CreateNewCurriculum",
  data() {
    return {
      // 由于子组件中的表单需要靠sections 的数据生成, 所以给个初始值
      curriculum: {
        sections: [
          {
            resources: [],
            projects: []
          }
        ]
      }
    };
  },
  methods: {
    submit: function() {
      if (this.$refs.form.validate()) {
        this.$store.commit("addCurriculum", this.curriculum);
        // this.$refs.form.reset();
        this.$router.push("/DisplayAllCurricula"); // Vue router 编程式的导航
      }
    },
    dummyForm: DummyFormBtn.methods.dummyForm // ...dummy.methods
  },
  components: {
    DummyFormBtn,
    CurriculumBasicInfoCard,
    CurriculumSectionInfoCard
  }
};
</script>
