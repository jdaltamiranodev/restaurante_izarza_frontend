import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Importa el enrutador desde el archivo router

// Importa las dependencias de Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Importa los iconos de Font Awesome que necesitas
import { faXTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

// Importa los estilos de Tailwind CSS
import './assets/tailwind.css';

// Añade los iconos a la librería
library.add(faXTwitter, faFacebook, faInstagram, faPhone, faEnvelope);

// Crea la aplicación
const app = createApp(App);

// Registra el componente FontAwesomeIcon globalmente
app.component('font-awesome-icon', FontAwesomeIcon);

// Usa el router en la aplicación
app.use(router);

// Monta la aplicación
app.mount('#app');



