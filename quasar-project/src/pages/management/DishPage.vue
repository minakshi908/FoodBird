<template>
  <q-page>
    <q-form>
   <q-card>
      <h3>
           Management Dish Page
      </h3>
     </q-card>
     <div class="row justify-center ">
  <div class="q-gutter-md column" style="width:400px ">
    <q-input rounded outlined v-model="text" label="Menu name" />
    <q-input rounded outlined v-model="text" label="Type" />
    <q-input rounded outlined v-model="text" label="price" />
    <q-input rounded outlined v-model="text" label="Rating" />
    <q-input rounded outlined v-model="text" label="Description" />
    <q-input rounded outlined v-model="text" label="Image" />
    <q-btn label="Submit" type="submit" color="primary" /></div>

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
