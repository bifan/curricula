<template>
  <v-app-bar app clipped-left>
    <v-app-bar-nav-icon @click.stop="toggleDrawerStatus"></v-app-bar-nav-icon
    ><v-toolbar-title><slot></slot></v-toolbar-title>
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
