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
      <div v-if="showInfo" class="bg-gray-500 p-4 rounded-md shadow-md">
        
        <p class="text-white">Condiciones de los menus
Los novios e invitados dispondrán en exclusiva del restaurante y el resto de las instalaciones en las siguientes condiciones: Si lo desean podrán disponer del jardín para celebrar su ceremonia civil, reportajes gráficos, etc.<br>
El cocktail de bienvenida se dará en el jardín. Si las condiciones metereológicas no lo permiten se dará en la planta inferior del restaurante.<br>
Menú degustación: el restaurante Izarza invita a los novios a una degustación del menú de boda elegido por ellos.<br>
Vino, cava y licores: todos los menús incluyen pan, agua, vino, café, una copa de cava y una copa de licor. Según lo establecido en el contrato firmado por el restaurante y los novios.<br>
Los vinos y cavas se presentarán a los novios el día de la realización del menú degustación.
Consultar PRECIOS</p>
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