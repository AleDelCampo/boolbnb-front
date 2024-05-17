<script>
import {store} from '../store.js';
import axios from 'axios';

export default {
    name: 'SearchBar',
    data() {
        return {
            store,
            listItem: [],
            input: '',
        };
    },

    methods: {
        apiCall(){

            this.listItem = []


            axios.get('https://api.tomtom.com/search/2/geocode/'+ store.inputSearch +'.json?key=N4I4VUaeK36jrRC3vR5FfWqJS6fP6oTY&limit=3').then(res=>{
              
                store.addresses = res.data.results
                // console.log(store.addresses[0].address.freeformAddress);
            })

            store.addresses.forEach(element => {

                const item = element.address.freeformAddress;

                this.listItem.push(item)
                
            });

        },

        chooseAddress(item){

            store.inputSearch = item;

            console.log(store.inputSearch)



            // this.input = store.inputSearch

            // console.log(store.inputSearch.toLowerCase())
            // console.log(store.apartments)

            // axios.get('http://127.0.0.1:8000/api/apartments').then(res => {
            // store.apartments = res.data.results});

            
            
            
        },
        prova(){

            // console.log("al click",store.inputSearch.toLowerCase())
            console.log(store.apartments[0])
                    
                        
        //     store.apartments = store.apartments.filter(apartment =>
        //     apartment.address.toLowerCase().includes(store.inputSearch.toLowerCase())
        // );
    }
},

}
</script>


<template>

<header class="bg-body-tertiary">
        <div class="container">
            <nav class="navbar">
                <div class="container-fluid d-flex justify-content-between">

                    <a href="#">
                        <!-- <router-link :to="{ name: 'home' }"><img src="https://fontmeme.com/permalink/240430/990fbe74ade8eac19477253ccd13ab23.png" alt="casper-font" border="0"></router-link> -->
                    </a>

                    <div>
                        <!-- <router-link :to="{ name: 'contact-me' }" class="btn btn-outline-info btn-outline">Contattateci</router-link> -->
                    </div>

                    <div>
                        <input class="form-control" type="search" v-model="store.inputSearch" placeholder="Filtra progetti..." @keyup="apiCall(store.inputSearch)">
                    </div>
                    <div>
                        <ul class="list-group">
                            <li class="list-group-item list-group-item-action" v-for="item in this.listItem" @click="chooseAddress(item)">{{ item }}</li>
                        </ul>
                    </div>

                </div>
            </nav>
        </div>
        <div @click="prova()">prova</div>
    </header>

</template>

<style lang="scss">

</style>