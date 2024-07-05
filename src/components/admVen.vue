<template>
    <div class="container mx-auto p-4">
    <h2 class="bg-red-500 text-white text-center py-2 mt-2">Ventana de administrador</h2>

    <div class="flex flex-wrap mt-4">

        <div class="w-full md:w-7/12 px-2">

            <h2 class="bg-green-500 text-white text-center py-2">Lista Menu del Día</h2>

            <table class="table-auto w-full mt-4 border border-gray-300">
                <thead>
                    <tr class="bg-gray-200">
                        <th class="border px-4 py-2">Nombre  de plato</th>
                        <th class="border px-4 py-2">alergenos</th>
                       
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="border px-4 py-2"></td>
                        <td class="border px-4 py-2"></td>
                        <td class="border px-4 py-2"></td>
                        <td class="border px-4 py-2"></td>
                        <td class="border px-4 py-2">
                            <a href="#" class="mr-1"><button class="bg-yellow-500 text-white px-2 py-1 rounded">Editar</button></a>
                            <a href="#"><button class="bg-red-500 text-white px-2 py-1 rounded">Borrar</button></a>
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>

        <div class="w-full md:w-5/12 px-2 mt-4 md:mt-0">
            <div v-if="isEditing">
                <h2 class="bg-yellow-500 text-white text-center py-2">Editar platos</h2>
                <form @submit.prevent="actualizarPlatot">
                    <div class="flex flex-wrap">
                        <div class="w-full md:w-1/2 px-2 mb-4">
                            <label class="block text-left ml-2">Nombre de plato</label>
                            <input type="text" v-model="Plato.plato" class="w-full px-4 py-2 border rounded">
                        </div>
                        <div class="w-full md:w-1/2 px-2 mb-4">
                            <label class="block text-left ml-2">alergenos</label>
                            <input type="email" v-model="Plato.alergenos" class="w-full px-4 py-2 border rounded">
                        </div>
                    </div>
                   
                    <button type="submit" class="bg-green-500 text-white px-4 py-2 rounded ml-2">Update</button>
                </form>
            </div>

            <div v-else>
                <h2 class="bg-blue-500 text-white text-center py-2">Agregar Plato Nuevo a Lista</h2>
                <form @submit.prevent="createStudent">
                    <div >
                    <div class="flex flex-wrap">
                        <div class="w-full md:w-1/2 px-2 mb-4">
                            <label class="block text-left ml-2">Nombre del Plato</label>
                            <input type="text" v-model="nuevoPlato.plato" class="w-full px-4 py-2 border rounded">
                        </div>
                        <div class="w-full md:w-1/2 px-2 mb-4">
                            <label class="block text-left ml-2">Alergenos</label>
                            <input type="text" v-model="nuevoPlato.alergenos" class="w-full px-4 py-2 border rounded">
                        </div>
                    </div>
                </div>
                    <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded ml-2">Guardar</button>
                </form>
            </div>
        </div>

    </div>
</div>

</template>
<script>
export default {
  data() {
    return {
      isEditing: false,
      Plato: {
        plato: '',
        alergenos: ''
     
      },
      nuevoPlato: {
        plato: '',
        alergenos: ''
       
      }
    };
  },
  methods: {
    crearPlato() {
      // Handle creating a new student
      console.log('Nuevo Plato data:', this.nuevoPlato);
    },
    actualizarPlato () {
      // Handle updating student details
      console.log('actualizar Plato data:', this.Plato);
    }
  }
};
</script>
