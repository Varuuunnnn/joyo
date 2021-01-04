<template>
  <q-form v-if="tab == 'add-comment'" @submit="addComment">
    <q-input
      outlined
      class="q-mb-md"
      v-model="issueData.issueId"
      label="Issue id"
      type="text"
    />
    <q-input
      outlined
      class="q-mb-md"
      v-model="issueData.comment"
      label="Write your comment"
      type="textarea"
    />
    
    <div style="width: 130px; margin: 0 auto">
      <q-space />
      <q-btn color="primary" label="Comment" type="submit" />
    </div>
  </q-form>
</template>
<script>
import { mapState } from "vuex";
export default {
    props:['tab'],
    computed: {
    ...mapState("store", ["userDetails"]),
  },
    data(){
        return{
            issueComments:[],
            issueData:{
                issueId:'',
                comment:'',
               // name:userDetails.name
            }
        }
    },
    methods:{
        addComment(){
         this.issueComments.push(this.issueData)
         this.issueData={}
        }
    }
    
}
</script>