import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
import Roles from "@/views/Roles";
import Aulas from "@/views/Aulas";
import Pabellones from "@/views/Pabellones";

Vue.use(Router);

export default new Router({
  mode: "history",

  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/roles",
      name: "roles",
      component: Roles
    },
    {
      path: "/aulas",
      name: "aulas",
      component: Aulas
    },
    {
      path: "/pabellones",
      name: "pabellones",
      component: Pabellones
    }
  ]
});
