
<script>
import axios from 'axios';
import {store} from '../../store.js';

export default{
  data() {
    return {
      // apartments: [],
      baseApiUrl: 'http://127.0.0.1:8000/api/',
      store,
      
    }
  },
  mounted() {

    // da eliminare
    
    // axios.get(this.baseApiUrl + 'apartments').then(res => {
    //   store.apartments = res.data.results;
    // // store.appartmentsAddress = 

    //   store.apartments.forEach(element => {

    //   const item = element.address;

    //   store.apartmentsAddress.push(item)

      
    // });

    // })
    
  },
  methods: {
    
  },
}
</script>

<template>
  <div id="app" class="container mt-5">
    <div class="row">
      <div class="col-md-4 mb-4" v-for="apartment in store.apartments">
        <div class="card ">
          <img :src="'http://127.0.0.1:8000/storage/' + apartment.image" class="card-img-top"  alt="Listing Image">
          <div class="card-body">
            <h5 class="card-title">{{ apartment.title }}</h5>
            <p class="card-text">{{ apartment.description }}</p>
            <router-link :to="{name: 'single-apartment', params:{slug:apartment.slug}}" class="btn btn-outline-light text-uppercase fw-bold" >
              Vedi Dettagli
            </router-link>
            <!-- <a href="" class="btn btn-outline-primary">View Details</a> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.card {
  height: 100%;
  background-color: #006769c0;
}

</style>
