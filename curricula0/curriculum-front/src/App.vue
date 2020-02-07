<template>
  <v-app>
    <TopNav /><!--<v-app-bar> -->
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import TopNav from "./components/TopNav.vue";

export default {
  components: {
    TopNav
  }
};
</script>
