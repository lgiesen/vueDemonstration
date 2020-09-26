import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    // Der webpackChunkName-Kommentar ist magisch, da dies den Namen des JS-Chunks definiert, durch den die Website geladen wird.
    //  In Vue-Devtools unter Network -> JS -> about.js
  },
  // {
  //   path: "/*",
  //   name: "404",
  //   component: () =>
  //     import(
  //       /* webpackChunkName: "errors" */
  //       "../views/errors/404.vue"
  //     ),
  // },
];

const router = new VueRouter({
  routes,
});

export default router;
