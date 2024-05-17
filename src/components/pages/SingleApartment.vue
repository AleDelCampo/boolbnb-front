<script>
import axios from 'axios';

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
  }
}
</script>

<template>
  <div>
    <div v-if="apartment" class="container py-4">
      <div class="row">
        <!-- Immagine -->
        <div class="col-md-6 mb-4">
            <div v-if="apartment.image" class="position-relative overflow-hidden border border-success rounded">
                <div class="single-image">
                    <img :src="apartment.image" class="img-fluid" alt="Cover Image">
                    
                <div class="mask "></div>
                
            </div>
            
        </div>     

            <div v-else class="border border-danger rounded p-3">
                No image
            </div>
            <div class="py-4">
                <router-link :to="{name: 'HomePage'}" class="btn btn-outline-light text-uppercase fw-bold" >
                        Back Home
                </router-link>
            </div>
           
        </div>

        <!-- Dettagli appartamento -->
        <div class="col-md-6 mb-4">
          <div v-if="apartment.slug" class="p-3 border-start">
            <h2>{{ apartment.title }}</h2>

            <div v-if="apartment.user">
                <p><strong class="text-warning">Owner: </strong>{{ apartment.user.name }}</p>
            </div>
            <p v-else><strong class="text-warning">Owner:</strong> No owner information available</p>
            <p>{{ apartment.description }}</p>

            <h3>Details</h3>
            <p><strong class="text-warning">Num. of Rooms: </strong>{{ apartment.n_rooms }}</p>
            <p><strong class="text-warning">Num. of Beds: </strong>{{ apartment.n_beds }}</p>
            <p><strong class="text-warning">Num. of Bathrooms: </strong>{{ apartment.n_bathrooms }}</p>
            <p><strong class="text-warning">SQM Apartment: </strong>{{ apartment.squared_meters }}</p>

            <p><strong class="text-warning">Address: </strong>{{ apartment.address }}</p>

            
            <div v-if="apartment.services && apartment.services.length !== 0" >
                <strong class="text-warning">Services</strong><span v-for="service in apartment.services" >{{ service.name }}</span>
            </div>
            <p v-else><strong class="text-warning">Services:</strong> No extra services</p>

          </div>
        </div>
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
.single-image{
    object-fit:cover; 
    height: 300px;

}


</style>
