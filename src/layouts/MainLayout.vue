<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated >
      
      <q-toolbar>
         <div class="q-mt-md">
      <q-fab
        v-if="userDetails.name"
        v-model="fab2"
        label="hide"
        external-label
        label-class="bg-white text-black"
        vertical-actions-align="left"
        color="white"
        flat dense icon="menu"
        direction="down"
      >
        <q-fab-action
          v-if="userDetails.type == 'admin'"
          label-class="bg-white text-black"
          external-label
          color="primary"
          @click="onClick"
          icon="add_task"
          label="Add project"
          
        />
        <q-fab-action
          label-class="bg-white text-black"
          external-label
          color="secondary"
          @click="onClick"
          icon="list"
          label="Projects list"
        />
        <q-fab-action
          v-if="userDetails.type == 'admin'||userDetails.type == 'projectManager'||userDetails.type == 'projectLead'"
          label-class="bg-white text-black"
          external-label
          color="red"
          @click="onClick"
          icon="warning"
          label="Create issues"
        />
        <q-fab-action
          label-class="bg-white text-black"
          external-label
          color="accent"
          @click="onClick"
          icon="comment"
          label="Add comments"
        />
      </q-fab>
    </div>
        
        <q-toolbar-title class="absolute-center">
          {{ title }}
        </q-toolbar-title>
        
        <q-btn
           v-if="userDetails.userId"
           @click="logoutUser"
           class="absolute-right q-pr-sm"
           icon="account_circle"
           no-caps
           flat
           dense
           >Logout<br>
           {{ userDetails.name }}
           
        </q-btn>     
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapState , mapActions} from 'vuex'
export default {
  computed:{
    ...mapState('store',['userDetails']),
    title(){
      let currentPath= this.$route.fullPath
      if(currentPath=='/') return 'JOYO'
      else if(currentPath=="/dashboard") return 'Dashboard'
    }
  },
  data(){
   return{
     fab2:false,
   }
  },
  methods:{
    ...mapActions('store', ['logoutUser'])
  }


}
</script>
<style lang="stylus">
 .q-toolbar{
     .q-btn{
       line-height 1.2
     }
 }
 .q-tooltip--style {
    font-size: 16px;
 }

</style>