<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated >
      <q-toolbar>
        

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
      if(currentPath=='/') return 'Homepage'
      else if(currentPath=="/dashboard") return 'Dashboard'
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

</style>