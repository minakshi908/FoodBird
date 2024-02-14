<template>
   <q-page>
    <q-form>
   <q-card>
      <h4>
        Restaurant documents
      </h4>
  </q-card>
  <div class="row justify-center ">
    <div class="q-gutter-md column" style="width:300px">
      <q-input outlined v-model="text" label="Aadhar number" />
      <q-select outlined v-model="model" :options="options" label="Type" />
      <q-input outlined v-model="text" label="Others" />
      <q-file outlined v-model="model">
        <template v-slot:prepend>
          <q-icon name="attach_file" />
        </template>
      </q-file>
      <div>
   <q-btn label="Submit" type="submit" color="primary"/>
   <q-btn label="Cancel" type="Cancel" color="primary" flat class="q-ml-sm" />
     </div>
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
         text: ref(''),
         model: ref(null),
         options: [
        'Aadhar', 'Pan', 'Food lisence', 'others'
       ]
       }
     }
   }
   </script>
