import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import Home from '../views/Home.vue'
import LongHorse from '../components/LongHorse/LongHorse.vue'
import HelloWorld from '../components/Helloworld.vue'

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
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router