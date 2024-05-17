import { createRouter, createWebHistory } from 'vue-router';

// importazione dei componenti utilizzati come pagina
import HomePage from './components/pages/HomePage.vue';
import SingleApartment from './components/pages/SingleApartment.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        //questo array  contiene tutte le rotte  dell' applicazione
        {
            path: '/',
            name: 'HomePage',
            component: HomePage
        },
        {
            path: '/apartments/:slug',
            name: 'single-apartment',
            component: SingleApartment
        },
       

    ]
});
export { router };