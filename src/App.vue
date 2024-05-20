<script>

import AppHeader from './components/AppHeader.vue';
import SearchBar from './components/SearchBar.vue';
import AppFooter from './components/AppFooter.vue';
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
    AppFooter,
    Jumbo

  },
}
</script>

<template>
  <AppHeader></AppHeader>
  <router-view></router-view>
  <AppFooter></AppFooter>
</template>

<style lang="scss" scoped></style>