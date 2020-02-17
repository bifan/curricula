<template>
  <v-container class="mt-n3">
    <v-card outlined
      ><v-subheader>{{ $t("listName") }}</v-subheader>
      <v-card-text>
        <v-chip
          class="ma-1"
          v-for="(resource, resourceIndex) in curSection.resources"
          :key="resourceIndex"
          @click:close="del(resourceIndex)"
          close
        >
          {{ resource.name }}
        </v-chip>
        <v-text-field
          :label="$t('name')"
          v-model="resource.name"
        ></v-text-field>
        <v-text-field :label="$t('url')" v-model="resource.link"></v-text-field>
        <v-btn @click="add" class="mt-2">{{ $t("add") }}</v-btn>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "CurriculumSectionInfoResourcesCard",
  props: ["curSection"],
  data() {
    return {
      resource: {}
    };
  },
  methods: {
    add() {
      this.curSection.resources.push(this.resource);
      this.resource = {};
    },
    del(resourceIndex) {
      this.curSection.resources.splice(resourceIndex, 1);
    }
  }
};
</script>

<i18n>
{
  "en": {
    "listName": "Resources List",
    "name": "Name",
    "url": "URL",
    "add": "Add"
  },
  "zh":{
    "listName": "资源列表",
    "name": "资源名称",
    "url": "资源链接",
    "add": "添加资源"
  }
}
</i18n>
