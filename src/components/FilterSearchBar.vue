<script>
import axios from 'axios';
import { store } from '../store.js';

export default {
    name: 'FilterSearchPage',

    props:{
        latitudine:Number,
        longitudine:Number,
    },

    data() {
        return {
        // apartments: [],
        baseApiUrl: 'http://127.0.0.1:8000/api/',
        store,
        radius:20,

        serviceList: [],

        }
    },

    mounted() {

        axios.get('http://127.0.0.1:8000/api/service')
            .then(res => {
                this.serviceList = res.data.results;
            })
            .catch(error => {
                console.error('Errore durante la ricerca degli appartamenti:', error);
            });

    },
    methods: {

        apiFilter() {
        

        axios.get('http://127.0.0.1:8000/api/filter', {
            params: {
            latitude: this.latitudine, 
            longitude: this.longitudine, 
            radius:this.radius,
            rooms: store.inputRooms,
            beds: store.inputBeds,
            bathrooms: store.inputBathrooms,
            sqMeters: store.inputSquaredMeters,
            services: store.services.length > 0 ? store.services : null // Passa i servizi selezionati, o null se nessun servizio è selezionato
            }
        })
        .then(res => {
            store.apartments = res.data.results;
            console.log(res.data);
        })
        .catch(error => {
            console.error('Errore durante la ricerca degli appartamenti:', error);
        });
        },

        toggleService(id) {
        const index = store.services.indexOf(id);
        if (index === -1) {
            // Aggiungi il servizio se non è già presente
            store.services.push(id);
        } else {
            // Rimuovi il servizio se è già presente
            store.services.splice(index, 1);
        }
        // Ora eseguiamo il filtro con i servizi selezionati
        this.apiFilter();
        },

        filterApartments() {
        this.apiFilter();
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
                    <h2 class="mb-3">Raggio di distanza</h2>
                    <input type="range" id="radius" min="1" max="30"  v-model="radius" @change="filterApartments">{{ radius }}km
                </section>
            
                <section class="mb-4">
                    <h2 class="mb-3">Stanze e letti</h2>
                    <div id="apartment-filter">
                        <div class="d-flex flex-column">
                            <label for="">Stanze</label>
                            <input type="number" class="info-input" v-model="store.inputRooms" @input="filterApartments" >
                        </div>
                    
                        <div class="d-flex flex-column">
                            <label for="">Letti</label>
                            <input type="number" class="info-input" v-model="store.inputBeds" @input="filterApartments" >
                        </div>
                    
                        <div class="d-flex flex-column">
                            <label for="">Bagni</label>
                            <input type="number" class="info-input" v-model="store.inputBathrooms" @input="filterApartments" >
                        </div>
                    
                        <div class="d-flex flex-column">
                            <label for="">Grandezza(mq)</label>
                            <input type="number" class="info-input" v-model="store.inputSquaredMeters" @input="filterApartments" >
                        </div>
                    </div>
                </section>

                <section>
                    <h2 class="mb-3">Servizi disponibili</h2>
                    <div id="services-filter" class="row row-cols-3 g-3">
                        <div v-for="service in serviceList">
                            <input  type="checkbox" class="btn-check prova" name="services[]" :id="`service-${service.id}`" :value="service.id" @change="toggleService(service.id)"> 
                            <label :for="`service-${service.id}`" class="btn service-btn" >{{ service.name }}</label>
                        </div>
                    </div>
                </section>

            </div>
            <div class="modal-footer">
                <button type="button" class="filter-button" data-bs-dismiss="modal">Filtra i risultati</button>
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
