<template>
  <q-list>
    <q-item clickable v-for="id in 10" :key="id">
    Category {{ id }}
    </q-item>
  </q-list>
</template>
