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

  <div class="container">

    <div class="row row-gap-5 gap-4 justify-content-center pb-4 mt-1 mb-5">
      <ApartmentCard  
      class="col-12 col-sm-6 col-md-4 col-lg-3"     
      v-for="currentApartment in store.apartments"
      :apartment="currentApartment"
      :showDistance="false"
      :key="currentApartment.slug"
      ></ApartmentCard>

    </div>
  </div>

  

</template>


<style lang="scss" scoped>

</style>