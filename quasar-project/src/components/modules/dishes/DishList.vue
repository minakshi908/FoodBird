<template>
  <q-list>
    <q-item clickable v-for="id in 10" :key="id">
    Dish {{ id }}
    </q-item>
  </q-list>
</template>
