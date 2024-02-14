<template>
  <q-page>
    <q-form>
      <div class="q-pa-md">
    <div class="q-gutter-md" style="max-width: 300px">
      <q-input v-model="text" label="Standard" />

      <q-input filled v-model="text" label="Filled" />

      <q-input outlined v-model="text" label="Outlined" />

    </q-form>
  </q-page>
</template>
