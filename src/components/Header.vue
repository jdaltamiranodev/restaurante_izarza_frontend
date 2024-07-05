  <template>
    <header class="header bg-white  w-100 pb-1">
      <div class="flex flex-col items-center h-15 bg-gray-500 p-5">
        <img src="../assets/logo izarza 8.png" alt="" class="logo-izarza brightness-150">
        <h2 class="text-4xl text-indigo-50">RESTAURANTE IZARZA</h2>
      </div>
  
      <nav class="navbar">
        <div class="container relative"> 
          <div class="menu-toggle" @click="toggleMenu">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="hamburger-icon">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </div>
          <ul :class="{ 'show': isMenuOpen }" class="menu">
            <li><router-link :to="{ path: '/', exact: true, class: { 'active': activeLink === 'Home' }}" @click="setActiveLink('Home')">Inicio</router-link></li>
            <li><router-link to="/Eventos" class="route-link">Eventos</router-link></li>
            <li><router-link to="/Menus-Cartas" class="route-link">Menus y Cartas</router-link></li>
            <li><router-link to="/Servicios" class="route-link">Servicios</router-link></li> 
            <li><router-link to="/Contact" class="route-link">Contacto</router-link></li>
          </ul>
        </div>
      </nav>
    </header> 
  </template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
      activeLink: 'Home'
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    setActiveLink(link) {
      this.activeLink = link;
     
      this.isMenuOpen = false;
    }
  }
};
</script>

<style scoped>
  .header {
      background-color: brown;
    }
    .navbar {
      padding: 1rem;
      margin-bottom: 30px;
      display: flex;
      justify-content: center; 
      align-items: center; 
    }
    .navbar a {
      text-decoration: none;
      color: #fffdfd;
      font-size: 1.5rem;
      font-weight: 900;
    }
    .menu-toggle {
      display: none;
      cursor: pointer;
      z-index: 1000;
    }
    .menu-toggle svg {
      width: 24px;
      height: 24px;
    }
    .navbar ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      align-items: center;
      justify-content: center; 
    }
    .navbar ul li {
      margin: 0 10px;
    }
    .navbar ul li a {
      padding: 0.5rem 1rem;
      border-radius: 5px;
    }
    .navbar ul li a:hover {
      background-color: #c9ced2;
    }
    .logo-izarza {
      width: 200px;
      height: auto;
      align-content: center;
      margin-top: 10px;
    }
    .menu {
      z-index: 999;
      position: absolute;
      width: 100%;
      text-align: center;
    }
    .router-link {
      z-index: 1001;
    }
    @media screen and (max-width: 1280px) {
   
    .navbar a {
      text-decoration: none;
      color: #fffdfd;
      font-size: 1.25rem;
      font-weight: 600;
    }
}
    @media (max-width: 768px) {
      .navbar {
        margin-bottom: -2px;
        flex-direction: column; 
        color: #fffdfd;
      }
      .navbar ul {
        display: none;
        flex-direction: column;
        width: 50%; 
        background-color: brown;
        text-align: center; 
      }
      .navbar ul.show {
        display: flex;
      }
      .menu-toggle {
        display: block;
      }
      .navbar ul li {
        margin: 10px 0;
      }
    }
</style> 




  