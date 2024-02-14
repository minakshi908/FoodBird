<template>
  <q-page>
    <q-form>
   <q-card>
      <h4>
        Management category Page
      </h4>
     </q-card>
     <div class="row justify-center ">
  <div class="q-gutter-md column" style="width:400px ">
  <q-input outlined v-model="text" label="Category name" />
  <q-input outlined v-model="text" label="description" />
  <q-input outlined v-model="text" label="status" />
  <q-input outlined v-model="text" label="price" />
  <br>
  <q-btn label="Submit" type="submit" color="primary"/>
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
