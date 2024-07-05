<template>
    <div>
      <div class="carrousel">
      <carrouesel />
    </div>
    
      <!-- Agrega aquí los componentes específicos para la vista de Servicios -->

     
      <DecEmpresa />
      <CoffeBreak />
      <LunchService />
   
      <Servicios />
    </div>
  </template>
  
  <script setup>
import Servicios from '../components/ Servicios.vue';
import DecEmpresa from '../components/DecEmpresa.vue';
import CoffeBreak from '../components/CoffeBreak.vue';
import LunchService from'../components/LunchService.vue';
import carrouesel from '../components/carrouesel.vue';
  </script>
  <style>
  .carrousel{
    margin-bottom: -10rem;
  }
  </style>