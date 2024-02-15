<template>
<q-page class="q-pa-md bg-grey-2">
  <div class="text-h3">Restaurant Name</div>
  <q-card class="row q-my-md bg-teal-2" style="height:20vh">
    <RestaurantInfoCard />
  </q-card>
  <div class="row bg-white-q-my-md" style="height:70vh">
    Restaurant Documents
  </div>
  <div class="row bg-white q-my-md" style="height:70vh">
<div class="col q-pa-md">
  <div class="row">
    <div class="text-h5">Categories</div>
    <q-btn uneleveted color="green" unelevated label="Add"/>
  </div>
<CategoryList />
</div>
<div class="col q-pa-md">
  <div class="row">
    <div class="text-h5">Dishes </div>
    <q-btn uneleveted color="green" unelevated label="Add"/>
  </div>
  <DishList/>
</div>

</div>


</q-page>
</template>
<script>
import RestaurantInfoCard from 'components/modules/restaurants/RestaurantInfoCard.vue'
import CategoryList from 'components/modules/categories/CategoryList.vue'
import DishList from 'components/modules/dishes/DishList.vue'
export default {
  components: {RestaurantInfoCard, CategoryList, DishList}
}
</script>
