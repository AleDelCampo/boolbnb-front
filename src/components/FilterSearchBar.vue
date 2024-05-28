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
            latitude: store.latitude, 
            longitude: store.longitude, 
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

    <div class="filter-wrapper">

        <div id="inner" class="col-12 col-lg-8 col-md-10">

            <div id="top-bar" class="row">
                <div id="range" class="col-12 col-lg-4 d-flex flex-column">
                    <label for="radius" class="mb-3"><strong>Filtro di distanza:</strong> {{ radius }}km</label>
                    <input type="range" id="radius" min="1" max="30"  v-model="radius" @change="filterApartments">
    
                </div>
    
                <div id="apartment-info" class=" col-12 col-lg-8 row row-cols-2 m-0">
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
            </div>
    
            <div id="bottom-bar">
                <div id="services">
    
                    <strong class="mb-3">Servizi disponibili</strong>
                    <div id="services-filter">
                        <div v-for="service in serviceList">
                            <input  type="checkbox" class="btn-check prova" name="services[]" :id="`service-${service.id}`" :value="service.id" @change="toggleService(service.id)"> 
                            <label :for="`service-${service.id}`" class="service-btn label-btn" >
                                <div class="icon">
                                    <i :class="service.icon"></i>
                                    
                                </div>
                                <div class="name">
                                    {{ service.name }}
                                </div>
                            </label>
                        </div>
                    </div>
    
                </div>
            </div>

        </div>
        


    </div>


</template>

<style lang="scss" scoped>


.filter-wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
    

    #top-bar{
        flex-wrap: wrap;
        align-items: center;
    }


    #services-filter{
        display: flex;
        justify-content: space-evenly;


        .label-btn{
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
}


.service-btn {
    width: 100%;

    border:1px solid transparent;
    font-weight: 600;

    color:rgba(0,0,0,.5);
    

    &:hover {
        border-bottom:1px solid #006769c0;
        cursor:pointer;
        color:rgba(0,0,0,1);
    }


}

input:checked+.service-btn {
    border-bottom:1px solid #006769c0;
    color:rgba(0,0,0,1);
}

.info-input{
    width: 100%;
    border: 2px solid #006769c0;
    
    border-radius: 20px;
    padding:6px 20px;
    color:black
}

#apartment-info > div:nth-of-type(2n + 1){
    padding-left: 0;
}

#apartment-info > div:nth-of-type(2n + 2){
    padding-right: 0;
}


@media screen and (max-width:430px){

    .filter-wrapper{

        #services-filter{

            flex-wrap: wrap;
            justify-content: center;

            column-gap:40px;
    
          
    
            &>div{
                width: 38px;
            }
        }
    }
}


</style>
