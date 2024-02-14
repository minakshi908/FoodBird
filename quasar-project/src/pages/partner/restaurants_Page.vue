<template>
  <q-page>
    <q-form>
    <q-card>
      <h3>
        Restaurants details
      </h3>
    </q-card>

     <div>

      <div class="row justify-center ">
    <div class="q-gutter-md column" style="width:400px">
    <q-select class="q-ma-sm" label="Title" :options="['Mrs','Ms','Miss','Mrs']"></q-select>
    <q-input v-model="text" label="First name" />
    <q-input v-model="text" label="Last name" />
    <q-input  v-model="text" label="Location" />
    <q-input  v-model="text" label="Contact number" />
    <q-input  v-model="text" label="Email" />
    <q-input  v-model="text" label="City" />
    <q-input  v-model="text" label="Pincode" />
    <div class="q-pa-md">
    <q-toggle v-model="value" label="Veg"/>
    </div>
    <br>
   <q-btn label="Submit" type="submit" color="primary"/>
   </div>
    </div>
   </div>


</q-form>


  </q-page>
</template>

<script>
export default {

}



</script>



