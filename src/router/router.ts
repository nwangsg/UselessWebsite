import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import Home from '../views/Home.vue'
import LongHorse from '../components/LongHorse/LongHorse.vue'
import YouAreDisgusting from '../components/YouAreDisgusting/YouAreDisgusting.vue'

const routes: Array<RouteRecordRaw> =[
    {
        path:'/',
        name:'Home',
        component: Home
    },
    {
        path:'/LongHorse',
        name: 'LongHorse',
        component: LongHorse
    },
    {
        path:'/YouAreDisgusting',
        name: 'YouAreDisgusting',
        component: YouAreDisgusting
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router