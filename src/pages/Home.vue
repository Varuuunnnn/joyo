<template>
  <q-page class="flex q-pa-md">
    <q-card class="full-width">
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="login" label="Login" />
          <q-tab name="register" label="Register" />
         
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated> <!--to bind data:tab with tabname -- line 40-->
          
          <q-tab-panel name="login">
             <login-register :tab="tab" />
          </q-tab-panel>
            
          <q-tab-panel name="register">
             <login-register :tab="tab" />   <!--here we are passing tab name to tab  so that it can reach to LoginRegister.vue's props-->   
          </q-tab-panel>
        
        </q-tab-panels>

      </q-card>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      tab: 'login' //tab's initial position
    }
  },
  components:{
    'login-register':require('components/LoginRegister.vue').default
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