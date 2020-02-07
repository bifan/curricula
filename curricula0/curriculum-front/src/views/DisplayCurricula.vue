<template>
  <v-row no-gutters class="mt-12">
    <v-col md="6" offset-md="3" sm="8" offset-sm="2">
      <v-row>
        <v-col>
          <div class="d-flex justify-space-between">
            <h1 class="d-inline">All Curricula</h1>
            <v-btn>Create New</v-btn>
          </div>
        </v-col>
      </v-row>
      <v-row v-for="curriculum in curricula" :key="curriculum._id">
        <v-col>
          <v-card outlined>
            <v-card-title class="headline"
              ><router-link :to="`/curricula/${curriculum._id}`">{{
                curriculum.name
              }}</router-link></v-card-title
            >
            <v-card-subtitle>{{ curriculum.description }}</v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
// import curriculaData from "@/data/curricula";
import { mapState, mapActions } from "vuex";

export default {
  name: "DisplayCurricula",
  data() {
    return {
      // curriculaData
    };
  },
  computed: {
    ...mapState(["curricula"])
  },
  methods: {
    ...mapActions(["getCurricula"])
  },
  mounted() {
    this.getCurricula();
  }
};
</script>
