<template>
    <div class="bg-red-800">
      <h2 class="mb-2 text-2xl font-bold text-white text-center">Menús de Comuniones</h2>
      <div class="grid  grid-cols-2 gap-4 justify-items-center">
        <figure
          v-for="(menu, index) in menues_comuniones"
          :key="index"
          @mouseenter="handleMouseEnter(index)"
          @mouseleave="handleMouseLeave(index)"
          tabindex="0"
          class="flip-container relative w-80 h-96 cursor-pointer rounded-lg overflow-hidden"
          :ref="el => containers[index] = el"
        >
          <!-- Front side -->
          <div
            class="flip-card-front bg-white absolute left-0 top-0 flex flex-col h-full w-full items-center justify-center rounded-lg bg-cover bg-center transition-all duration-300 ease-in-out"
          >
            <h2 class="mb-4 text-3xl font-bold text-red-800 mt-0">{{ menu }}</h2>
            <img
              src="../assets/comuniones.png"
              alt="Imagen de Comuniones"
              class="imagen-comunion w-60 h-60 object-cover mb-0"
            />
          </div>
  
          <!-- Back side -->
          <figcaption
            v-if="currentMenu && currentMenu.nombre === menu && currentMenu.platos.length > 0"
            class="flip-card-back absolute left-0 top-0 flex flex-col items-center justify-center rounded-lg bg-red-800 p-4 text-white transition-all duration-300 ease-in-out"
          >
            <h3 class="text-white font-bold text-lg mb-4">{{ currentMenu.nombre }}</h3>
            <ul class="text-white text-center">
              <li v-for="(plato, index) in currentMenu.platos" :key="index" class="mb-2">
                <span class="block text-base font-medium">{{ plato.nombre_plato }}</span>
                <span class="block text-sm italic text-gray-300">{{ plato.alergenos }}</span>
              </li>
            </ul>
          </figcaption>
        </figure>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import axios from "axios";
  
  const menues_comuniones = ref(["Berreteaga", "Errekalde", "Goietxea", "Kumea"]);
  const currentMenu = ref(null); // Cambiado para manejar un solo menú a la vez
  const containers = ref([]);
  
  const handleMouseEnter = async (index) => {
    const container = containers.value[index];
    if (!container || !container.classList.contains("is-flipped")) {
      const menuName = menues_comuniones.value[index];
      try {
        const response = await axios.get(`http://localhost:5001/api/menus/${menuName.toLowerCase()}`);
        currentMenu.value = {
          nombre: menuName,
          platos: response.data.platos,
        };
      } catch (error) {
        console.error("Error al obtener el menú desde el backend:", error);
      }
    }
  
    // Voltear la tarjeta
    if (container) {
      container.classList.add("is-flipped");
      container.style.zIndex = 1;
    }
  };
  
  const handleMouseLeave = (index) => {
    const container = containers.value[index];
    if (container && container.classList.contains("is-flipped")) {
      container.classList.remove("is-flipped");
      container.style.zIndex = "";
    }
  };
  </script>
  
  <style scoped>
  /* Perspective */
  .flip-container {
    perspective: 1000px;
    transform-style: preserve-3d;
    transition: transform 0.5s ease;
    height: 45rem;
    margin: 10rem 0 5rem 0;
  }

  .imagen-comunion {
    width: 100%;
    margin: 0 auto;
    margin-top: 10rem;
    height: 60%;
  }
  
  /* Hiding The Back Of Card */
  .flip-card-front,
  .flip-card-back {
    backface-visibility: hidden;
    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.2);
    transform-style: preserve-3d;

    height: 45rem;
  }
  .flip-card-front{
    height: 25rem;
  }
  /* Setting The Default Postion Of The Back Of The Card */
  .flip-card-back {
    transform: rotateY(180deg);
  }
  
  /* Flipping The Card On 'Enter' Key Event */
  .flip-container.is-flipped .flip-card-front {
    transform: rotateY(180deg) scale(1.1);
  }
  
  .flip-container.is-flipped .flip-card-back {
    transform: rotateY(360deg) scale(1.1);
  }
  
  /* Adding Depth To Elements On The Back */
  .flip-container .flip-card-back h2 {
    transform: translateZ(40px);
  }
  
  .flip-container .flip-card-back img {
    transform: translateZ(50px);
  }
  
  .flip-container .flip-card-back h3 {
    transform: translateZ(40px);
  }
  
  .flip-container .flip-card-back div {
    transform: translateZ(30px);
  }
  
  /* Additional Styling */
  .grid {
    display: grid;
    justify-items: center;
  }
  
  .flip-container {
    cursor: pointer;
    position: relative;
  }
  
  .flip-card-front {
    text-align: center;
    padding: 20px;
  }
  
  .flip-card-back {
    text-align: center;
    padding: 20px;
  }
  
  ul {
    padding: 0;
    list-style: none;
  }
  
  li {
    margin-bottom: 10px;
  }
  
  </style>
  