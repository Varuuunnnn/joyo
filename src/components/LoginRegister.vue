<template>
    <q-form @submit="submitForm">
       <q-input
         v-if="tab=='register'"
         outlined
         class="q-mb-md"
         v-model="formData.name"
         label="Name"
         type="text"
      />
      <q-input
         outlined
         class="q-mb-md"
         v-model="formData.email"
         label="Email"
         type="email"
      />
      <q-input
         outlined
         class="q-mb-md"
         v-model="formData.password"
         label="Password"
         type="password"
      />
      <q-option-group
         v-if="tab=='register'"
         v-model="formData.type"
         :options="options"
         color="primary"
         inline
      />
      <div class="row">
          <q-space />
          <q-btn
             color="primary"
             :label="tab" 
             type="submit"
           />
      </div>
    </q-form>    
</template>
<script>
import { mapActions } from 'vuex'
export default {
    props:['tab'],
    data(){
        return{
            formData:{
                name:'',
                email:'',
                password:'',
                type:'admin',
                
            },
            options: [
                    {
                        label: 'Admin',
                        value: 'admin'
                    },
                    {
                        label: 'Project Manager',
                        value: 'projectManager'
                    },
                    {
                        label: 'Project Lead',
                        value: 'projectLead'
                    },
                    {
                        label: 'Tech Team',
                        value: 'techTeam'
                    },
                    {
                        label: 'Intern',
                        value: 'intern'
                    }
                ]
        }
    },
    methods:{
        ...mapActions('store',['registerUser','loginUser']),
        submitForm(){
            if(this.tab=='login'){
                this.loginUser(this.formData)
            }
            else{
                this.registerUser(this.formData)
            }
        }
    }
}
</script>