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

        ServicesFilter:[
            'wi-fi',
            'piscina',
            'portineria',
            'posto auto',
            'sauna',
            'vista mare'
        ],

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

        <div id="filter-wrapper">

            <div id="apartment-filter">
                <div class="d-flex flex-column">
                    <label for="">Stanze</label>
                    <input type="number" class="info-input" v-model="inputRooms" @input="apiFilter(inputRooms)" >
                </div>
            
                <div class="d-flex flex-column">
                    <label for="">Letti</label>
                    <input type="number" class="info-input" v-model="inputBeds" @input="apiFilter(inputBeds)" >
                </div>
            
                <div class="d-flex flex-column">
                    <label for="">Bagni</label>
                    <input type="number" class="info-input" v-model="inputBathrooms" @input="apiFilter(inputBathrooms)" >
                </div>
            
                <div class="d-flex flex-column">
                    <label for="">Grandezza(mq)</label>
                    <input type="number" class="info-input" v-model="inputSquaredMeters" @input="apiFilter(inputSquaredMeters)" >
                </div>
            </div>
            <div id="services-filter">
                <div v-for="service in ServicesFilter">
                    <input  type="checkbox" class="btn-check prova" name="services[]"> 
                    <label for="" class="btn service-btn" >{{service}}</label>
                </div>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>

.service-btn {
    border: 2px solid #006769c0;
    padding-inline: 30px;
    border-radius: 20px;



    &:hover {
        background-color: #006769c0;
        color: white;

    }


}

.info-input{
    border: 2px solid #006769c0;
    padding:6px 20px;
    border-radius: 20px;
    color:black
}

#filter-wrapper{
    display: flex;
    justify-content:space-evenly;
    align-items: center;
}

#apartment-filter {
    display: flex;
    gap:5px;

    input[type="number"]{
        width: 70px;
    }
}

#services-filter{
    display: flex;
    gap:20px;
}

</style>
