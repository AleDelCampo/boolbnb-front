<script>

import AppHeader from './components/AppHeader.vue';
import SearchBar from './components/SearchBar.vue';
import Jumbo from './components/Jumbo.vue';




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
    Jumbo
      
  },
}
</script>

<template>
  <AppHeader></AppHeader>
  <Jumbo></Jumbo>
  <SearchBar></SearchBar>
  <router-view></router-view>

</template>

<style lang="scss" scoped>

</style>