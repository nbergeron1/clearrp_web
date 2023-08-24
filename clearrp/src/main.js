import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import Card from 'primevue/card';
import Tailwind from "primevue/passthrough/tailwind";
import 'primeicons/primeicons.css';
import './style.css'

import router from './routes.js'

createApp(App)
.component('Button', Button)
.component('Card', Card)
.use(router)
.use(PrimeVue, { unstyled: true, pt: Tailwind })
.mount('#app')
