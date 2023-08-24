import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/pages/home.vue'
import NotFound from '@/pages/notfound.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router