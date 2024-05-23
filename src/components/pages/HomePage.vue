<script>
import axios from 'axios';
import { store } from '../../store.js';
import Jumbo from '../../components/Jumbo.vue';
import SearchBar from '../SearchBar.vue';

export default {
  data() {
    return {
      baseApiUrl: 'http://127.0.0.1:8000/api/',
      store,
      
    };
  },

  components: {
    Jumbo,
    SearchBar
  },

  methods: {
   
  }
}
</script>

<template>
 
  <Jumbo></Jumbo>

</template>


<style lang="scss" scoped>

</style>