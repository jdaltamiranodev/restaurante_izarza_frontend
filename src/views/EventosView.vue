<template>
    <div>
      <!--   <Header /> -->
    <div class="carrousel">
      <carrouesel />
    </div>
      <!-- Agrega aquí los componentes específicos para la vista de Eventos -->
    
  <DecEventos />
  <DecMenus />
 <cardSingle/> 
  <DecEventos/>
  <CardsComunionesClone/>
  <!-- <CardsComuniones/> -->
  <CondicionEventos />
 
    </div>
  </template>
  
  <script setup>
import DecEventos from '../components/DecEventos.vue';
import DecMenus from '../components/DecMenus.vue';
import CondicionEventos from'../components/CondicionEventos.vue';
import cardSingle from '../components/cardSingle.vue';
import CardsComunionesClone from '../components/CardsComunionesClone.vue';
import carrouesel from '../components/carrouesel.vue';

</script>
<style>
.carrousel{
  margin-bottom: -10rem;
}
</style>
  