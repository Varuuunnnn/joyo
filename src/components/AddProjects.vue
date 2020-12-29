<template>
    <q-form v-if="tab=='add-project'" @submit="addProject">
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
         v-model="projectData.description"
         label="Project description"
         type="textarea"
      />
      <q-input
         outlined
         class="q-mb-md"
         v-model="projectData.members"
         label="Members"
         type="text"
      />
      <q-option-group
         v-model="projectData.isBillable"
         :options="options"
         color="primary"
         inline
      />
     
      <div style="width:180px; margin:0 auto;">
          <q-space />
          <q-btn
             color="primary"
             label="add project" 
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
            projectList:[],
            projectData:{
                title:'',
                description:'',
                members:'',
                isBillable:true  
            },
            
            options:[
                {
                    label:'billable',
                    value:true,
                },
                {
                    label:'not billable',
                    value:false,
                }
            ]
        }
    },
    methods:{
        addProject(){
         this.projectList.push(this.projectData)
         this.projectData={}
        }
    }
    
}
</script>