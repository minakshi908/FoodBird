<template>
<q-page class="q-pa-md">
  <div class="row">
    <div class="text-h5">Restaurant List</div>
    <div><q-btn color="green" unelevated rounded label="Add" to="./restaurant/add"/></div>
  </div>
  <q-list >
    <q-item clickable v-for="id in 10" :key="id" @click="$router.push('./restaurant/'+id)">Restaurant {{ id }}</q-item>

  </q-list>

</q-page>
</template>
<script>
</script>
