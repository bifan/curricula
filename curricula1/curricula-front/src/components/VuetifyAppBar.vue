<template>
  <v-app-bar app clipped-left>
    <v-app-bar-nav-icon @click.stop="toggleDrawerStatus"></v-app-bar-nav-icon
    ><v-toolbar-title><slot></slot></v-toolbar-title> <v-spacer></v-spacer>

    <!-- <v-overflow-btn class="my-2" :items="langs" text bottom></v-overflow-btn> -->

    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn v-on="on" text class="text-capitalize">
          <v-icon left>mdi-translate</v-icon>{{ $t("transLang")
          }}<v-icon right>mdi-menu-down</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(lang, index) in langs"
          :key="index"
          @click="lang.trans"
        >
          <v-list-item-title>{{ lang.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <!-- @click="$vuetify.theme.dark = !$vuetify.theme.dark" -->
        <v-btn icon @click="toggleTheme" v-on="on">
          <v-icon>mdi-brightness-6</v-icon>
        </v-btn>
      </template>
      <span>{{ $t("brightness") }}</span>
    </v-tooltip>
  </v-app-bar>
</template>

<script>
import { setStorage } from "@/utils";

export default {
  data() {
    return {
      langs: [
        {
          text: "简体中文",
          trans: () => {
            // this.$i18n.locale = "zh"; // 这个只会修改单个组件
            this.$root.$i18n.locale = "zh"; // 修改全部组件
            // this.$store.commit("setlang", "zh");
            setStorage("lang", "zh");
          }
        },
        {
          text: "English",
          trans: () => {
            this.$root.$i18n.locale = "en";
            // this.$store.commit("setlang", "en");
            setStorage("lang", "en");
          }
        }
      ]
    };
  },
  methods: {
    toggleDrawerStatus() {
      this.$store.commit("toggleDrawerStatus");
    },
    toggleTheme() {
      // this.$store.commit("toggleTheme");
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      setStorage("theme", { isDarkTheme: this.$vuetify.theme.dark });
    }
  }
};
</script>

<i18n>
{
  "en": {
    "transLang": "Englsh",
    "brightness": "Dark | Light"
  },
  "zh":{
    "transLang": "简体中文",
    "brightness": "暗 | 亮"
  }
}
</i18n>
