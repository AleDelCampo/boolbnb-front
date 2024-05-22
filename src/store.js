import { reactive } from 'vue';

// Definire uno store reattivo per mantenere lo stato dell'applicazione
export const store = reactive({
  inputSearch: '', // Input dell'utente per la ricerca
  addresses: [], // Indirizzi suggeriti dall'API di TomTom
  apartmentsAddress: [], // Appartamenti trovati vicino all'indirizzo
  apartments: [], // Lista di appartamenti trovati tramite la ricerca

  idMessage: '',
});
