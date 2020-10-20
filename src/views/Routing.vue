<template lang="pug">
  div
    v-container
      h1.text-center.display-2.mb-10 Router
      p {{ text1 }}
        code.hljs.d-inline router-link(to="/") Home
        | {{ text2}}
        highlightjs(language="javascript" :code="nav")
        | {{ routerFile }}
        highlightjs(language="javascript" :code="routerLogic")
        | {{ webpackChunkName }}
        code.hljs.d-inline mode: "history"
        | {{ historyMode }}
        code.hljs.d-inline goBack() { return this.$router.go(-1); }
        | (Creating a Go-Back Button - A Vue.Js Lesson From Our Vue.Js..., n.d.)
</template>
<script>
export default {
  name: "Routing",
  data: () => ({
    text1: `Vue creates a one-page application. In order to have multiple sites, 
    routing by the Vue Router is required. Hence the navigation can be implemented 
    with the router-link tag: `,
    text2: `. It is advisable to make the 
    navigation links dynamic to provide clarity and maintainability. That means that 
    all navigation links except the default link are extracted into an Array or a 
    separate document, which is then imported. In this example the Vuetify-tabs were 
    used instead of the router-link tag.`,
    nav: `TheNavigation.vue
v-tabs 
  v-tab(to="/") Home
  v-tab(v-for="view in views" :key="view.to.name" :to="view.to").links {{ view.tag }}
import navItems from "./navItems.json";
data() { return { views: navItems, }; }
navItems.json: 
[ { "tag": "About", "to": { "name": "about" } }, … ]`,
    routerFile: `The router logic is comprised in router.js, where the navigation links 
    are connected to the corresponding view or respectively site by passing the property to.`,
    routerLogic: `import Home from "./views/Home.vue";
const routes = [{ path: "/", name: "Home", component: Home, }, 
{ path: "/about", name: "About", component: () => import(/* webpackChunkName: "filename" */ "./views/About.vue"), }, … ];`,
    webpackChunkName: `The default view “Home” is directly imported and loaded. 
    The other components use lazy loading to drastically improve performance: 
    In contrast to the main view, they are dynamically imported once their use is requested. 
    This route level code-splitting separates the JS into chunk files (cf. Vue-Devtools under 
    Network, JS), which can be named with the webpackChunkName comment. \n
    For a 404 page, the path would use the wildcard “*” to match all possible file paths and is 
    listed at the end of the routes so that the router does not match the 404 page unintentionally 
    (How to Create a 404 Not Found Route and Page with Vue Router - A..., n.d.). \n
    The default router mode is hash-mode, which uses a URL hash to reflect the URL so that a 
    complete page reload is avoided. Switching to history-mode by adding `,
    historyMode: `to the export of VueRouter resolves the hashtag (“…/#/”) in the URL path and 
    still avoids page reload because of the history.pushState API (How to Pass Vue Router Params 
    as Props to Components - A Vue.Js..., n.d.). In history mode it is simple to go to the previous 
    page, because of the history stack: `
  }),
};
</script>
<style lang="scss" scoped>
img {
  max-width: 100px;
}
</style>