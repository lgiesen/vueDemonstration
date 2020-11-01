import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/basics",
    name: "Basics",
    component: () =>
      import(/* webpackChunkName: "basics" */ "./views/Basics.vue"),
  },
  {
    path: "/*",
    name: "404",
    component: () =>
      import(
        /* webpackChunkName: "errors" */
        "./views/errors/404.vue"
      ),
  },
];

export default new VueRouter({
  // linkExactActiveClass: "ActiveNavLinkClassName",
  mode: "history",
  routes,
});
