<script>

import SearchBar from '../components/SearchBar.vue';

export default {
    name: 'Jumbo',

    data() {
        return {
            images: [
                'public/jumbo-images/casa-vacanza-jumbo.jpg',
                'public/jumbo-images/casa-jumbo.jpg',
                'public/jumbo-images/sole_jumbo.jpg',
            ]
        }
    },

    components: {
        SearchBar,
    },
}
</script>


<template>

    <div class="container py-3">
        <div class="jumbo row row-cols-2">
            <div id="left-side">
                <h1>
                    Cerca il tuo appartamento con un click
                </h1>
                <p>
                    Immergiti nella grande varietà di appartamenti disposti su tutto il territorio nazionale. Imposta la
                    posizione e le tue esigenze e scegli l'appartamento per te.
                </p>


            </div>

            <div id="right-side">
                <div id="mosaic">
                    <img v-for="image in images" :src="image" alt="foto jumbo">
                </div>
            </div>
        </div>
    </div>

    <SearchBar></SearchBar>

</template>

<style lang="scss" scoped>
h1 {
    font-size: 3.3em;
}

p {
    font-size: .9em;
    color: rgb(110, 110, 110);
}

#mosaic {
    display: flex;
    flex-wrap: wrap;
    gap: 50px;

    img {
        height: 200px;
        border-radius: 5px;

        box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
    }
}
</style>