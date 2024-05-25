<script>
import axios from 'axios';
import { store } from '../../store.js';
import Jumbo from '../../components/Jumbo.vue';
import ApartmentCard from '../ApartmentCard.vue';

export default {
  data() {
    return {
      baseApiUrl: 'http://127.0.0.1:8000/api/',
      store,

      
    };
  },

  components: {
    Jumbo,
    ApartmentCard
  },

  methods: {
   
  },

  created(){

    // axios.get(this.baseApiUrl + 'apartments').then(res => {
    //   store.apartments = res.data.results;

    //   console.log(res.data.results)


    // });

    axios.get('http://127.0.0.1:8000/api/show-sponsored', {
          params: { latitude: "41.89056", longitude: "12.49427", radius:"20000"}
        })
          .then(res => {
            // Memorizza i risultati degli appartamenti nello store
            this.store.apartments = res.data.results;
            console.log(res);
          })
          .catch(error => {
            console.error('Errore durante la ricerca degli appartamenti:', error);
          });

    
  }
  
}
</script>

<template>
 
  <Jumbo></Jumbo>

  <div class="row">
    <ApartmentCard
    v-for="currentApartment in store.apartments"
    :apartment="currentApartment"
    :key="currentApartment.slug"
    ></ApartmentCard>

  </div>

  

</template>


<style lang="scss" scoped>

</style>