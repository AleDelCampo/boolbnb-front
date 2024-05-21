<script>
import { store } from '../store';
import axios from 'axios';

export default {
  name: 'SearchBar',
  data() {
    return {
      store,
      listItem: [], // Lista per i suggerimenti di autocompletamento
      showDropdown: false, // Controlla la visibilità del menu a cascata della ricerca
      radius:0, //segna i chilometri selezionati dall'utenete per la ricerca
    };
  },
  methods: {
    // Metodo per chiamare l'API di TomTom e ottenere suggerimenti di indirizzi basati sull'input dell'utente
    apiCall() {
      // Reset della lista di suggerimenti
      this.listItem = [];
      // Componi l'URL per l'API di TomTom utilizzando la chiave e l'input dell'utente
      axios.get('https://api.tomtom.com/search/2/geocode/' + this.store.inputSearch + '.json?key=N4I4VUaeK36jrRC3vR5FfWqJS6fP6oTY&limit=3')
        .then(res => {
          // Memorizza i risultati dell'API nello store
          this.store.addresses = res.data.results;
          // Aggiungi ogni indirizzo ottenuto dalla risposta API alla lista di suggerimenti
          this.store.addresses.forEach(element => {
            this.listItem.push(element.address.freeformAddress);
          });
          // Mostra il dmenu a cascata se ci sono suggerimenti nella lista
          this.showDropdown = this.listItem.length > 0;
        })
        .catch(error => {
          console.error('Errore durante il geocoding:', error);
        });
    },
    // Metodo per scegliere un indirizzo dai suggerimenti e cercare appartamenti vicini
    chooseAddress(item) {
      // Imposta l'input di ricerca con l'elemento selezionato
      this.store.inputSearch = item;
      // Nasconde il menù
      this.showDropdown = false;
      // Trova l'indirizzo selezionato nella lista degli indirizzi memorizzati
      const selectedAddress = this.store.addresses.find(address => {
        // Verifica se l'indirizzo corrente ha lo stesso freeformAddress di item
        return address.address.freeformAddress === item;
      });
      // Se è stato trovato un indirizzo corrispondente in addresses
      if (selectedAddress) {
        // Ottieni latitudine e longitudine dell'indirizzo selezionato
        this.latitude = selectedAddress.position.lat;
        this.longitude = selectedAddress.position.lon;
        // Esegui una richiesta GET alla tua API per cercare appartamenti vicini
        axios.get('http://127.0.0.1:8000/api/search', {
          params: { latitude: this.latitude, longitude: this.longitude, radius:this.radius}
        })
          .then(res => {
            // Memorizza i risultati degli appartamenti nello store
            this.store.apartments = res.data.results;
          })
          .catch(error => {
            console.error('Errore durante la ricerca degli appartamenti:', error);
          });
      }
    }
  }
};
</script>

<template>
  <!-- Visualizzazione dello store stampato sulla pagina per debugging
  <div>
    <pre>{{ store }}</pre> Mostra lo stato dello store in formato JSON 
     </div> -->

  <div class="container d-flex justify-content-center">
    <nav class="navbar search-bar">
      <div class="container-fluid">
        <!-- Sezione per l'input di ricerca con menu a cascata -->
        <div class="position-relative">
          <!-- Campo di input per la ricerca di indirizzi -->
          <input class="form-control ms-2 bord" type="search" v-model="store.inputSearch" placeholder="Inserisci un indirizzo..."
            @input="apiCall" @focus="showDropdown = true" @blur="showDropdown = false">

          <input type="range" id="radius" min="0" max="30" v-model="radius">{{ radius }}km

          <!-- test -->
          <router-link :to="{ name: 'SearchPage' }" class="btn btn-primary">
            Cerca
          </router-link>

          <!-- Lista di suggerimenti mostrata come un menu a cascata -->
          <ul class="list-group position-absolute w-100" v-show="showDropdown">
            <!-- Itera su ogni elemento in listItem per creare un elemento della lista -->
            <li class="list-group-item list-group-item-action" v-for="item in listItem" :key="item"
              @mousedown="chooseAddress(item)">
              {{ item }} <!-- Visualizza il suggerimento di indirizzo -->
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<style>
/* Stile per posizionare gli elementi in modo assoluto rispetto al loro contenitore */
.position-relative {
  z-index: 1000;
}

.bord {
  border-color: #006769c0;
}

/* Stile per gli elementi della lista di suggerimenti, cambiando il cursore su pointer */
.list-group-item {
  cursor: pointer;
}

.search-bar {
  border-radius: 12px;
  width: 50%;
  position: relative;
  bottom: 28px;
}

.navbar .form-control:focus {
  background-color: #ffffff;
  color: black;
  border-color: #006769c0;
  box-shadow: 0 0 6px #006769c0;
}

input[type="search"]::-webkit-search-cancel-button {
  -webkit-appearance: none;
  height: 20px;
  width: 20px;
  background: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23006769c0"%3E%3Cpath d="M0 0h24v24H0z" fill="none"/%3E%3Cpath d="M12 10.585l4.95-4.95 1.415 1.414L13.414 12l4.95 4.95-1.415 1.414L12 13.414l-4.95 4.95-1.414-1.414L10.585 12l-4.95-4.95 1.414-1.414L12 10.585z"/%3E%3C/svg%3E') no-repeat center;
  cursor: pointer;
}
</style>
