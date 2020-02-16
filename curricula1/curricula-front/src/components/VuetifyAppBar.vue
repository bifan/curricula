<template>
  <v-app-bar app clipped-left>
    <v-app-bar-nav-icon @click.stop="toggleDrawerStatus"></v-app-bar-nav-icon
    ><v-toolbar-title><slot></slot></v-toolbar-title> <v-spacer></v-spacer>

    <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-btn
          icon
          @click="$vuetify.theme.dark = !$vuetify.theme.dark"
          v-on="on"
        >
          <v-icon>mdi-brightness-6</v-icon>
        </v-btn>
      </template>
      <span>暗&nbsp;|&nbsp;亮</span>
    </v-tooltip>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    toggleDrawerStatus() {
      this.$store.commit("toggleDrawerStatus");
    }
  }
};
</script>
