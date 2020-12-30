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
         :rules="[val => !!val || 'Email is missing', isValidEmail]"
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
      <div style="width:80px; margin:0 auto;">
          <q-space />
          <q-btn
             color="primary"
             :label="tab" 
             type="submit"
             display="block"
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
                reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
                
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
        },
        isValidEmail (val) {
            const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
            return emailPattern.test(val) || 'Invalid email';
        }
    }
}
</script>
