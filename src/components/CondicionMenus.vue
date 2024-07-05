<template>
    <div class="h-40 bg-white flex flex-col items-center mb-16">
      <i 
        @mouseover="showInfo = true" 
        @mouseleave="showInfo = false" 
        class="material-icons text-6xl text-gray-500 cursor-pointer"
      >
        info
      </i>
      <p class="text-red-800 text-center text-2xl mb-4">Tocar para información adicional sobre menus</p>
      <div v-if="showInfo" class="bg-gray-500 p-4 rounded-md shadow-md ">
        <p class="text-white">Los menús incluyen la comida descrita, pan, agua y vino.</p>
        <p class="text-white">Los menús se tienen que confirmar con anticipación, en caso contrario se cobrará el número de comensales reservado.</p>
        <p class="text-white">Los precios incluyen el 10% de Iva.</p>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup() {
      const showInfo = ref(false);
  
      return {
        showInfo,
      };
    },
  };
  </script>
  
  <style scoped>
 
  /* Estilos para tu componente */
  </style>
  
  