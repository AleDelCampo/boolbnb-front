<script>

import AppHeader from './components/AppHeader.vue';
import SearchBar from './components/SearchBar.vue';
import AppFooter from './components/AppFooter.vue';




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
    AppFooter,
      
  },
}
</script>

<template>
  <AppHeader></AppHeader>
  <SearchBar></SearchBar>
  <router-view></router-view>
  <AppFooter></AppFooter>
</template>

<style lang="scss" scoped>

</style>