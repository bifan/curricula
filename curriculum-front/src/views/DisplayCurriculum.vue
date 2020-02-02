<template>
  <v-row no-gutters class="mt-12">
    <v-col md="6" offset-md="3" sm="8" offset-sm="2">
      <v-row>
        <v-col>
          <div>
            <h1 class="d-inline">{{ selectedCurriculum.name }}</h1>
            <p>{{ selectedCurriculum.description }}</p>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-expansion-panels multiple accordion>
            <v-expansion-panel
              v-for="(section, index) in selectedCurriculum.sections"
              :key="section.name + index"
            >
              <v-expansion-panel-header
                >Section {{ index + 1 }} -
                {{ section.name }}</v-expansion-panel-header
              >
              <v-expansion-panel-content>
                <v-list subheader two-line flat>
                  <v-subheader>Resource</v-subheader>

                  <v-list-item-group multiple>
                    <v-list-item
                      v-for="(resource, index) in section.resources"
                      :key="resource + index"
                    >
                      <template v-slot:default="{ active, toggle }">
                        <v-list-item-action>
                          <v-checkbox
                            v-model="active"
                            color="primary"
                            @click="toggle"
                          ></v-checkbox>
                        </v-list-item-action>

                        <v-list-item-content>
                          <v-list-item-title>{{ resource }}</v-list-item-title>
                        </v-list-item-content>
                      </template>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
                <v-divider></v-divider>
                <v-list subheader two-line flat>
                  <v-subheader>Projects</v-subheader>

                  <v-list-item-group multiple>
                    <v-list-item
                      v-for="(project, index) in section.projects"
                      :key="project + index"
                    >
                      <template v-slot:default="{ active, toggle }">
                        <v-list-item-action>
                          <v-checkbox
                            v-model="active"
                            color="primary"
                            @click="toggle"
                          ></v-checkbox>
                        </v-list-item-action>

                        <v-list-item-content>
                          <v-list-item-title>{{ project }}</v-list-item-title>
                        </v-list-item-content>
                      </template>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      curriculumId: this.$route.params.id,
      selectedCurriculum: {}
    };
  },
  computed: {
    ...mapState(["curricula"])
  },
  mounted() {
    for (let curriculum of this.curricula) {
      if (curriculum._id === this.curriculumId) {
        this.selectedCurriculum = curriculum;
      }
    }
  }
};
</script>
