<template>
  <q-form v-if="tab == 'create-issue'" @submit="createIssue">
    <q-input
      outlined
      class="q-mb-md"
      v-model="projectData.title"
      label="Project title"
      type="text"
    />
    <q-input
      outlined
      class="q-mb-md"
      v-model="projectData.issues"
      label="Project issues"
      type="textarea"
    />
    <q-input
      outlined
      class="q-mb-md"
      v-model="projectData.createDate"
      label="Start date"
      filled
      type="date"
    />
    <q-input
      outlined
      class="q-mb-md"
      v-model="projectData.endDate"
      label="End date"
      filled
      type="date"
    />
    <div style="width: 130px; margin: 0 auto">
      <q-space />
      <q-btn color="primary" label="Create issue" type="submit" />
    </div>
  </q-form>
</template>
<script>
export default {
  props: ["tab"],
  data() {
    return {
      projectIssues: [],
      projectData: {
        title: "",
        issue: "",
        createdate: "",
        endDate: "",
        // we can use issueId
      },
    };
  },
  methods: {
    createIssue() {
      this.projectIssues.push(this.projectData);
      this.projectData = {};
    },
  },
};
</script>
<style lang="stylus">
.q-field--labeled .q-field__native, .q-field--labeled .q-field__prefix, .q-field--labeled .q-field__suffix {
    line-height: 20px;
    padding-top: 34px;
    padding-bottom: 8px;
}
</style>