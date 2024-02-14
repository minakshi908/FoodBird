
<template>
  <q-page>
   <q-form>

    <q-card>
      <h4>
        personal detail
      </h4>
    </q-card>

    <div class="row justify-center ">
    <div class="q-gutter-md column" style="width:400px">
    <q-select outlined v-model="model" :options="options" label="Title" />
      <q-input v-model="text" label="First name " />
      <q-input v-model="text" label="Last name " />
      <q-input v-model="text" label="Contacts number " />
      <q-input v-model="text" label="Email-id " />
      <q-input  v-model="text" label="Date-Of-Birth" >
      <template v-slot:append>
        <q-btn flat icon="schedule">
          <q-popup-proxy>
            <q-date></q-date>
          </q-popup-proxy>
        </q-btn>
      </template>
      </q-input>
      <q-input v-model="text" label="Anniversary" />
      <div class="row">
        <q-btn label="Submit" type="submit" color="primary"/>
  <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
</div>
</div>


    <div>  </div>

   </q-form>










  </q-page>

</template>
<script>
export default {

}



</script>
