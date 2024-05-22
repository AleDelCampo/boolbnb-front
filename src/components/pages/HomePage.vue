<script>
import axios from 'axios';
import { store } from '../../store.js';
import Jumbo from '../../components/Jumbo.vue';

export default {
  data() {
    return {
      baseApiUrl: 'http://127.0.0.1:8000/api/',
      store,
      inputRooms: '',
      inputBeds: '',
      inputBathrooms: '',
      inputSquaredMeters: '',
      serviceList: [],
      apartments: [],
      services: []
    };
  },

  components: {
    Jumbo
  },

  methods: {
    apiFilter() {
      // Se nessun filtro è selezionato, svuota la lista degli appartamenti
      if (
        !this.inputRooms &&
        !this.inputBeds &&
        !this.inputBathrooms &&
        !this.inputSquaredMeters &&
        this.services.length === 0
      ) {
        this.store.apartments = [];
        return;
      }

      axios.get('http://127.0.0.1:8000/api/filter', {
        params: {
          rooms: this.inputRooms,
          beds: this.inputBeds,
          bathrooms: this.inputBathrooms,
          sqMeters: this.inputSquaredMeters,
          services: this.services.length > 0 ? this.services : null // Passa i servizi selezionati, o null se nessun servizio è selezionato
        }
      })
      .then(res => {
        this.store.apartments = res.data.results;
        console.log(res.data);
      })
      .catch(error => {
        console.error('Errore durante la ricerca degli appartamenti:', error);
      });
    },

    toggleService(id) {
      const index = this.services.indexOf(id);
      if (index === -1) {
        // Aggiungi il servizio se non è già presente
        this.services.push(id);
      } else {
        // Rimuovi il servizio se è già presente
        this.services.splice(index, 1);
      }
      // Ora eseguiamo il filtro con i servizi selezionati
      this.apiFilter();
    },

    filterApartments() {
      this.apiFilter();
    }
  },

  mounted() {
    axios.get('http://127.0.0.1:8000/api/service', {})
      .then(res => {
        this.serviceList = res.data.results;
      })
      .catch(error => {
        console.error('Errore durante la ricerca degli appartamenti:', error);
      });
  }
};
</script>

<template>
  <Jumbo></Jumbo>
</template>


<style lang="scss" scoped>

</style>