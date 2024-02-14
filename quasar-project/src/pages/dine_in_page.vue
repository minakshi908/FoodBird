<template>
<q-page>
  <q-form>
  <q-card>
    <h3> Booking</h3>
  </q-card>

      <div class="row justify-center ">
    <div class="q-gutter-md column" style="width:400px">
    <q-input  v-model="text" label="First Name"  />
    <q-input  v-model="text" label="Last Name" />
    <q-input v-model="tel"  type="tel" hint="Telephone number" />
    <q-input v-model="email"  type="email" hint="Email" />
    <q-input v-model="City"  type="City" hint="City" />
    <q-input v-model="Province"  type="Province" hint="Province" />
    <q-input v-model="date" type="date" hint="Native date" />
    <q-toggle v-model="accept" label="Veg" />

    <q-btn label="Confirm" type="Confirm" color="primary"/>
    <q-btn label="Cancel" type="Cancel" color="red-11" flat class="q-ml-sm" />
   </div>
   </div>







   </q-form>
</q-page>

</template>
<script>
import { ref } from 'vue'

export default {
  setup () {
    return {

           model: ref(10),
           text: ref(''),
           group: ref(['op1']),

           options: [
  {
           label: 'Veg',
           value: 'Veg'
  },
  {
           label: 'Non Veg',
           value: 'Non Veg'
  },

   ]
  }
 }
}
</script>
