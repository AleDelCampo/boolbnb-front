<script>

import AppHeader from './components/AppHeader.vue';
import SearchBar from './components/SearchBar.vue';




export default {
  data() {
    return {

    }
  },
  mounted() {

  },

  components: {
    AppHeader,
    SearchBar,
      
  },
}
</script>

<template>
  <AppHeader></AppHeader>
  <SearchBar></SearchBar>
  <router-view></router-view>

</template>

<style scoped>

</style>