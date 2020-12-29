<template>
  <div class="q-gutter-x-lg" style="full-width">
      <q-separator />
      <div class="text-h2 text-center">
         {{ userDetails.name }}
         <q-badge>{{ userDetails.type }}</q-badge>
      </div>
      
      
      <q-card>
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
