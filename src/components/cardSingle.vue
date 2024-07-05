    <template>
      <div
        class="flex flex-col items-center justify-center bg-gradient-to-br from-slate-950 to-emerald-950 px-5 py-8 xl:px-10 xl:py-28"
      >
        <!-- Image Containers -->
        <div class="flex gap-16">
          <!-- First Card -->
          <figure
            ref="flipContainer1"
            @mousemove="handleMouseMove($event, 'flipContainer1')"
            @mouseleave="resetRotation('flipContainer1')"
            @keydown="handleKeyDown($event, 'flipContainer1', 0)"
            tabindex="0"
            class="flip-container relative h-120 w-80 cursor-pointer rounded-3xl"
            @click="handleFlip(0, 'flipContainer1')"
          >
            <!-- Front Side Of Card -->
            <div
              class="flip-card-front flex-col absolute left-0 top-0 flex h-full w-full items-center justify-center rounded-3xl bg-red-800 bg-center transition-all duration-1000 ease-in-out"
            >
              <h2 class="mb-4 text-2xl font-bold text-white">Menú Sondika</h2>
              <img
                src="../assets/mesa.png"
                alt="mesa"
                class="h-64 w-64 object-cover"
              />
            </div>

            <!-- Back Side Of Card -->
            <figcaption
              class="flip-card-back absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center gap-3 rounded-3xl bg-white p-4 text-slate-100 transition-all duration-1000 ease-in-out"
            >
              <div class="grid grid-cols-1 gap-2 text-nowrap text-sm font-semibold underline">
                <div
                  v-for="(plato, index) in menus.sondika"
                  :key="index"
                  class="rounded-full bg-amber-500 px-4 py-2 text-center font-semibold text-slate-900 text-lg"
                >
                  {{ plato.nombre_plato }} - Alergenos: {{ plato.alergenos }}
                </div>
              </div>
            </figcaption>
          </figure>

          <!-- Second Card -->
          <figure
            ref="flipContainer2"
            @mousemove="handleMouseMove($event, 'flipContainer2')"
            @mouseleave="resetRotation('flipContainer2')"
            @keydown="handleKeyDown($event, 'flipContainer2', 1)"
            tabindex="0"
            class="flip-container relative h-120 w-80 cursor-pointer rounded-3xl"
            @click="handleFlip(1, 'flipContainer2')"
          >
            <!-- Front Side Of Card -->
            <div
              class="flip-card-front flex-col absolute left-0 top-0 flex h-full w-full items-center justify-center rounded-3xl bg-red-800 bg-center transition-all duration-1000 ease-in-out"
            >
              <h2 class="mb-4 text-2xl font-bold text-white">Menú Txorierri</h2>
              <img
                src="../assets/mesa.png"
                alt="mesa"
                class="h-64 w-64 object-cover"
              />
            </div>

            <!-- Back Side Of Card -->
            <figcaption
              class="flip-card-back absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center gap-3 rounded-3xl bg-white p-4 text-slate-100 transition-all duration-1000 ease-in-out"
            >
              <div class="grid grid-cols-1 gap-2 text-nowrap text-sm font-semibold underline">
                <div
                  v-for="(plato, index) in menus.txorierri"
                  :key="index"
                  class="rounded-full bg-amber-500 px-4 py-2 text-center font-semibold text-slate-900 text-lg"
                >
                  {{ plato.nombre_plato }} - Alergenos: {{ plato.alergenos }}
                </div>
              </div>
            </figcaption>
          </figure>

          <!-- Third Card -->
          <figure
            ref="flipContainer3"
            @mousemove="handleMouseMove($event, 'flipContainer3')"
            @mouseleave="resetRotation('flipContainer3')"
            @keydown="handleKeyDown($event, 'flipContainer3', 2)"
            tabindex="0"
            class="flip-container relative h-120 w-80 cursor-pointer rounded-3xl"
            @click="handleFlip(2, 'flipContainer3')"
          >
            <!-- Front Side Of Card -->
            <div
              class="flip-card-front flex-col absolute left-0 top-0 flex h-full w-full items-center justify-center rounded-3xl bg-red-800 bg-center transition-all duration-1000 ease-in-out"
            >
              <h2 class="mb-4 text-2xl font-bold text-white">Menú Izarza</h2>
              <img
                src="../assets/mesa.png"
                alt="mesa"
                class="h-64 w-64 object-cover"
              />
            </div>

            <!-- Back Side Of Card -->
            <figcaption
              class="flip-card-back absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center gap-3 rounded-3xl bg-white p-4 text-slate-100 transition-all duration-1000 ease-in-out"
            >
              <div class="grid grid-cols-1 gap-2 text-nowrap text-sm font-semibold underline">
                <div
                  v-for="(plato, index) in menus.izarza"
                  :key="index"
                  class="rounded-full bg-amber-500 px-4 py-2 text-center font-semibold text-slate-900 text-lg"
                >
                  {{ plato.nombre_plato }} - Alergenos: {{ plato.alergenos }}
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </template>

    <script setup>
    import { ref, onMounted } from 'vue';
    import axios from 'axios';

    // References for flip containers
    const flipContainer1 = ref(null);
    const flipContainer2 = ref(null);
    const flipContainer3 = ref(null);

    // State for flipped cards
    const isFlipped = ref([false, false, false]);

    // State for menus data
    const menus = ref({
      sondika: [],
      txorierri: [],
      izarza: []
    });

    // Fetching menus data from API
    const fetchMenus = async () => {
      try {
        const sondikaResponse = await axios.get('http://localhost:5001/api/menus/sondika');
        const txorierriResponse = await axios.get('http://localhost:5001/api/menus/txorierri');
        const izarzaResponse = await axios.get('http://localhost:5001/api/menus/izarza');
        
        menus.value.sondika = sondikaResponse.data.platos;
        menus.value.txorierri = txorierriResponse.data.platos;
        menus.value.izarza = izarzaResponse.data.platos;
      } catch (error) {
        console.error('Error fetching menus:', error);
      }
    };


    onMounted(() => {
      fetchMenus();
    });

    // Handle card flipping on mouse move
    const handleMouseMove = (event, container) => {
      const rect = eval(container).value.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;
      const rotateX = (mouseY / rect.height - 0.5) * 50;
      const rotateY = -(mouseX / rect.width - 0.5) * 50;
      eval(container).value.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    // Reset card rotation
    const resetRotation = (container) => {
      eval(container).value.style.transform = '';
    };

    // Handle card flip on click or keydown
    const handleFlip = (index, container) => {
      if (isFlipped.value[index]) {
        eval(container).value.classList.remove('is-flipped');
        isFlipped.value[index] = false;
      } else {
        eval(container).value.classList.add('is-flipped');
        isFlipped.value[index] = true;
      }
    };

    // Handle card flip on 'Enter' keydown
    const handleKeyDown = (event, container, index) => {
      if (event.key === 'Enter') {
        handleFlip(index, container);
      }
    };
    </script>

    <style scoped>
    /* Adding Perspective To Parent Container */
    .flip-container {
      perspective: 1000px;
      transform-style: preserve-3d;
      transition: transform 0.5s;
    }

    /* Styling Front & Back Of The Card */
    .flip-container .flip-card-front,
    .flip-container .flip-card-back {
      backface-visibility: hidden;
    }

    .flip-container .flip-card-front {
      transform: rotateY(0deg);
    }

    .flip-container .flip-card-back {
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
    .flip-container .flip-card-back h2,
    .flip-container .flip-card-back img,
    .flip-container .flip-card-back h3,
    .flip-container .flip-card-back div {
      transform: translateZ(30px);
    }
    </style>
