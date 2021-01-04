<template>
  <div class="q-pa-md">
    <q-table
      :data="data"
      :columns="columns"
      :rows-per-page-options="[]"
      wrap-cells
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="title" :props="props">
            {{ props.row.title }}
          </q-td>

          <q-td key="issues" :props="props">
            {{ props.row.issues }}
          </q-td>

          <q-td key="createdDate" :props="props">
            {{ props.row.createdDate }}
          </q-td>

          <q-td key="endDate" :props="props">
            <div class="text-pre-wrap">{{ props.row.endDate }}</div>
          </q-td>

          <q-td key="comments" :props="props">
            <div class="text-pre-wrap">{{ props.row.comments }}</div>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script>
import { mapState } from "vuex";
const columns = [
  {
    name: "title",
    style: "min-width: 160px; width: 160px",
    align: "left",
    label: "Titles",
    field: "title",
  },
  {
    name: "issues",
    style: "min-width: 200px; width: 200px",
    align: "left",
    label: "Issues",
    field: "issues",
  },
  {
    name: "createdDate",
    align: "left",
    style: "min-width: 200px; width: 100px",
    label: "Created date",
    field: "createdDate",
  },
  { name: "endDate", align: "left",style: "min-width: 200px; width: 100px", label: "End date", field: "endDate"},
  { name: "comments", align: "left",style: "min-width: 200px; width: 100px", label: "Comments", field: "comments"}
];

const data = [
  {
    title: "Hotel management system",
    issues: `#2 error while submitting form`,
    createdDate: "07/01/2021",
    endDate: "07/01/2021",
    comments:"jack: i have done changes \n varun: your changes are not correct"
    //comments:[{id:'#2',name:'abhishek',comment:'I have done changes'}]
    },
  {
    title: "carli",
    issues: `#5 ui is not suitbale for mobile`,
    createdDate: "07/01/2021",
    endDate: "07/01/2021",
    comments:"abhishek: i have done changes \n yash: your changes are not correct"
  },
  {
    title: "library management",
    issues: `#1 login page issues`,
    createdDate: "07/01/2021",
    endDate: "07/01/2021",
    comments:"deepak: i have done changes \n yash: your changes are not correct"
  },
  {
    title: "chat app",
    issues: `#5 validations are missing`,
    createdDate: "07/01/2021",
    endDate: "07/04/2021",
    comments:"palak: i have done changes \n riya: your changes are not correct"
  },
];

export default {
  computed: {
    ...mapState("store", ["userDetails"]),
  },
  data() {
    return {
      data,
      columns,
    };
  },
};
</script>
<style lang="stylus" scoped>
.q-btn {
  padding: 19px 16px;
  min-height: 2.572em;
  border-radius: inherit;
  width: 50%;
  height: 50%;
}
</style>