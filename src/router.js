import Home from "./components/HomeCome.vue"
import SignUp from "./components/SignUp.vue"
import { createRouter, createWebHistory } from "vue-router";
import Login from "./components/Login.vue"
import Add from "./components/Add.vue"
import Update from "./components/Update.vue"

const routes = [
    {
        name: 'Home',
        component: Home,
        path: '/'
    },
    {
        name: 'SignUp',
        component: SignUp,
        path: '/SignUp'
    },
    {
        name: 'Login',
        component: Login,
        path: '/login'
    },
    {
        name: 'Add',
        component: Add,
        path: '/Add'
    },
    {
        name: 'Update',
        component: Update,
        path: '/Update/:id'
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
});
 export default router;