<script>
import axios from 'axios';
import { store } from '../store.js';

export default {
    name: 'FilterSearchPage',

    data() {
        return {
        // apartments: [],
        baseApiUrl: 'http://127.0.0.1:8000/api/',
        store,
        inputRooms: '',
        inputBeds: '',
        inputBathrooms: '',
        inputSquaredMeters: '',

        }
    },

    mounted() {

    

    },
    methods: {

        apiFilter(input){

            // console.log(input)
            axios.get('http://127.0.0.1:8000/api/filter', {
                params: { rooms: this.inputRooms, beds: this.inputBeds, bathrooms: this.inputBathrooms, sqMeters: this.inputSquaredMeters }
            })
            .then(res => {
            // Memorizza i risultati degli appartamenti nello store
            this.store.apartments = res.data.result;    

            console.log(res.data.result)
            })
            .catch(error => {
            console.error('Errore durante la ricerca degli appartamenti:', error);
            });

        }

    },
}
</script>

<template>

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

</template>

<style lang="scss" scoped>

</style>
