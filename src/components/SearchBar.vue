<script>
import {store} from '../store.js';
import axios from 'axios';

export default {
    name: 'SearchBar',
    data() {
        return {
            store,
        };
    },

    methods: {
        apiCall(){


            axios.get('https://api.tomtom.com/search/2/geocode/'+ store.inputSearch +'.json?key=N4I4VUaeK36jrRC3vR5FfWqJS6fP6oTY&limit=3').then(res=>{
              
                store.addresses = res.data.results
                // console.log(store.addresses[0].address.freeformAddress);
            })

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

                </div>
            </nav>
        </div>
    </header>

</template>

<style lang="scss">

</style>