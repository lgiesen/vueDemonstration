<template lang="pug">
    v-card
        v-card-title
            h2 Component System
        v-card-text
            p {{ text }}
            highlightjs(language="javascript" :code="app")
            v-btn(rounded href="https://github.com/lgiesen/vueDemonstration/blob/master/src/App.vue") 
                v-icon mdi-link
                |  view complete code
</template>

<script>
export default {
  name: "ComponentSystem",
  data: () => ({
    text: `Websites can be broken down to smaller components, some of which are used multiple times, 
    for example the navigation or items on Amazon. The @/App.vue serves as a container for all pages, 
    because views are auto injected. Hence global components like the footer and the navigation bar 
    are integrated into this file because of its global effect (Components Basics — Vue.Js, n.d.; 
    Learn Vue.Js Components in This FREE Video Course, n.d.).`,
    app: 
`TheNavigation //- using component
router-view //- view auto-injection
TheFooter
...
import TheNavigation from "@/components/TheNavigation.vue"; //import component
import TheFooter from "@/components/TheFooter.vue";
export default { components: { TheNavigation, TheFooter, }, }; //registering component`,
  })
};
</script>
<style lang="scss" scoped>
</style>