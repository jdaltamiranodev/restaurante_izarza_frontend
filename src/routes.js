import { createRouter, createWebHistory } from "vue-router";


const router = createRouter({
    history: createWebHistory(import.meta.BASE_URL),
    routes: [
        {path:'/',
        name:'home',
        component:HomeView,
        
        },
        {path:'/celebraciones',
        name:'celebraciones',
        component:()=>import ( "../views/CelebracionesView.vue")
        },
    ]
})