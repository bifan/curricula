<template>
  <v-container>
    <h1>{{ curriculum.name }}</h1>
    <p>{{ curriculum.description }}</p>
    <v-expansion-panels accordion>
      <v-expansion-panel
        v-for="(section, indexSection) in curriculum.sections"
        :key="section.name + indexSection"
      >
        <v-expansion-panel-header
          >Section {{ indexSection + 1 }} -
          {{ section.name }}</v-expansion-panel-header
        >
        <v-expansion-panel-content>
          <v-list subheader flat>
            <v-subheader>Resource</v-subheader>

            <v-list-item
              v-for="(resource, indexResource) in section.resources"
              :key="resource + indexResource"
              inactive
            >
              <v-list-item-action>
                <v-checkbox
                  v-model="resource.isCompleted"
                  @change="toggleCompleted()"
                  color="primary"
                ></v-checkbox>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title
                  ><v-btn text :href="resource.url">{{
                    resource.name
                  }}</v-btn></v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <v-divider></v-divider>
          <v-list subheader flat>
            <v-subheader>Projects</v-subheader>

            <v-list-item
              v-for="(project, index) in section.projects"
              :key="project + index"
              inactive
            >
              <v-list-item-action>
                <v-checkbox
                  v-model="project.isCompleted"
                  @change="toggleCompleted"
                  color="primary"
                ></v-checkbox>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title
                  ><v-btn text :to="project.url">{{
                    project.name
                  }}</v-btn></v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      curriculum: null
    };
  },
  // 生命周期钩子 - 组件创建完后获取数据
  created() {
    // 根据路由中的id 值, 从Vuex 中查询数据
    this.curriculum = this.$store.state.curriculaData.find(curriculum => {
      return curriculum.id === this.$route.params.id;
    });
  },
  methods: {
    toggleCompleted() {
      this.$store.commit("toggleResourcesCompleted", this.curriculum);
    }
  }
};
</script>
