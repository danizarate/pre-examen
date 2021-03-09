<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <!-- CARGA DEL LOADER PASO 1 -->
    <div v-if="loading == true">
      <Loader />
    </div>
    <div v-else>
      <!-- PRESENTACION DEL ALUMNO - PASO 1 -->
      <Menu />
      <!-- CARD para la foto del estudiante y sus datos -->
      <div class="container">
        <div class="row">
          <div class="col-md-5ths col-lg-5ths col-xs-6 col-sm-4 pt-2 centrar">
            <div class="card" style="width: 18rem;">
              <img :src="avatar" class="card-img-top" alt="..." />
            </div>
          </div>
          <!-- LISTA DE GRUPO PARA EL PERFIL Y LOS CURSOS DE USUARIO -->

          <div class="accordion accordion-flush " id="accordionFlushExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingOne">
                <button
                  class="accordion-button collapsed bg-primary"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  Informacion del Usuario
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  <h3>
                    <strong>{{
                      firstname + " " + lastname + ", " + email
                    }}</strong>
                  </h3>
                  <div class="d-inline p-3 bg-none">
                    <img
                      src="../assets/img/tweeter.png"
                      class="icono-img"
                      alt="..."
                    />
                    <a :href="twitter.url">{{ twitter.url }}</a>
                  </div>
                  <div class="d-inline p-3 bg-none">
                    <img
                      src="../assets/img/gitHub.png"
                      class="icono-img"
                      alt="..."
                    />
                    <a :href="github.url">{{ github.url }}</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingTwo">
                <button
                  class="accordion-button collapsed bg-primary"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  Cursos Disponibles
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div
                  class="accordion-body"
                  v-for="(item, index) in arrCursos"
                  :key="index"
                >
                  <button class="btn btn-primary">
                    <router-link class="btn-primary" to="VistaFundamentos">{{
                      arrCursos[index].attributes.name
                    }}</router-link>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- ***************************************************** -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
/* import HelloWorld from "@/components/HelloWorld.vue"; */
import Menu from "@/components/Menu.vue";
import servicioDatos from "../services/ServicioDatos";
import Loader from "../views/Loader";
export default {
  name: "Home",
  components: {
    /* HelloWorld */
    Menu,
    Loader
  },
  data() {
    return {
      arrayUser: [],
      arrayCursos: [],
      arrCursos: [],
      loading: false,
      email: "",
      avatar: "",
      bio: "",
      birthday: "",
      firstname: "",
      lastname: "",
      twitter: {
        nick: "",
        url: ""
      },
      github: {
        nick: "",
        url: ""
      },
      course30: {
        cover: "",
        name: "",
        status: "",
        slug: ""
      },
      course40: {
        cover: "",
        name: "",
        status: "",
        slug: ""
      }
    };
  },
  methods: {
    async obtenerUser() {
      this.loading = true; // Se cambia el estado del LOADING a TRUE para mostrar el loader en pantalla.
      setTimeout(() => {
        let servicio = new servicioDatos(); // Se llama al servicio creado para accesar a la URL del usuario
        servicio
          .getAll()
          .then(response => {
            return response.json(); // Se le solicita que la respuesta sea de tipo JSON
          })
          .then(this.procesarUser);
      }, 1000).catch(error => {
        console.log(error); // Se muestra el error en la consola
        this.loading = false; // Se establece el loader a false para que no se cargue // Se llama a la funcion PROCESARUSER para utilizar los datos obtenidos de la api
      });
    },
    procesarUser(response) {
      /* console.log (this.loading) */
      this.arrayUser = response;
      /* console.log(this.arrayUser.data.attributes.email); */
      this.email = this.arrayUser.data.attributes.email;
      this.avatar = this.arrayUser.included[0].attributes.avatar;

      this.bio = this.arrayUser.included[0].attributes.bio;
      this.birthday = this.arrayUser.included[0].attributes.birthday;
      this.firstname = this.arrayUser.included[0].attributes.firstname;
      this.lastname = this.arrayUser.included[0].attributes.lastname;

      this.github.nick = this.arrayUser.included[1].attributes.name;
      this.github.url = this.arrayUser.included[1].attributes.url;

      this.twitter.nick = this.arrayUser.included[2].attributes.name;
      this.twitter.url = this.arrayUser.included[2].attributes.url;

      this.course30.cover = this.arrayUser.included[3].attributes.cover;
      this.course30.name = this.arrayUser.included[3].attributes.name;

      this.loading = false;
      /* console.log(this.arrayUser) */
      /* 
      this.course30.status = this.arrayUser.included[3].attributes.learning[0].assesment.status;
      this.courses.assesment.progress = this.arrayUser.included[4].learning[0].assesment.name;
      this.courses.assesment.total = this.arrayUser.included[0].attributes.lastname;
         */
      this.arrayCursos = this.arrayUser.included;
      this.arrCursos = this.arrayCursos.filter(p => p.type == "course");
      console.log(this.arrCursos);
    }
  },
  mounted() {
    this.obtenerUser(); //Llamamos a nuestro metodo ObtenerUser como parte del ciclo de vida
  }
};
</script>

<style scoped>
.centrar {
  margin: 0 auto;
}
.icono-img {
  width: 100px;
  height: 100px;
}
.bordeDiv {
  border: solid 2px greenyellow;
}
router-link {
  text-decoration: none;
}
</style>
