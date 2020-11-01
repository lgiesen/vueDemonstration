<template lang="pug">
    v-card
        v-card-title
            h2 Application Instance
        v-card-text
            p The Vue or application instance in @/main.js lies at the heart of every Vue Application 
                | because it is created with central options and dependencies, which determine how the 
                | front-end is realized. During its mounting process, all properties are loaded in Vue’s 
                | reactivity system allowing a dynamic and reactive use of data, i.e. if a variable is 
                | changed, all components, who use that variable are updated. (Vue, n.d.-c).
            p Check out the 
                a(href="https://v3.vuejs.org/guide/instance.html#creating-an-instance") Vue Guide
                span  for further detail.
</template>

<script>
export default {
  name: "AppInstance"
};
</script>
<style lang="scss" scoped>
</style>