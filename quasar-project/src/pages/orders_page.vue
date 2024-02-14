<template>
   <q-page>
      <q-form>
        <q-card>
          <h4>
            orders
          </h4>
         </q-card>
      <div class="q-pa-md" style="max-width: 300px">
      <div class="q-gutter-md">

      <q-input v-model="tel" filled type="tel" hint="Telephone number" />
      <q-input  v-model="decimal" label="Subtotal" />
      <q-input  v-model="decimal" label="Discount" />
      <q-input  v-model="decimal" label="tax" />
      <q-input  v-model="decimal" label="total" />
      <q-input  v-model="decimal" label="discount" />
      <q-input  v-model="decimal" label="grandtotal" />
      <q-input  v-model="text" label="Full Name" />
      <q-input v-model="email" filled type="email" hint="Email" />
      <q-input v-model="location" filled type="location" hint="City" />
      <q-input v-model="time" filled type="time" hint="Native time" />
      <q-input v-model="date" filled type="date" hint="Native date" />
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
      id: ref(null),


    }
  }
}
</script>
