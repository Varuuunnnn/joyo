<template>
  <div class="q-pa-md">
    <div class="text-h2 text-center">
      {{ userDetails.name }}
      <q-badge>{{ userDetails.type }}</q-badge>
    </div>
    <div class="q-mt-md">
      <q-fab
        v-model="fab2"
        label="What to do"
        external-label
        label-class="bg-grey-3 text-purple"
        vertical-actions-align="left"
        color="primary"
        icon="menu"
        direction="down"
      >
        <q-fab-action
          label-class="bg-grey-3 text-grey-8"
          external-label
          color="primary"
          @click="onClick"
          icon="add_task"
          label="Add project"
        />
        <q-fab-action
          label-class="bg-grey-3 text-grey-8"
          external-label
          color="secondary"
          @click="onClick"
          icon="list"
          label="Projects list"
        />
        <q-fab-action
          label-class="bg-grey-3 text-grey-8"
          external-label
          color="red"
          @click="onClick"
          icon="warning"
          label="Create issues"
        />
        <q-fab-action
          label-class="bg-grey-3 text-grey-8"
          external-label
          color="accent"
          @click="onClick"
          icon="comment"
          label="Add comments"
        />
      </q-fab>
    </div>

    <q-card class="full-width">
      <q-tabs
        v-model="tab"
        class="q-mb-md"
        active-color="primary"
        indicator-color="primary"
        align="justify"
        narrow-indicator
      >
        <q-tab
          name="add-project"
          label="Add project"
          v-if="userDetails.type == 'admin'"
        />
        <q-tab 
          name="project-list"
          label="Projects list" 
        />
        <q-tab 
          v-if="userDetails.type == 'admin'||userDetails.type == 'projectManager'||userDetails.type == 'projectLead'"
          name="create-issue"
          label="Create issue" 
        />
        <q-tab 
          name="add-comment"
          label="Add comment" 
        />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="add-project" v-if="userDetails.type == 'admin'">
          <add-project :tab="tab" />
        </q-tab-panel>

        <q-tab-panel name="project-list">
          <project-list :tab="tab" />
        </q-tab-panel>

        <q-tab-panel name="create-issue" v-if="userDetails.type == 'admin'||userDetails.type == 'projectManager'||userDetails.type == 'projectLead'">
          <create-issue :tab="tab" />
        </q-tab-panel>

        <q-tab-panel name="add-comment" >
          <add-comment :tab="tab" />
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </div>
</template>

<script>

import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("store", ["userDetails"]),
  },
  data() {
    return {
      tab: "project-list",
      fab2: true,
    };
  },
  components: {
    "add-project": require("components/AddProjects.vue").default,
    "project-list": require("components/ShowProjectsList.vue").default,
    "create-issue": require("components/CreateIssue.vue").default,
    "add-comment": require("components/AddComment.vue").default
  }
};
</script>
    AddComment
<style lang="stylus" scoped>
.full-width {
  width: 60% !important;
  margin-left: auto !important; /* rtl:ignore */
  margin-right: auto !important; /* rtl:ignore */
  margin-top: auto !important; /* rtl:ignore */
  margin-bottom: auto !important; /* rtl:ignore */
}
</style>