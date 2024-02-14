<template>
  <q-page class="flex flex-center">
Customer Home page

      <div class="row scroll">
        <div class="row no-wrap">
          <q-card class="q-ma-sm bg-red-1" v-for="i in 10" :key="i" style="min-width:360px; height:200px">
            {{ i }}
          </q-card>

        </div>
      </div>
      <div class="row scroll">
      <div class="row no-wrap">
        <q-card class="q-ma-sm bg-teal-1" v-for="i in 10" :key="i" style="min-width:360px; height:200px">
          {{ i }}

        </q-card>

      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomePage'
})
</script>
