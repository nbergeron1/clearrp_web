import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import '../node_modules/primeflex/primeflex.css';
import 'primeicons/primeicons.css';


createApp(App)
.component('Button', Button)
.use(PrimeVue, {
    zIndex: {
        modal: 1100,        //dialog, sidebar
        overlay: 1000,      //dropdown, overlaypanel
        menu: 1000,         //overlay menus
        tooltip: 1100       //tooltip
    }
})
.mount('#app')
