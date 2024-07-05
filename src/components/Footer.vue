<template>
  <footer>
    <div class="flex flex-col sm:flex-row justify-between items-center t h-auto sm:h-40 bg-gray-500 px-4 sm:px-60">
      <div class="text-center sm:text-left mb-4 sm:mb-0">
        <p class="direccion text-xl text-indigo-50">Dirección <br>Izarza Bledea,48 <br> 48150 Sondika</p>
      </div>
      <div class="text-center">
        <img src="/src/assets/imagen1.png" alt="" class="img-zaraza h-20 sm:h-auto">
      </div>
      <div class="text-center sm:text-right">
        <p class="direccion text-xl text-indigo-50">Horario <br>Martes a Domingo <br>13:00 a 16.00 <br>Sábados <br>21:00 a 23:00</p>
      </div>
    </div>
    <div class="bg-red-800">
      <h2 class="text-xl text-indigo-50 pt-2 text-center">Visita nuestras redes Sociales</h2>
      <div class="social-icons flex justify-center items-center space-x-4">
        <a href="https://x.com/IzarzaSL" target="_blank"><font-awesome-icon :icon="['fab', 'x-twitter']" class="text-darck-500 text-2xl" /> </a>
        <a href="https://www.facebook.com/RestauranteIzarza/?locale=ca_ES" target="_blank"><font-awesome-icon :icon="['fab', 'facebook']" class="text-blue-600 text-2xl" /></a>
        <a href="https://www.instagram.com/izarza1530"><font-awesome-icon :icon="['fab', 'instagram']" class="text-pink-500 text-2xl" /></a>
      </div>
      <div class="penascal-colaboraction sm:flex justify-center items-center">
        <p class="text-xl text-indigo-50 mb-2 sm:mb-0">Izarza es una empresa de Peñascal Kooperativa</p>
        <a href="https://www.grupopenascal.com/" target="_blank">
          <img src="../assets/penascal-logo-1 6.png" alt="" class="penascal w-24 sm:w-auto">
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>

</script>

<style scoped>

footer {
  text-align: center;
  
}
.img-zaraza{
  width: 100%; 
  height: auto; 
  max-height: 10rem; 
}
.horario{
  margin-top: 1rem; 
  
}
.dereccion{
  margin-bottom: 1rem; 
}
.horario p{
  font-size: 1rem; 
}
.penascal{
  height: 2rem;
  margin-left: 1rem; 
}


</style>

