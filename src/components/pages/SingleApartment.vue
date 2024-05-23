<script>
import axios from 'axios';
import { store } from '../../store';

export default {
  name: 'SingleApartment',

  data() {
    return {
      apartment: null,
      apartmentSlug: null,
      baseApiUrl: 'http://127.0.0.1:8000/api/'
    }
  },
  mounted() {
    // Recupera lo slug dell'appartamento dall'URL
    this.apartmentSlug = this.$route.params.slug;

    // Effettua la richiesta per ottenere i dettagli dell'appartamento
    axios.get(this.baseApiUrl + 'apartments/' + this.apartmentSlug)
      .then(res => {
        if (res.data.success) {
          // Se l'appartamento viene trovato, salvalo
          this.apartment = res.data.apartment;
        } else {
          // Se l'appartamento non viene trovato, reindirizza alla homepage
          this.$router.push({ name: 'HomePage' });
        }
      })
      .catch(error => {
        console.error('Error fetching apartment details:', error);
        // Gestisci l'errore, ad esempio mostrando un messaggio all'utente
      });
      // console.log(this.apartment);
  },

  methods: {
    catchId(id) {
        store.idMessage = ''
        store.idMessage = id
        // console.log(store.idMessage)
    }
  },
}
</script>

<template>
  <div>
    <div v-if="apartment" class="container">

      <div v-if="apartment.slug" >
        <h1 class="py-3">{{ apartment.title }}</h1>

        <div  class="position-relative overflow-hidden border border-success rounded">
          <div class="single-image">
            
            <img :src="'http://127.0.0.1:8000/storage/' + apartment.image" class="img-fluid" alt="Cover Image">
            
          
          </div>

        </div>
        <div class="col-md-6 mb-4">

          <!-- <div v-else class="border border-danger rounded p-3">
              No image
          </div>
          <div class="py-4">
              <router-link :to="{name: 'HomePage'}" class="btn btn-outline-light text-uppercase fw-bold" >
                      Back Home
              </router-link>
          </div> -->
         
       </div>
       <h4>{{ apartment.address }}</h4>
       <div class="row py-2">
          <div class="col-2">
            <p><strong>{{ apartment.n_rooms }} </strong> stanze</p>

          </div>
          <div class="col-2">
            <p><strong>{{ apartment.n_beds }}</strong> letti</p>

          </div>
          <div class="col-2">
            <p><strong>{{ apartment.n_bathrooms }}</strong> bagni</p>

          </div>
          <div class="col-6">

            <p><strong>{{ apartment.squared_meters }} </strong>metri quadrati</p>
          </div>
       </div>

       <hr>


        <div v-if="apartment.user">
          <p><strong class="text">Nome dell' host</strong>{{ apartment.user.name }}</p>
        </div>
        <p v-else><strong class="text">Nome del'host</strong> No owner information available</p>
        <hr>

        <p>{{ apartment.description }}</p>




        <div v-if="apartment.services && apartment.services.length !== 0">
          <strong class="text">Servizi extra disponibili</strong> <span v-for="service in apartment.services">{{ service.name
            }}</span>
        </div>
        <p v-else><strong class="text">Nessun servizio extra disponibile</strong></p>

      </div>
      <div class="p-3">
        <router-link :to="{name: 'contact-me'}" class="btn my_btn" @click="catchId(apartment.id)">Contatta l' host</router-link>
      </div>
      <div class="">

      </div>

    </div>

    <!-- Caricamento -->
    <div v-else class="text-center py-3 text-light">
      <div class="spinner-border">
        <span class="visually-hidden text-white">Loading...</span>
      </div>
    </div>

  </div>


</template>


<style lang="scss">
.single-image {
  object-fit: cover;
  height: 300px;
}

.border-color {
  border: 1px solid #006769c0;
}

.text {
  color: #006769c0;
}
</style>
