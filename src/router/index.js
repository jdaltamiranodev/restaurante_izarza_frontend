// router/index.js

import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import EventosView from '../views/EventosView.vue';
import MenusCartsView from '../views/MenusCartsView.vue'; // Importa la vista MenusCartsView
import ServiciosView from '../views/ServiciosView.vue';
/* import ReservaView from '../views/ReservaView.vue'; */
import ContactView from '../views/ContactView.vue';


const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/eventos', name: 'Eventos', component: EventosView },
  { path: '/menus-cartas', name: 'MenusCarts', component: MenusCartsView }, // Define la ruta para MenusCartsView
  { path: '/servicios', name: 'Servicios', component: ServiciosView },
  /* { path: '/reserva', name: 'Reserva', component: ReservaView }, */
  { path: '/contact', name: 'Contact', component: ContactView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;




