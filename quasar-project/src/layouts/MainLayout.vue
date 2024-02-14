<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-transparent">
      <div class="q-ma-md">
        <q-input outlined icon="search" :placeholder="placeholderText"></q-input>
      </div>

    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>
          Essential Links
        </q-item-label>

        <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>



export default {
  name: 'MainLayout',
  data() {
    return {
      placeholderTexts: [
        'Search Food/Restaurant',
        'Search Icecream',
        'Search Biryani',
        'Search Dessert',
        'Search Pizza'
      ],
      currentPlaceHolderIndex: 0
    }
  },
  computed: {
    placeholderText() {
      return this.placeholderTexts[this.currentPlaceHolderIndex]
    }
  },
    methods: {
    changePlaceholderIndex() {
      if(this.currentPlaceHolderIndex >= (this.placeholderTexts.length -1)){
        this.currentPlaceHolderIndex = 0
      }else{
        this.currentPlaceHolderIndex++
      }
    }
  },
  created(){
    setInterval(this.changePlaceholderIndex, 1500)
  }
}

</script>
