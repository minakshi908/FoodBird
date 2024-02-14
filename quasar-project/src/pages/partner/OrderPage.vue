<template>
  <q-page>
    <q-form>
   <q-card>
      <h3>
        Partner orders Page
      </h3>
     </q-card>
     <div class="row justify-center ">
  <div class="q-gutter-md column" style="width:400px ">
    <q-input square standout v-model="text" label="Status" />
    <q-input square standout v-model="number" label="Subtotal" />
    <q-input square standout v-model="text" label="Discount" />
    <q-input square standout v-model="text" label="Tax" />
    <q-input square standout v-model="text" label="Shipping" />
    <q-input square standout v-model="text" label="Grandtotal" />
    <q-input square standout v-model="text" label="Full name" />
    <q-input square standout v-model="text" label="Mobile" />
    <q-input square standout v-model="text" label="Email" />
    <q-input square standout v-model="text" label="City" />
  <br>
  <q-btn label="Confirm" type="Confirm" color="primary"/>
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
      text: ref('')
    }
  }
}
</script>
