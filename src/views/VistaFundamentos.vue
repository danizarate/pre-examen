<template>
  <Menu />
</template>

<script>
import Menu from "@/components/Menu.vue";
/* import servicioDatos from "../services/ServicioDatos" */
export default {
  name: "Fundamentos",
  components: {
    Menu
  }
};
/* 
methods:{
    async obtenerUser(){
          this.loading = true; // Se cambia el estado del LOADING a TRUE para mostrar el loader en pantalla.
          setTimeout(()=>{
            let servicio = new servicioDatos(); // Se llama al servicio creado para accesar a la URL del usuario
            servicio.getAll().then((response)=>{
                return response.json() // Se le solicita que la respuesta sea de tipo JSON
            })
            .then(this.procesarUser)
            }, 1000)
            .catch((error)=>{
                  console.log(error) // Se muestra el error en la consola
                  this.loading = false; // Se establece el loader a false para que no se cargue // Se llama a la funcion PROCESARUSER para utilizar los datos obtenidos de la api
            })
      
    },
    procesarUser(response){
      
      this.arrayUser = response;
    }
}
 */
</script>

<style></style>
