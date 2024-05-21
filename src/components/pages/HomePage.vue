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
      inputRooms: '',
      inputBeds: '',
      inputBathrooms: '',
      inputSquaredMeters: '',

      serviceList:[],

      services: []


    }
  },

  components: {
    Jumbo
  },

  methods: {

    apiFilter(input){

      // console.log(input)
      axios.get('http://127.0.0.1:8000/api/filter', {
          params: { rooms: this.inputRooms, beds: this.inputBeds, bathrooms: this.inputBathrooms, sqMeters: this.inputSquaredMeters }
        })
          .then(res => {
            // Memorizza i risultati degli appartamenti nello store
            this.store.apartments = res.data.results;

            console.log(res.data)
          })
          .catch(error => {
            console.error('Errore durante la ricerca degli appartamenti:', error);
          });

    },

    toggleService(name){

      this.services.push(name)
      // console.log(this.idList)

      const URLString = this.services.map((value, index)=>`service[${index}]=${value}`).join('&');    
      
      axios.get(`http://127.0.0.1:8000/api/service_filter?${URLString}`)
          .then(res => {
            // Memorizza i risultati degli appartamenti nello store
            // this.store.apartments = res.data.results;

            console.log(res.data)
          })
          .catch(error => {
            console.error('Errore durante la ricerca degli appartamenti:', error);
          });


    }

    
  },
  mounted() {

    axios.get('http://127.0.0.1:8000/api/service', {
        })
          .then(res => {
            this.serviceList = res.data.results

            
          })
          .catch(error => {
            console.error('Errore durante la ricerca degli appartamenti:', error);
          });


  
    
  
  },
}
</script>

<template>

  <Jumbo></Jumbo>

  <ul>
    <li v-for="service in serviceList" @click="toggleService(service.name)">{{ service.name }}</li>
  </ul>


  <div class="container">
    <label for="">rooms</label>
    <input type="number" v-model="inputRooms" @input="apiFilter(inputRooms)" >
  </div>
  <div class="container">
    <label for="">beds</label>
    <input type="number" v-model="inputBeds" @input="apiFilter(inputBeds)" >
  </div>
  <div class="container">
    <label for="">bathrooms</label>
    <input type="number" v-model="inputBathrooms" @input="apiFilter(inputBathrooms)" >
  </div>
  <div class="container">
    <label for="">sq-meters</label>
    <input type="number" v-model="inputSquaredMeters" @input="apiFilter(inputSquaredMeters)" >
  </div>


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
