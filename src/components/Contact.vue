
  <!-- src/components/Contact.vue -->
  <template>
    <div class=" mt-0 flex justify-evenly">
      
      <form @submit.prevent="submitForm" class="bg-red-800 shadow-md  px-8 pt-6 pb-8 mb-4 w-96 ml-20 opacity-95 rounded-3xl">
        <div>
      <h1 class="text-3xl font-bold text-center mb-8 text-white bg-red-800 border-2 rounded-xl ml-4 ">Reservas Online </h1> 
      <i class="fa fa-hand-o-down" aria-hidden="true"></i>
      </div>
        <div class="mb-4">
          <label class="block text-white text-sm font-bold mb-2" for="name">
            Nombre (requerido)
          </label>
          <input v-model="form.name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Tu nombre" required>
        </div>
        <div class="mb-4">
          <label class="block text-white text-sm font-bold mb-2" for="email">
            Email (requerido)
          </label>
          <input v-model="form.email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Tu email" required>
        </div>
        <div class="mb-4">
          <label class="block text-white text-sm font-bold mb-2" for="phone">
            Teléfono
          </label>
          <input v-model="form.phone" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="tel" placeholder="Tu teléfono">
        </div>
        <div class="mb-4">
          <label class="block text-white text-sm font-bold mb-2" for="date">
            Selecciona el día
          </label>
          <input v-model="form.date" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="date" type="date">
        </div>
        <div class="mb-6">
          <label class="block text-white text-sm font-bold mb-2" for="comments">
            Comentarios
          </label>
          <textarea v-model="form.comments" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="comments" placeholder="Tus comentarios"></textarea>
        </div>
        <div class="flex items-center justify-between">
          <button class="bg-white hover:bg-red-800 text-red-500 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Reserva
          </button>
        </div>
    
      <p v-if="message" class="bg-white border border-red-500 rounded-md p-3 mt-4 text-green-800 text-lg">{{ message }}</p>
    </form>
      <div class="map mt-4 mb-4">
        <h3 class="text-2xl text-center font-bold text-red-800 underline mb-4">ESTAMOS AQUÍ, MUY CERCA DE TÍ.</h3>
        <div class="map" style="text-align: center;">
  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1452.0942263630404!2d-2.926808!3d43.289375!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4e4ff7ba7fbfdb%3A0x483d279077b19302!2sRestaurante%20Izarza!5e0!3m2!1ses!2ses!4v1717586128070!5m2!1ses!2ses" width="600" height="450" style="border:0; width: 90%; max-width: 700px; margin: 0 auto;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
        <div class="flex flex-col text-white bg-red-800 mt-4 rounded-xl pl-12 text-2xl">
    <h3 class="underline">Contacto</h3>
    <p>
      <font-awesome-icon :icon="['fas', 'phone']" class="mr-2" />
      944 538 273
    </p>
    <p>
      <font-awesome-icon :icon="['fas', 'envelope']" class="mr-2" />
      resevas@izarza.com
    </p>
  </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const form = ref({
    name: '',
    email: '',
    phone: '',
    date: '',
    comments: '',
  });
  const message = ref('');
  
  const submitForm = () => {
    if (!form.value.name || !form.value.email) {
      alert('Por favor, completa el nombre y el email');
      return;
    }
  
    message.value = 'Formulario enviado correctamente';
  
  
  };
  </script>
  <style scoped>
   .mt-0 {
    background-image: url(../assets/decoracion-de-bodas-.png);
    background-repeat: no-repeat;
    background-size: cover;
    padding-bottom: 4rem;
    padding-top: 4rem;
   }
   p{ display: flex;
     align-items: center;}

     @media screen and (max-width: 640px) {
  .w-96 {
    width: 80%; 
    margin-left: auto; 
    margin-right: auto; 
  }

  .ml-20 {
    margin-left: auto; 
    margin-right: auto; 
  }

  .map {
    width: 100%; 
    margin: 1 auto; 
  }

  .pl-12 {
    padding-left: 1rem;
  }

  .text-3xl {
    font-size: 1.5rem; 
    text-align: center; 
    margin-bottom: 1rem; 
  }

  .flex {
    display: flex; 
    flex-direction: column; 
    align-items: center; 
  }
}



   
  </style>