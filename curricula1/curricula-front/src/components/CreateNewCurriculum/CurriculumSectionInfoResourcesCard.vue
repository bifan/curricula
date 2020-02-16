<template>
  <v-container class="mt-n3">
    <v-card outlined
      ><v-subheader>Resources List</v-subheader>
      <v-card-text>
        <v-chip
          class="ma-1"
          v-for="(resource, resourceIndex) in curSection.resources"
          :key="resourceIndex"
          @click:close="del(resourceIndex)"
          close
        >
          {{ resource.name }}
        </v-chip>
        <v-text-field label="Name" v-model="resource.name"></v-text-field>
        <v-text-field label="URL" v-model="resource.link"></v-text-field>
        <v-btn @click="add" class="mt-2">Add</v-btn>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "CurriculumSectionInfoResourcesCard",
  props: ["curSection"],
  data() {
    return {
      resource: {}
    };
  },
  methods: {
    add() {
      this.curSection.resources.push(this.resource);
      this.resource = {};
    },
    del(resourceIndex) {
      this.curSection.resources.splice(resourceIndex, 1);
    }
  }
};
</script>
