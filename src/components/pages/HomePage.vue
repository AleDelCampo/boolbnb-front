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
      sponsoredApartments: [],
      currentPage: 1,
      itemsPerPage: 4
    };
  },
  components: {
    Jumbo,
    ApartmentCard
  },
  computed: {
    paginatedApartments() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.sponsoredApartments.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.sponsoredApartments.length / this.itemsPerPage);
    }
  },
  methods: {
    fetchSponsoredApartments() {
      axios.get('http://127.0.0.1:8000/api/all-sponsorship', {
      })
        .then(res => {
          // Elimina duplicati
          const uniqueResults = res.data.results.filter((item, index, self) =>
            index === self.findIndex(t => t.id === item.id)
          );

          this.store.apartments = uniqueResults;
          this.sponsoredApartments = this.store.apartments;
        })
        .catch(error => {
          console.error('Errore durante la ricerca degli appartamenti:', error);
        });
    },
    goToPage(page) {
      if (page > 0 && page <= this.totalPages) {
        this.currentPage = page;
      }
    }
  },
  created() {
    this.fetchSponsoredApartments();
  }
}
</script>

<template>

  <Jumbo></Jumbo>

  <div class="container">
    <div class="row row-gap-5 gap-5 justify-content-center pb-4 mt-1 mb-5 my-card position-relative">
      <div id="my-title">
        Sponsorizzati
      </div>

      <ApartmentCard class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" v-for="currentApartment in paginatedApartments"
        :apartment="currentApartment" :showDistance="false" :key="currentApartment.slug"></ApartmentCard>

      <div class="pagination">
        <button @click="goToPage(currentPage - 1)" :disabled="currentPage === 1">Previous</button>
        <span class="fw-bolder">{{ currentPage }} / {{ totalPages }}</span>
        <button @click="goToPage(currentPage + 1)" :disabled="currentPage === totalPages">Next</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#my-title {
  position: absolute;
  top: -14px;
  left: 40px;
  border-radius: 20px;
  padding: 4px 10px;
  background-color: #eaf2f3;
  color: #3f8d8e;
  font-weight: bold;
  font-size: 1.2em;
  border: 1px solid #3f8d8e;
  text-align: center;
  width: auto;
}

.my-card {
  padding: 40px;
  border-radius: 20px;
  background-color: #eaf2f3;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
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
</style>