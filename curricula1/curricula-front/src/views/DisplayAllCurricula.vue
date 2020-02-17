<template>
  <v-container fluid>
    <v-card>
      <v-toolbar flat>
        <v-toolbar-title>学程列表</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn icon to="/CreateNewCurriculum" v-on="on">
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </template>
          <span>添加新学程</span>
        </v-tooltip>
      </v-toolbar>

      <v-divider></v-divider>
      <v-list three-line>
        <template v-for="curriculum in curriculaData">
          <!--
            属性值包含字符串和变量时, 这两种姿势都行
            :to="'/curriculum/' + curriculum.id"
            :to="`/curriculum/${curriculum.id}`"
          -->
          <v-list-item
            :key="curriculum.title"
            :to="'/DisplayCurriculum/' + curriculum.id"
          >
            <v-list-item-content>
              <v-list-item-title v-html="curriculum.name"></v-list-item-title>
              <v-list-item-subtitle
                v-html="curriculum.description"
              ></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list> </v-card
  ></v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "DisplayAllCurricula",
  computed: mapState(["curriculaData"])
};
</script>
