<template>
  <div>
   <DecMenusCartas />
   <MenuDiario/>
   <MenuEspecial/>
   <MenuCarta/>

 <CondicionMenus />
  </div>
</template>

<script setup>
import{ref}from "vue";
import DecMenusCartas from'../components/DecMenusCartas.vue';
import CondicionMenus from'../components/CondicionMenus.vue';
import MenuDiario from "../components/MenuDioario.vue";
import MenuEspecial from '../components/MenuEspecial.vue';
import MenuCarta from '../components/MenuCarta.vue';
</script>