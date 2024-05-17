
<script>
import axios from 'axios';
export default{
  data() {
    return {
      apartments: [],
      baseApiUrl: 'http://127.0.0.1:8000/api/',
      
    }
  },
  mounted() {
    axios.get(this.baseApiUrl + 'apartments').then(res => {
      console.log(res);
    this.apartments = res.data.results;

    })
    
    
    
  },
  methods: {
    
  },
}
</script>

<template>
  <div id="app" class="container mt-5">
    <div class="row">
      <div class="col-md-4 mb-4" v-for="apartment in apartments">
        <div class="card ">
          <img :src="apartment.image" class="card-img-top"  alt="Listing Image">
          <div class="card-body">
            <h5 class="card-title">{{ apartment.title }}</h5>
            <p class="card-text">{{ apartment.description }}</p>
            <router-link :to="{name: 'single-apartment', params:{slug:apartment.slug}}" class="btn btn-outline-secondary text-uppercase fw-bold" >
              View Details
            </router-link>
            <!-- <a href="" class="btn btn-outline-primary">View Details</a> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  height: 100%; /* Imposta l'altezza di tutte le card al 100% */
}



</style>
