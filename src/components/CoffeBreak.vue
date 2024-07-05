
<template>

    <h2 class="m-10 text-3xl font-bold text-red-800  text-center">Menu Bodas</h2>  
      <div class="flex m-20 justify-center gap-60 ">
          <figure
            ref="flipContainer"
            @mousemove="handleMouseMove" 
            @mouseleave="resetRotation"
            @keydown="handleKeyDown"
            tabindex="0"
            class="flip-container relative h-96 w-64 cursor-pointer rounded-3xl "
            v-for="menu in coffe_break" :key="coffe_break"
          >
            <!-- lado de adelante -->
      
            <div
              class="flip-card-front  bg-red-800  absolute left-0 top-0 flex flex-col h-full w-full items-center justify-center rounded-3xl bg-cover bg-center transition-all duration-1000 ease-in-out"
              
              ><h2 class="mb-2 text-2xl font-bold text-white">{{ menu }}</h2>
              
              <img
               src="../assets/m_sondika.png" 
                alt="Bald Eagle Portrait"
                class="size-24 w-40 h-30 object-cover"
              /> 
      
              </div>
      
            <!-- lado de atras -->
      
            <figcaption
              class="flip-card-back absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center gap-3 rounded-3xl bg-red-800 p-4 text-red-800 transition-all duration-1000 ease-in-out"
            >
        
             
              <a href=""><h3 class=" text-red-800 font-bold text-2xl bg-white rounded ">Ver Menu</h3></a>
      
              
              
            </figcaption> 
          </figure>
        </div>
    
      </template>
      
      <script setup>
      import { ref } from "vue";
      const coffe_break = ref(["Coffe break 1","Coffe break 2","Coffe break 3"]);
    
      
      const flipContainer = ref(null);
      const isFlipped = ref(false);
      
      // efecto rotacion
      
      const handleMouseMove = (event) => {
        const rect = flipContainer.value.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;
        const rotateX = (mouseY / rect.height - 0.5) * 50;
        const rotateY = -(mouseX / rect.width - 0.5) * 50;
        flipContainer.value.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      };
      
      // reseteo rotacion
      
      const resetRotation = () => {
        flipContainer.value.style.transform = "";
      };
      
      // cambiovalor is fliped
      
      const handleFlip = () => {
        if (isFlipped.value) {
          flipContainer.value.classList.remove("is-flipped");
          isFlipped.value = false;
        } else {
          flipContainer.value.classList.add("is-flipped");
          isFlipped.value = true;
        }
      };
      
      // Triggering handleFlip Function on pressing 'Enter' Key
      
      const handleKeyDown = (event) => {
        if (event.key === "Enter") {
          handleFlip();
        }
      };
      </script>
      
      <style scoped>
      
      /*perspectiva*/
      
      .flip-container {
        perspective: 1000px;
        transform-style: preserve-3d;
        transition: transform 0.5s ease;
      }
      
      /* Hiding The Back Of Card */
      
      .flip-card-front,
      .flip-card-back {
        backface-visibility: hidden;
        box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.2);
        transform-style: preserve-3d;
      }
      
      /* Setting The Default Postion Of The Back Of The Card */
      
      .flip-card-back {
        transform: rotateY(180deg);
      }
      
      /* Flipping The Card On Hover */
      
      .flip-container:hover .flip-card-front {
        transform: rotateY(180deg);
      }
      
      .flip-container:hover .flip-card-back {
        transform: rotateY(360deg);
      }
      
      /* Flipping The Card On 'Enter' Key Event */
      
      .flip-container.is-flipped .flip-card-front {
        transform: rotateY(180deg);
      }
      
      .flip-container.is-flipped .flip-card-back {
        transform: rotateY(360deg);
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
      </style>