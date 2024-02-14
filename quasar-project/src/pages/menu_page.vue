<template>
  <q-page>
    <q-form>
      <q-card>
        <h5>
        Menu item
        </h5>
      </q-card>
      <div>
      <div class="row justify-center ">
     <div class="q-gutter-md column" style="width:400px">
    
     <q-checkbox v-model="val" label="Veg" />
    <q-checkbox v-model="val" label="Non-Veg" />

     <q-input v-model="text" label="Product name" />
    <q-input v-model="text" label="Price" />
    <q-input  v-model="text" label="Rating" />
    <q-input  v-model="text" label="Description" />
    <q-input  v-model="text" label="image" />

<br>
<q-btn label="Submit" type="submit" color="primary"/>
</div>
</div>
</div>
    </q-form>
  </q-page>
</template>
<script>
export default{


}


</script>


