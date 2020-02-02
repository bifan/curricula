<template>
  <v-row no-gutters class="mt-12">
    <v-col md="6" offset-md="3" sm="8" offset-sm="2">
      <v-row>
        <v-col>
          <div class="d-flex justify-space-between">
            <h1 class="d-inline">New Curriculum</h1>
            <v-btn tile @click="saveCurriculum">Save</v-btn>
          </div>
        </v-col>
      </v-row>
      <v-form class="upsert-form">
        <v-row>
          <v-col cols="12">
            <v-text-field label="Name" v-model="name"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-text-field label="Goal" v-model="goal"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-label>Description</v-label>
            <v-textarea
              solo
              name="description"
              v-model="description"
            ></v-textarea>
          </v-col>
        </v-row>
        <v-row v-for="(section, index) in sections" :key="section.name + index">
          <v-col cols="12">
            <v-card outlined>
              <v-card-title class="headline"
                >Sections #{{ index + 1 }}</v-card-title
              >
              <v-card-text>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      label="Name"
                      v-model="section.name"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      label="Goal"
                      v-model="section.goal"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-card>
                      <v-card-text>
                        <v-row>
                          <v-col cols="12">
                            <v-text-field
                              placeholder="Enter Resource Link"
                              v-model="section.newResource"
                              @keyup.enter="addItem('resource', index)"
                            ></v-text-field>
                            <v-list v-if="section.resources.length">
                              <template
                                v-for="(resource,
                                indexResources) in section.resources"
                              >
                                <v-list-item :key="resource + indexResources">
                                  <template>
                                    <v-list-item-content>
                                      <v-list-item-title
                                        v-text="resource"
                                      ></v-list-item-title>
                                    </v-list-item-content>
                                    <v-btn
                                      icon
                                      @click="
                                        deleteItem(
                                          'resources',
                                          index,
                                          indexResources
                                        )
                                      "
                                    >
                                      <v-icon>mdi-close</v-icon>
                                    </v-btn>
                                  </template>
                                </v-list-item>
                                <v-divider
                                  v-if="
                                    indexResources + 1 <
                                      section.resources.length
                                  "
                                  :key="
                                    indexResources + resource + indexResources
                                  "
                                ></v-divider>
                              </template>
                            </v-list>
                          </v-col>
                        </v-row>
                      </v-card-text>
                    </v-card>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-card>
                      <v-card-text>
                        <v-row>
                          <v-col cols="12">
                            <v-text-field
                              placeholder="Enter Project Link"
                              v-model="section.newProject"
                              @keyup.enter="addItem('project', index)"
                            ></v-text-field>
                            <v-list v-if="section.projects.length">
                              <template
                                v-for="(project,
                                indexProjects) in section.projects"
                              >
                                <v-list-item :key="project + indexProjects">
                                  <template>
                                    <v-list-item-content>
                                      <v-list-item-title
                                        v-text="project"
                                      ></v-list-item-title>
                                    </v-list-item-content>

                                    <v-btn
                                      icon
                                      @click="
                                        deleteItem(
                                          'projects',
                                          index,
                                          indexProjects
                                        )
                                      "
                                    >
                                      <v-icon>mdi-close</v-icon>
                                    </v-btn>
                                  </template>
                                </v-list-item>

                                <v-divider
                                  v-if="
                                    indexProjects + 1 < section.projects.length
                                  "
                                  :key="indexProjects + project + indexProjects"
                                ></v-divider>
                              </template>
                            </v-list>
                          </v-col>
                        </v-row>
                        <!--
                        <v-row>
                          <v-col cols="12">
                               class="d-flex justify-space-between"
                               <p class="d-inline">
                              {{ project }}
                            </p>
                            <v-icon
                              @click="
                                deleteItem('projects', index, indexProjects)
                              "
                              >mdi-close</v-icon
                            >
                          </v-col>
                        </v-row> -->
                      </v-card-text>
                    </v-card>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12"
            ><v-btn @click="addSection">Add Section</v-btn></v-col
          >
        </v-row>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "CreateCurriculum",
  data() {
    return {
      name: "",
      goal: "",
      description: "",
      sections: [
        {
          name: "",
          goal: "",
          newResource: "",
          resources: [],
          newProject: "",
          projects: []
        }
      ]
    };
  },
  methods: {
    ...mapActions(["postCurriculum"]),
    saveCurriculum() {
      const { name, goal, description, sections } = this;
      const newSections = sections.map((section, i) => {
        let updatedSection = { ...section };
        delete updatedSection.newResource;
        delete updatedSection.newProject;
        return section;
      });
      const curriculum = { name, goal, description, sections: newSections };
      this.postCurriculum(curriculum);
    },
    addSection() {
      this.sections.push({
        name: "",
        goal: "",
        newResource: "",
        resources: [],
        newProject: "",
        projects: []
      });
    },
    addItem(type, index) {
      let typeName = `new${type[0].toUpperCase()}${type.substr(1)}`;
      let item = this.sections[index][typeName];
      this.sections[index][`${type}s`].push(item);
      this.sections[index][typeName] = "";
    },
    deleteItem(type, sectionIndex, itemIndex) {
      this.sections[sectionIndex][type].splice(itemIndex, 1);
    }
  }
};
</script>
