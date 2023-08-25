
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import '/node_modules/primeflex/primeflex.css'
import './style.css'

import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import 'primeicons/primeicons.css';
import "primevue/resources/themes/vela-blue/theme.css";
import Button from 'primevue/button' 
import Menubar from 'primevue/menubar'
import Editor from 'primevue/editor'

const app = createApp(App)

app.component('Button', Button)
app.component('Menubar', Menubar)
app.component('Editor', Editor)

app.use(createPinia())
app.use(router)
app.use(PrimeVue)

app.mount('#app')
