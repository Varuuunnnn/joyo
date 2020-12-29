<template>
  <div class="q-pa-md" >
    
      <div class="text-h2 text-center">
         {{ userDetails.name }}
         <q-badge>{{ userDetails.type }}</q-badge>
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
          <q-tab name="add-project" label="Add project" v-if="userDetails.type=='admin'" />
          <q-tab name="project-list" label="Projects list" />
          
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="add-project" v-if="userDetails.type=='admin'">
            <add-project :tab="tab" />
            
          </q-tab-panel>

          <q-tab-panel name="project-list">
            <project-list :tab="tab" />
           
          </q-tab-panel>

          
        </q-tab-panels>
      </q-card>

  
    </div>
  
</template>

<script>

import { mapState} from 'vuex'
export default {
  computed:{
    ...mapState('store',['userDetails'])
  },
  data () {
    return {
      tab: 'project-list'
    }
  },
  components:{
    'add-project':require('components/AddProjects.vue').default,
    'project-list':require('components/ShowProjectsList.vue').default
    
  }

}
</script>
<style lang="stylus" scoped>
.full-width {
    width: 60% !important;
    margin-left: 290px !important /* rtl:ignore */;
    margin-right: 250px !important /* rtl:ignore */;
    margin-top: 50px !important /* rtl:ignore */;
    margin-bottom 400px !important /* rtl:ignore */;
}
</style>