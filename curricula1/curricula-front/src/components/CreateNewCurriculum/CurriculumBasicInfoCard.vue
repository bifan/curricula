<template>
  <v-card class="mt-2" outlined>
    <v-card-text>
      <v-text-field
        label="Name"
        v-model="curriculum.name"
        :rules="nameRules"
        required
      ></v-text-field>
      <v-text-field label="Goal" v-model="curriculum.goal"></v-text-field>
      <v-textarea
        label="Description"
        name="description"
        v-model="curriculum.description"
      ></v-textarea>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "CurriculumBasicInfoCard",
  data() {
    return {
      nameRules: [v => !!v || "Name is required"]
    };
  },
  props: ["curriculum"]
};
</script>
