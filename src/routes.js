 import SignUp from './components/SignUp.vue'
import HomePage from './components/Homepage.vue'
import Login from './components/Login.vue'
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
    },
    {
        name:'Login',
        component: Login,
        path:'/login'
    },
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router