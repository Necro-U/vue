import SignUp from '../components/First.vue'
import HomePage from '../components/Homepage.vue'
import { createRouter,createWebHistory } from 'vue-router'

let routes = [
    {
        name:'Home',
        component: HomePage,
        path:'/'
    },
    {
        name:'SignUp',
        component: SignUp,
        path:'/signup'
    }
]

const router = createRouter({
    history:createWebHistory,
    routes
})

export default router