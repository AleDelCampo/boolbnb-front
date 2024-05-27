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

      console.log('vista',store.apartments)

        

        
    }
}
</script>


<template>
    
  <router-link :to="{ name: 'single-apartment', params: { slug: apartment.slug } }" class="text-decoration-none">
    <div class="card border-0 shadow-sm overflow-hidden card-cover m-auto" @click="store.idMessage = apartment.id">
      <img :src="'http://127.0.0.1:8000/storage/' + apartment.image" alt="Listing Image">
      
      <span class="distance"><i class="fa-solid fa-person-walking me-2"></i>{{apartment.distance.toFixed(2)}}km</span>

      <div class="card-img-overlay d-flex flex-column justify-content-end p-3 transition-overlay">
        <p class=" mb-1 text-white font-weight">{{ apartment.address }}</p>
        
      </div>
      <div class="overlay"></div>
    </div>
    <h6 class="card-title  text-uppercase text-center pt-2">{{ apartment.title }}</h6>

    </router-link>
    

</template>

<style lang="scss" scoped>


#search-bar {
    width: auto;
    bottom: 0px;
}

.card {
  width: 230px;
  height: 350px; // Altezza ridotta
  background-color: #ffffff;
  border-radius: 10px; // Bordo arrotondato ridotto
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }


}

// .card-cover{
//   position:relative;
// }

.distance{
  display: inline-block;

  padding: 2px 16px;

  border-radius: 4px;

  background-color: white;

  position: absolute;
  top: 10px;
  left: 20px;

  font-size: 0.9em;
  font-weight: bold;
  color:#3f8d8e;
}


.card-img-overlay {
  height: 100%;
  width: 100%;

  z-index: 1;

  top: 0;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.overlay {
  position: absolute;
  bottom: 0;
  width: 100%;
  background: linear-gradient(0deg, rgba(17,43,43,0.885766806722689) 17%, rgba(17,193,173,0) 100%);

  height: 70%; // Occupa metà altezza
  // color: white;
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






</style>