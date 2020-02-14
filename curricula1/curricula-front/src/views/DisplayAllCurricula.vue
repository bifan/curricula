<template>
  <v-container>
    <v-card class="mx-auto">
      <v-toolbar>
        <v-toolbar-title>All Curricula</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn text>
          Create new one
        </v-btn>
      </v-toolbar>

      <v-list three-line>
        <template v-for="curriculum in curriculaData">
          <v-divider
            v-if="curriculum.divider"
            :key="curriculum.id"
            :inset="item.inset"
          ></v-divider>

          <!--
            属性值包含字符串和变量时, 这两种姿势都行
            :to="'/curriculum/' + curriculum.id"
            :to="`/curriculum/${curriculum.id}`"
          -->
          <v-list-item
            v-else
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
