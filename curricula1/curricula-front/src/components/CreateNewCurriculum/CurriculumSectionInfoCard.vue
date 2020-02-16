<template>
  <!-- <v-container fluid> -->
  <v-row class="mt-n3"
    ><v-col>
      <v-card
        outlined
        v-for="(section, sectionIndex) in curriculum.sections"
        :key="sectionIndex"
        class="mt-2"
      >
        <v-card-title
          ><span>Sections #{{ sectionIndex + 1 }}</span>
          <v-spacer></v-spacer>
          <v-btn icon @click="deleteSection(sectionIndex)">
            <v-icon>mdi-close-circle</v-icon>
          </v-btn></v-card-title
        >
        <v-card-text>
          <v-text-field label="Name" v-model="section.name"></v-text-field>
          <v-text-field label="Goal" v-model="section.goal"></v-text-field>
        </v-card-text>
        <CurriculumSectionInfoResourcesCard v-bind:curSection="section"/>
        <CurriculumSectionInfoProjectsCard v-bind:curSection="section"/></v-card
      ><v-btn @click="addSection" class="mt-2">Add Section</v-btn></v-col
    ></v-row
  >
  <!-- </v-container> -->
</template>

<script>
import CurriculumSectionInfoResourcesCard from "@/components/CreateNewCurriculum/CurriculumSectionInfoResourcesCard.vue";
import CurriculumSectionInfoProjectsCard from "@/components/CreateNewCurriculum/CurriculumSectionInfoProjectsCard.vue";

export default {
  name: "CurriculumSectionInfoCard",
  props: ["curriculum"],
  methods: {
    addSection() {
      this.curriculum.sections.push({
        name: "",
        goal: "",
        resources: [],
        projects: []
      });
    },
    deleteSection(sectionIndex) {
      this.curriculum.sections.splice(sectionIndex, 1);
    }
  },
  components: {
    CurriculumSectionInfoResourcesCard,
    CurriculumSectionInfoProjectsCard
  }
};
</script>
