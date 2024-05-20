
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
    
     axios.get(this.baseApiUrl + 'apartments').then(res => {
       store.apartments = res.data.results;
    store.apartmentsAddress = 

       store.apartments.forEach(element => {

      const item = element.address;

      store.apartmentsAddress.push(item)

      
    });

   })
    
  },
  methods: {
    // getRandomPrice() {
    //   return Math.floor(Math.random() * (150 - 30 + 1)) + 30;
    // }
    
  },
}
</script>

<template>
  <div id="app" class="container mt-5">
    <div class="row">
      <div class="col-md-6 col-lg-3 mb-4 py-4" v-for="apartment in store.apartments" :key="apartment.slug">
        <router-link :to="{ name: 'single-apartment', params: { slug: apartment.slug } }" class="text-decoration-none">
          <div class="card h-100 border-0 shadow-sm position-relative overflow-hidden">
            <img :src="'http://127.0.0.1:8000/storage/' + apartment.image" class="card-img-top" alt="Listing Image">
            <div class="card-img-overlay d-flex flex-column justify-content-end p-3 transition-overlay">
              <div class="apartment-details p-2 mt-2">
                <p class="card-text  mb-1 text-white font-weight">{{ apartment.address }}</p>
              </div>
            </div>
            <div class="overlay"></div>
          </div>
          <h6 class="card-title  text-uppercase text-center pt-2">{{ apartment.title }}</h6>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  height: 250px; // Altezza ridotta
  background-color: #ffffff;
  border-radius: 30px; // Bordo arrotondato ridotto
  overflow: hidden;
}

.card-img-top {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.card-img-overlay {
  height: 100%;
  width: 100%;
  top: 0;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.overlay {
  position: absolute;
  bottom: 0;
  width: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.261), rgba(67, 64, 64, 0));

  height: 50%; // Occupa metà altezza
  color: #ffffff;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.card-title {
  font-weight: lighter;
  color:#006769c0 ;
  text-shadow: 1px 1px 2px rgba(39, 37, 37, 0.628);
}

.apartment-details {
  display: none;
}



.card:hover .card-img-top {
  transform: scale(1.1);
}

.card:hover .card-img-overlay, .card:hover .overlay {
  opacity: 1;
}



.card:hover .apartment-details {
  display: block;
}




@media (max-width: 768px) {
  .card {
    height: 200px; // Altezza ridotta per schermi piccoli
  }
  .card-img-top {
    height: 100%;
  }
}
</style>
