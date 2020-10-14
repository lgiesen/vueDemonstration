<template lang="pug">
    v-card
        v-card-title
            h2 Application Instance
        v-card-text
            p The Vue or Application Instance in @/main.js is at the heart of every 
            | Vue Application because it is created with central options and 
            | dependencies. During its mounting process, all properties from data 
            | are loaded in a reactivity system.
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