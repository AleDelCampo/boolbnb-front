<script>

import { store } from '../store';


export default {
    name: 'ApartmentCard',

    props:{
        apartment: Object,
        
    },

    data() {
        return {
            store,
            
            
        }
    },
    
    components: {

    },
    methods:{
       
    },
    
    mounted(){

        

        
    }
}
</script>


<template>
    
    <div class="col-md-6 col-lg-3 mb-4 py-4" :key="apartment.slug" >
        <router-link :to="{ name: 'single-apartment', params: { slug: apartment.slug } }" class="text-decoration-none">
          <div class="card h-100 border-0 shadow-sm position-relative overflow-hidden card-cover" @click="store.idMessage = apartment.id">
                <img :src="'http://127.0.0.1:8000/storage/' + apartment.image" class="card-img-top" alt="Listing Image">
                    <span class="distance">{{apartment.distance.toFixed(2)}}km</span>
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
    

</template>

<style lang="scss" scoped>


#search-bar {
    width: auto;
    bottom: 0px;
}

.card {
  height: 250px; // Altezza ridotta
  background-color: #ffffff;
  border-radius: 30px; // Bordo arrotondato ridotto
  overflow: hidden;
}

.card-cover{
  position:relative;
}

.distance{
  display: inline-block;

  padding: 2px 4px;

  border-radius: 4px;

  background-color: #3f8d8e;

  position: absolute;
  top: 10px;
  left: 20px;

  font-size:.7em;
  color:white;
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