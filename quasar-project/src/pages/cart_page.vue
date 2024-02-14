<template>
  <q-page>
    <q-form>
      <q-card>
        <h5>Cart items</h5>
      </q-card>
      <div class="row justify-center ">
     <div class="q-gutter-md column" style="width:400px">
      <q-input rounded standout v-model="text" label="Items Name" />
      <q-input rounded standout v-model="text" label="Quantity" />
      <q-input rounded standout v-model="text" label="Price" />
      <q-input rounded standout v-model="text" label="Date" />
      <q-input rounded standout v-model="text" label="Summary" />
     
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

