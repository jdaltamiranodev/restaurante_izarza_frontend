<template>
  <div class="body">
    <div class="bg-cover relative">
      <img src="/public/carrussel/Fachada_izarza 2.jpg" alt="Descripción de la imagen" class="w-full h-full object-cover">
    </div>

    <div class="bg-red-800 flex gap-10 p-5 h-3/6 mt-1">
     <div class="rounded-lg p-8 flex flex-col justify-between mr-40 ml-40 bg-gray-500 bg-opacity-5">
        
          <h3 class="text-white text-3xl font-bold text-center ">RESTAURANTE IZARZA</h3>
          <p class="text-white text-2xl text-center p-20 text-small-center">
  El restaurante está ubicado en el edificio de una antigua escuela de barriada, que <span class="text-black-600 font-bold">Peñascal S. Coop</span>, rehabilitó para instalar <span class="text-black-600 font-bold">UNA ESCUELA DE HOSTELERÍA </span> que funciona de manera paralela a la del Restaurante e imparte formación a aquellas personas que quieran introducirse en el mundo de la Hostelería, o bien a quienes estando ya en el sector deseen lograr un mayor nivel de profesionalidad a través de los cursos de reciclaje que en ella se organicen y un restaurante con un compromiso social que abre al público.
</p>


        
       
      </div>
      <div class="flex flex-col justify-between ml-10">
  <h3 class="text-white text-3xl font-bold text-center">Conoce este lugar impresionante</h3>

  <div class="flex flex-wrap  justify-center items-center gap-25">
    <img src="../assets/8793-removebg-preview 4.png" alt="" class="with"> 
    <img src="../assets/descarga__2_-removebg-preview 4.png" alt="" class="with">
    <img src="../assets/images-removebg-preview 4.png" alt="" class="with">
  </div>

  <img src="/public/carrussel/Monolito.jpg" alt="" class="with-">
</div>

    </div>
  </div>
</template>

<script>
 
</script>

<style scoped>
  .bg-cover {
    height: 40rem; 
    background-size: cover;
    position: relative;
  }

  .bg-gray-500 {
    width: 60rem;
    height: 50rem;
  }
  .with{
    width:10rem ;
    height:10rem ;}
      
  .with-{
    width:45rem;
    height: 30rem; 
     
  }
  @media screen and (max-width: 1280px) {
    .bg-cover {
    height: 20rem; 
    
  }
    .bg-red-800 {
    text-align: center; 
    align-items: center; 
  }
  .flex-wrap-mobile {
  display: flex;
  flex-wrap: nowrap; 
  overflow-x: auto; 
  -webkit-overflow-scrolling: touch; 
  gap: 1rem; 
  padding: 1rem 0; 
}
  .bg-gray-500 {
    width: 90%; 
    max-width: 600px; 
    margin: 0 auto; 
  }

  .with {
  flex: 0 0 auto; 
  width: calc(33.333% - 1rem); 
  max-width: 200px; 
  height: auto; 
}

  .with- {
    width: 80%;
    height: 30rem;
    margin: 0 auto 1rem; 
    margin-top: 1rem;
    
  }

  .bg-red-800 {
    flex-direction: column; 
    gap: 1rem; 
    padding: 2rem; 
  }
}

@media screen and (max-width: 640px) {
  .text-3xl {
    font-size: 2rem; 
  }

  .with {
    width: calc(33.333% - 1rem); 
  }

  .with- {
    width: 80%; 
    height: 20rem; 
    margin-top: 1rem; 
  }
  .text-small-center {
    font-size: 0.9rem; 
    text-align: center; 
    width: 130%; 
    margin:  -2rem; 
  }
}



</style>