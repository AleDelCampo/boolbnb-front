<script>
import axios from 'axios';
import { store } from '../../store.js';
import ApartmentCard from '../ApartmentCard.vue';

export default {
  data() {
    return {
      baseApiUrl: 'http://127.0.0.1:8000/api/',
      store,
      romeApartments: [],
      milanApartments: [],
      cataniaApartments: [],
      florenceApartments: [],
      currentPageRome: 1,
      currentPageMilan: 1,
      currentPageCatania: 1,
      currentPageFlorence: 1,
      itemsPerPage: 4,
      loading: {
        rome: false,
        milan: false,
        catania: false,
        florence: false
      }
    };
  },
  components: {
    ApartmentCard
  },

  created() {
    this.fetchApartments('41.89056', '12.49427', 'romeApartments', 'rome'); // Roma
    this.fetchApartments('45.4654219', '9.1859243', 'milanApartments', 'milan'); // Milano
    this.fetchApartments('37.5078772', '15.0830306', 'cataniaApartments', 'catania'); // Catania
    this.fetchApartments('43.7695604', '11.2558136', 'florenceApartments', 'florence'); // Firenze
  },

  methods: {
    fetchApartments(latitude, longitude, cityKey, loaderKey) {
      this.loading[loaderKey] = true; // Mostra il loader
      axios.get(`${this.baseApiUrl}show-sponsored`, {
        params: { latitude, longitude, radius: '20000' },
      })
        .then(res => {
          // Rimuovi Duplicati
          const uniqueApartments = res.data.results.filter((apartment, index, self) =>
            index === self.findIndex((t) => t.id === apartment.id)
          );
          this[cityKey] = uniqueApartments;
          console.log(res);
        })
        .catch(error => {
          console.error(`Errore durante la ricerca degli appartamenti per ${cityKey}:`, error);
        })
        .finally(() => {
          this.loading[loaderKey] = false; // Nasconde il loader
        });
    },

    getPaginatedData(dataArray, currentPage) {
      const start = (currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return dataArray.slice(start, end);
    },

    totalPages(dataArray) {
      return Math.ceil(dataArray.length / this.itemsPerPage);
    }
  },

  computed: {
    paginatedRomeApartments() {
      return this.getPaginatedData(this.romeApartments, this.currentPageRome);
    },

    paginatedMilanApartments() {
      return this.getPaginatedData(this.milanApartments, this.currentPageMilan);
    },

    paginatedCataniaApartments() {
      return this.getPaginatedData(this.cataniaApartments, this.currentPageCatania);
    },

    paginatedFlorenceApartments() {
      return this.getPaginatedData(this.florenceApartments, this.currentPageFlorence);
    }
  }
}
</script>


<template>
      
  <div>
    <h1 class="text-center mb-5 mt-3">Appartamenti In Evidenza</h1>

    <div class="container">
      <div class="row row-gap-5 gap-5 justify-content-center pb-4 mt-1 my-card position-relative">
        <h2 class="text-center mb-4 my-title">Roma</h2>
        <div v-if="loading.rome" class="loader"></div>
        <ApartmentCard v-else class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
          v-for="currentApartment in paginatedRomeApartments" :apartment="currentApartment" :showDistance="false"
          :key="currentApartment.slug"></ApartmentCard>
      </div>
      <div class="pagination">
        <button @click="currentPageRome--" :disabled="currentPageRome === 1">Previous</button>
        <span class="pages">{{ currentPageRome }} / {{ totalPages(romeApartments) }}</span>
        <button @click="currentPageRome++" :disabled="currentPageRome === totalPages(romeApartments)">Next</button>
      </div>
    </div>

    <div class="container">
      <div class="row row-gap-5 gap-5 justify-content-center pb-4 mt-1 my-card position-relative">
        <h2 class="text-center mb-4 my-title">Milano</h2>
        <div v-if="loading.milan" class="loader"></div>
        <ApartmentCard v-else class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
          v-for="currentApartment in paginatedMilanApartments" :apartment="currentApartment" :showDistance="false"
          :key="currentApartment.slug"></ApartmentCard>
      </div>
      <div class="pagination">
        <button @click="currentPageMilan--" :disabled="currentPageMilan === 1">Previous</button>
        <span class="pages">{{ currentPageMilan }} / {{ totalPages(milanApartments) }}</span>
        <button @click="currentPageMilan++" :disabled="currentPageMilan === totalPages(milanApartments)">Next</button>
      </div>
    </div>

    <div class="container" v-if="cataniaApartments.length > 0">
      <h2 class="text-center mb-4 my-title">Catania</h2>
      <div class="row row-gap-5 gap-5 justify-content-center pb-4 mt-1 my-card position-relative">
        <div v-if="loading.catania" class="loader"></div>
        <ApartmentCard v-else class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
          v-for="currentApartment in paginatedCataniaApartments" :apartment="currentApartment" :showDistance="false"
          :key="currentApartment.slug"></ApartmentCard>
      </div>
      <div class="pagination">
        <button @click="currentPageCatania--" :disabled="currentPageCatania === 1">Previous</button>
        <span class="pages">{{ currentPageCatania }} / {{ totalPages(cataniaApartments) }}</span>
        <button @click="currentPageCatania++" :disabled="currentPageCatania === totalPages(cataniaApartments)">Next</button>
      </div>
    </div>

    <div class="container" v-if="florenceApartments.length > 0">
      <div class="row row-gap-5 gap-5 justify-content-center pb-4 mt-1 my-card position-relative">
        <h2 class="text-center mb-4 my-title">Firenze</h2>
        <div v-if="loading.florence" class="loader"></div>
        <ApartmentCard v-else class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
          v-for="currentApartment in paginatedFlorenceApartments" :apartment="currentApartment" :showDistance="false"
          :key="currentApartment.slug"></ApartmentCard>
      </div>
      <div class="pagination">
        <button @click="currentPageFlorence--" :disabled="currentPageFlorence === 1">Previous</button>
        <span class="pages">{{ currentPageFlorence }} / {{ totalPages(florenceApartments) }}</span>
        <button @click="currentPageFlorence++" :disabled="currentPageFlorence === totalPages(florenceApartments)">Next</button>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>

.my-title {
  position: absolute;
  top: -24px;
  left: 80px;
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

.pages {
  font-weight: bold;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 80px;
}

.pagination button {
  border: 1px solid #006769c0;
  background-color: white;
  font-weight: bold;
  color: #006769c0;
  padding-inline: 18px;
  border-radius: 20px;

  &:hover {
    border: 1px solid white;
    background-color: #006769c0;
    color: white;
  }
}

.pagination button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.pagination span {
  margin: 0 10px;
}

.loader {
  border: 8px solid #f3f3f3;
  border-top: 8px solid #3498db;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 2s linear infinite;
  margin: 0 auto;
  display: block;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>