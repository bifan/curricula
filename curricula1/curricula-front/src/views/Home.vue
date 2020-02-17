<template>
  <v-container>
    <v-banner class="text-center">
      {{ $t("appIntroduce") }}
    </v-banner>
    <v-sheet
      :color="`${theme.isDark ? 'darken-2' : 'lighten-4'}`"
      class="px-3 pt-3 pb-3"
    >
      <v-skeleton-loader
        class="mx-auto"
        type="card"
      ></v-skeleton-loader> </v-sheet
  ></v-container>
</template>

<script>
// @ is an alias to /src
// import Header from "@/components/Header.vue";

export default {
  name: "Home",
  inject: ["theme"],
  components: {
    // Header
  }
};
</script>

<i18n>
{
  "en": {
    "appIntroduce": "Make learning curriculum, then keep track of your progress"
  },
  "zh":{
    "appIntroduce": "学程, 是制定学习计划, 跟踪学习进度的应用"
  }
}
</i18n>
