<script>
import axios from 'axios';
import { store } from '../../store.js';
import Jumbo from '../../components/Jumbo.vue';
export default {
  data() {
    return {
      // apartments: [],
      baseApiUrl: 'http://127.0.0.1:8000/api/',
      store,

    }
  },

  components: {
    Jumbo
  },

  mounted() {

    // da eliminare

    // axios.get(this.baseApiUrl + 'apartments').then(res => {
    //   store.apartments = res.data.results;
    // // store.appartmentsAddress = 

      //  store.apartments.forEach(element => {

      // const item = element.address;

      // store.apartmentsAddress.push(item)


    // });

    // })

  },
  methods: {

  },
}
</script>

<template>

  <Jumbo></Jumbo>

</template>

<style lang="scss" scoped>

</style>
