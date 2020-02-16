<template>
  <v-container class="mt-n3">
    <v-card outlined
      ><v-subheader>Projects List</v-subheader>
      <v-card-text>
        <v-chip
          class="ma-1"
          v-for="(project, projectIndex) in curSection.projects"
          :key="projectIndex"
          @click:close="del(projectIndex)"
          close
        >
          {{ project.name }}
        </v-chip>
        <v-text-field label="Name" v-model="project.name"></v-text-field>
        <v-text-field label="URL" v-model="project.link"></v-text-field>
        <v-btn @click="add" class="mt-2">Add</v-btn>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "CurriculumSectionInfoProjectsCard",
  props: ["curSection"],
  data() {
    return {
      project: {}
    };
  },
  methods: {
    add() {
      this.curSection.projects.push(this.project);
      this.project = {};
    },
    del(projectIndex) {
      this.curSection.projects.splice(projectIndex, 1);
    }
  }
};
</script>
