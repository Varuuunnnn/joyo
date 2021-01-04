<template>
  <div class="q-pa-md">
   <q-table
      :data="data"
      :columns="columns"
      :rows-per-page-options="[]"
      row-key="name"
      wrap-cells
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="title" :props="props">
            {{ props.row.title }}
            <q-popup-edit v-if="userDetails.type=='admin'" v-model="props.row.title" >
              <q-input v-model="props.row.title" dense autofocus counter />
            </q-popup-edit>
          </q-td>

          <q-td key="description" :props="props">
            {{ props.row.description }}
            <q-popup-edit
              buttons
              v-if="userDetails.type=='admin'"
              v-model="props.description"
            >
              <q-input
                type="textarea"
                v-model="props.row.description"
                autofocus
                counter
                @keyup.enter.stop
              />
            </q-popup-edit>
          </q-td>

          <q-td key="members" :props="props">
            {{ props.row.members }}
            <q-popup-edit v-if="userDetails.type=='admin'||userDetails.type=='projectManager'" v-model.number="props.row.members">
              <q-input type="text" v-model.number="props.row.members" dense autofocus />
            </q-popup-edit>
          </q-td>

          <q-td key="billable" :props="props">
            <div class="text-pre-wrap">{{ props.row.billable }}</div>
            <q-popup-edit  v-if="userDetails.type=='admin'" v-model.number="props.row.billable">
              <q-input type="text" v-model.number="props.row.billable" dense autofocus />
            </q-popup-edit>
          </q-td>
          <q-btn
           v-if="userDetails.type=='admin'"
           flat
           icon="delete" 
           color="primary"
          />
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script>
import { mapState} from 'vuex'
const columns = [
  { name: 'title', style: 'min-width: 160px; width: 160px', align: 'left', label: 'Titles', field: 'title' },
  { name: 'description', style: 'min-width: 200px; width: 200px', align: 'left', label: 'Description', field: 'description' },
  { name: 'members', align: 'center', label: 'Members', field: 'members' },
  { name: 'billable', label: 'Billable', field: 'billable' }
]

const data = [
  {
    title: 'Hotel management system',
    description: `It's a project to perform hotel management`,
    members: 'varun, jack, jill',
    billable: false
  },
  {
    title: 'carli',
    description: `It's a project which gives you post that you need`,
    members: 'abhishek, yash, gourav',
    billable: true
  },
  {
    title: 'library management',
    description: `a simple library management project which helps to maintain library records`,
    members: 'deepak, anthony, yash',
    billable: false
  },
  {
    title: 'chat app',
    description: `a realtime chatting application which provides various features`,
    members: 'palak, riya, meera',
    billable: true
  },
]

export default {
  computed:{
    ...mapState('store',['userDetails'])
  },
  data () {
      
    return {
      data,
      columns
    }
  }
}
</script>
<style lang="stylus" scoped>
.q-btn {
    padding: 19px 16px;
    min-height: 2.572em;
    border-radius: inherit;
    width: 50%;
    height: 50%;
}
</style>