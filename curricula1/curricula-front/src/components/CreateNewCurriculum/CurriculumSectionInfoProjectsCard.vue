<template>
  <v-container class="mt-n3">
    <v-card outlined
      ><v-subheader>{{ $t("listName") }}</v-subheader>
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
        <v-text-field :label="$t('name')" v-model="project.name"></v-text-field>
        <v-text-field :label="$t('url')" v-model="project.link"></v-text-field>
        <v-btn @click="add" class="mt-2">{{ $t("add") }}</v-btn>
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

<i18n>
{
  "en": {
    "listName": "Projects List",
    "name": "Name",
    "url": "URL",
    "add": "Add"
  },
  "zh":{
    "listName": "练习项目列表",
    "name": "练习项目名称",
    "url": "练习项目链接",
    "add": "添加练习项目"
  }
}
</i18n>
