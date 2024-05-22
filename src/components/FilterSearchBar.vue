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

    

    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Filtri
    </button>
    
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Filtri</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            
                <section class="mb-4">
                    <h2 class="mb-3">Stanze e letti</h2>
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
                </section>

                <section>
                    <h2 class="mb-3">Servizi disponibili</h2>
                    <div id="services-filter" class="row row-cols-3 g-3">
                        <div v-for="(service,index) in ServicesFilter">
                            <input  type="checkbox" class="btn-check prova" name="services[]" :id="index"> 
                            <label :for="index" class="btn service-btn" >{{service}}</label>
                        </div>
                    </div>
                </section>

            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="filter-button">Filtra i risultati</button>
            </div>
        </div>
        </div>
    </div>
   

</template>

<style lang="scss" scoped>

.service-btn {
    border: 2px solid #006769c0;
    border-radius: 20px;

    width: 100%;



    &:hover {
        background-color: #006769c0;
        color: white;

    }


}

input:checked+.service-btn {
    background-color: #006769c0;
    color: white;
    border: 2px solid #006769c0;

}

.info-input{
    border: 2px solid #006769c0;
    padding:6px 20px;
    border-radius: 20px;
    color:black
}

.filter-button{
    background-color:#006769c0;
    color:white;

    padding:6px 12px;

    border:1px solid #006769c0;
    border-radius:5px;
}

</style>
