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
      sponsoredApartments: []
    };
  },
  components: {
    Jumbo,
    ApartmentCard
  },
  created() {
    axios.get('http://127.0.0.1:8000/api/show-sponsored', {
      params: { latitude: "41.89056", longitude: "12.49427", radius: "20000" }
    })
      .then(res => {

        for (let i = 1; i < res.data.results.length; i++) {
          if (res.data.results[i].id == res.data.results[i - 1].id) {
            res.data.results.splice(i, 1);
            i--;
          }
        }
        this.store.apartments = res.data.results;
        this.sponsoredApartments = this.store.apartments.slice(0, 4); // Ottieni i primi 4 appartamenti
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

    <div class="row row-gap-5 gap-5 justify-content-center pb-4 mt-1 mb-5 my-card position-relative">

      <div class="" id="my-title">
        Sponsorizzati
      </div>

      <ApartmentCard class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" v-for="currentApartment in sponsoredApartments"
        :apartment="currentApartment" :showDistance="false" :key="currentApartment.slug"></ApartmentCard>

    </div>

  </div>
</template>


<style lang="scss" scoped>

#my-title {
  position: absolute;

  top: -14px;
  left: 40px;
  border-radius: 20px;
  padding-top: 4px;
  padding-bottom: 4px;

  background-color: #eaf2f3;
  color: #3f8d8e;
  font-weight: bold;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  text-align: center;
  width: 10%;
}

.my-card {
  padding: 40px;

  border-radius: 20px;

  background-color: #eaf2f3;

  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

</style>