<template>
  <v-card class="mt-2" outlined>
    <v-card-text>
      <v-text-field
        :label="$t('name')"
        v-model="curriculum.name"
        :rules="nameRules"
        required
      ></v-text-field>
      <v-text-field
        :label="$t('goal')"
        v-model="curriculum.goal"
      ></v-text-field>
      <v-textarea
        :label="$t('description')"
        v-model="curriculum.description"
      ></v-textarea>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "CurriculumBasicInfoCard",
  data() {
    return {
      nameRules: [v => !!v || this.$t("nameRulesMessage")]
    };
  },
  props: ["curriculum"]
};
</script>

<i18n>
{
  "en": {
    "name": "Name",
    "goal": "Goal",
    "description": "Description",
    "nameRulesMessage": "Name is required"
  },
  "zh":{
    "name": "学程名称",
    "goal": "学程目标",
    "description": "更多描述",
    "nameRulesMessage": "学程名称为必填项"
  }
}
</i18n>
