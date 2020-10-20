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
    path: "/routing",
    name: "Routing",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "routing" */ "./views/Routing.vue"),
    // Der webpackChunkName-Kommentar ist magisch, da dies den Namen des JS-Chunks definiert, durch den die Website geladen wird.
    //  In Vue-Devtools unter Network -> JS -> about.js
  },
  {
    path: "/state-management",
    name: "State_Management",
    component: () =>
      import(/* webpackChunkName: "state-management" */ "./views/State_Management.vue"),
  },
  {
    path: "/design-systems",
    name: "Design_Systems",
    component: () =>
      import(/* webpackChunkName: "design-systems" */ "./views/DesignSystems.vue"),
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
