<template lang="pug">
    v-card
        v-card-title
            h2 Component System
        v-card-text
            p {{ text }}
              highlightjs(language="javascript" :code="app")
            v-btn(rounded href="https://github.com/lgiesen/vueDemonstration/blob/master/src/App.vue") 
                v-icon mdi-link
                |  view complete App.vue file
</template>

<script>
export default {
  name: "ComponentSystem",
  data: () => ({
    text: `Websites can be broken down into smaller components like the navigation component. These components may also consist out of subcomponents, so the navigation component may have a button to go to the previously visited page and navigation links. 
Additionally, a webpage is a component, which is called a view. The @/App.vue serves as a container for all views because they are auto injected by the router-view tag. Consequently, Vue is a single-page application, because all views are located within @/App.vue. The Vue Router manages these views and decides which to display. 
Hence, global components like the footer and the navigation bar are integrated into this file because of its global effect. This injection of components is achieved by importing, registering and using them, which enables simple reuse of components (cf. Appendix, 2.9 Component System) (Vue, n.d.-c; VueSchool, n.d.-e).
`,
    app: 
`template lang="pug":
  v-app#app
    //- use the component TheNavigation by using the corresponding tag
    TheNavigation
    //- insert views
    router-view
    TheFooter 

script:
// importing the navigation and the footer
import TheNavigation from "@/components/TheNavigation/TheNavigation.vue";
import TheFooter from "@/components/TheFooter.vue";
export default &#123;
  components: &#123;
    TheNavigation,
    TheFooter
  &#125;,
&#125;;
`,
  })
};
</script>
<style lang="scss" scoped>
</style>