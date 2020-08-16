import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
import Roles from "@/views/Roles";

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
    }
  ]
});
