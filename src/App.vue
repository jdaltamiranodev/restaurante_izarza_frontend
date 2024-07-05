<!-- src/App.vue -->
<template>
  <div id="app" class="app">
    <Header />
   <!--   <Contact /> --> 
    <router-view></router-view>
    <Footer />
   
  </div>
</template>

<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
/*  import Contact from './components/Contact.vue'; */
</script>

<style>
/* .app{
  background-image: url(../assets/decoracion-de-bodas-.png);
    background-repeat: no-repeat;
    background-size: cover;
    
} */
/* estilos globales */
</style>




