import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Loader from "../views/Loader.vue";
import VistaFundamentos from "../views/VistaFundamentos.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/loader",
    name: "loader",
    component: Loader
  },
  {
    path: "/vistafundamentos",
    name: "fundamentos",
    component: VistaFundamentos
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
