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
      <v-form class="upsert-form" ref="form">
        <v-row>
          <v-col cols="12">
            <v-text-field
              label="Name"
              v-model="name"
              :rules="nameRules"
              required
            ></v-text-field>
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

        <!-- Section # -->
        <v-row v-for="(section, index) in sections" :key="index">
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

                <!-- section.newResource -->
                <v-row>
                  <v-col cols="12">
                    <v-card>
                      <v-card-text>
                        <v-row>
                          <v-col cols="12">
                            <v-text-field
                              placeholder="Resource Name"
                              v-model="section.newResource.name"
                            ></v-text-field>
                            <v-text-field
                              placeholder="Resource Link (Enter to add more)"
                              v-model="section.newResource.link"
                              :rules="url"
                              @keyup.enter="addItem('resource', index)"
                            ></v-text-field>

                            <v-btn @click="addItem('resource', index)">
                              Add new one
                            </v-btn>
                            <v-list v-if="section.resources.length">
                              <template
                                v-for="(resource,
                                indexResources) in section.resources"
                              >
                                <v-list-item :key="resource + indexResources">
                                  <template>
                                    <v-list-item-content>
                                      <v-list-item-title
                                        v-text="resource.name"
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

                <!-- section.newProject -->
                <v-row>
                  <v-col cols="12">
                    <v-card>
                      <v-card-text>
                        <v-row>
                          <v-col cols="12">
                            <v-text-field
                              placeholder="Project Name"
                              v-model="section.newProject.name"
                            ></v-text-field>
                            <v-text-field
                              placeholder="Project Link (Enter to add more)"
                              v-model="section.newProject.link"
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
      <v-snackbar v-model="snackbar" color="error">
        {{ snackbarMessage }}
        <v-btn icon color="white" @click="snackbar = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-snackbar>
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
          newResource: {
            name: "",
            link: ""
          },
          resources: [],
          newProject: {
            name: "",
            link: ""
          },
          projects: []
        }
      ],
      snackbar: false,
      snackbarMessage: "",
      nameRules: [v => !!v || "Name is required"],
      urlValid: true,
      url: [
        value => {
          console.log("urlValue", value);
          if (value) {
            if (
              /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/.test(
                value
              )
            ) {
              this.urlValid = true;
              return true;
            } else {
              // 有值的时候必须是正确的URL
              console.log("this.urlValid", this.urlValid);
              this.urlValid = false;
              return "Please provide a valid URL";
            }
          } else {
            // 没有值的时候允许添加
            this.urlValid = true;
            return true;
          }
        }
      ]
    };
  },
  /**
   * 
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/.test(
      value
    )
  )
    return true;
  return "Please provide a valid URL";
});
   */
  methods: {
    ...mapActions(["postCurriculum"]),
    saveCurriculum() {
      if (this.$refs.form.validate()) {
        const { name, goal, description, sections } = this;
        const newSections = sections.map((section, i) => {
          let updatedSection = { ...section };
          delete updatedSection.newResource;
          delete updatedSection.newProject;
          return section;
        });
        const curriculum = { name, goal, description, sections: newSections };
        this.postCurriculum(curriculum);
        this.$refs.form.reset(); // <v-form ref="form">
        // this.$refs.form.resetValidation();
      }
    },
    addSection() {
      this.sections.push({
        name: "",
        goal: "",
        newResource: {
          name: "",
          link: ""
        },
        resources: [],
        newProject: {
          name: "",
          link: ""
        },
        projects: []
      });
    },
    addItem(type, index) {
      // 'newResource' or 'newProject'
      let typeName = `new${type[0].toUpperCase()}${type.substr(1)}`;
      // new link's value
      let item = this.sections[index][typeName];

      // 仅name 有值时可以保存(link 没有值时urlValid 为true, 不会破坏逻辑)
      // name和link 都有值时, link 要通过验证
      if (item.name && this.urlValid) {
        // 不能直接push(item), 因为item 和input 数据绑定了, input 被清空, item 也没值了
        this.sections[index][`${type}s`].push({
          name: item.name,
          link: item.link
        });
        // empty inputs
        item.name = "";
        item.link = "";
      }
      //  else {
      //   this.snackbarMessage = `添加失败, 请查看表单验证消息`;
      //   this.snackbar = true;
      // }
    },
    deleteItem(type, sectionIndex, itemIndex) {
      this.sections[sectionIndex][type].splice(itemIndex, 1);
    }
  }
};
</script>
