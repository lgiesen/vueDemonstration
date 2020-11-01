<template lang="pug">
  v-container
    h1.text-center.display-2.mb-10 Router
    h2 Presentation
    ul
      li Switch between views (=site)
    img(src="@/assets/images/router.png")
    p In practice:
    ul
      li Dynamic: externalize navigation links
      li mode: “history” &rarr; resolve …/#/ in URL + history stack
      li webpackChunkName
      div.block
    h2 Seminar Thesis
    p {{ text1 }}
      code.hljs.d-inline router-link(to="/") Home
      | {{ text2 }}
      br
      | {{ text3 }}      
      br
      | {{ text3 }}

</template>
<script>
export default {
  name: "Routing",
  data: () => ({
    text1: `As mentioned above, routing is required to handle multiple pages or 
      views. Hence, the navigation can be implemented with the router-link tag, 
      which provides the router with the link to the view: `,
    text2: ` It is advisable to make the navigation links dynamic to provide 
      clarity and maintainability. That means that all navigation links except 
      the default link are extracted into an Array or a separate document, which 
      is then imported. The router logic is located in @/router/router.js, where 
      the navigation links are connected to the corresponding view by passing the 
      property “to”.`,
    text3: `This implementation directly imports and loads the default view “Home”, 
      whereas the other views use Lazy Loading to drastically improve performance: 
      They are dynamically imported once their use is requested. This route level 
      code-splitting separates the JS into chunk files (cf. Vue-Devtools under 
      Network, JS), which can be named using the webpackChunkName comment (VueSchool, 
      n.d.-c). For a 404 page path would use the “*”-wildcard to match all possible 
      file paths. This component is listed at the end of the routes so that the 
      router does not match the 404 page unintentionally (VueSchool, n.d.-b).`,
    text4: `The default router mode is hash mode, which uses a URL hash to reflect the URL 
      so that an unnecessary and complete page reload is avoided. Switching to 
      history-mode by adding mode: "history" to the export of Vue Router resolves 
      the hashtag (“…/#/”) in the URL path and still avoids the redundant page reload 
      because of the history.pushState API (VueSchool, n.d.-d). History mode allows 
      to easily go back to the previous page, because of the history stack, where the 
      previously visited pages are stored: goBack() { return this.$router.go(-1); } 
      (cf. Appendix, 2.10 Routing) (VueSchool, n.d.-a)`
    
  }),
};
</script>
<style lang="scss" scoped>
img {
  height: 150px;
}
</style>