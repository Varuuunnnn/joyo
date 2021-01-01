<template>
    <q-form v-if="tab=='create-issue'" @submit="createIssue">
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
     
      <div style="width:130px; margin:0 auto;">
          <q-space />
          <q-btn
             color="primary"
             label="Create issue" 
             type="submit"
           />
      </div>
    </q-form>    
</template>
<script>

export default {
    props:['tab'],
    data(){
        return{
            projectIssues:[],
            projectData:{
                title:'',
                issue:'',
                // we can use issueId 
            }
        }
    },
    methods:{
        createIssue(){
         this.projectIssues.push(this.projectData)
         this.projectData={}
        }
    }
    
}
</script>