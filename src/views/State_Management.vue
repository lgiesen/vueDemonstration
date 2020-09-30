<template lang="pug">
  v-container
    v-row
      v-col(align="center")
        h1.display-3.warning--text.font-weight-bold 
          | Vuex - State Management
    v-row
      //- v-pre disables vues interpretation of code (here: curly brackets) for that block
      p(v-pre) In store.js: state: {no: 11}. 
        | This is referenced in State_Management.vue (this view)
        | within
        br
        | computed: {
        br
        |  num () {
        |   return this.$store.state.no
        |  },
        br
        | }
        br
        | This num can be referenced in the html template of the view
        | with double curly brackets: {{ num }}
</template>

<script>
export default {
  name: "State_Management",
  computed: {
    num () {
      return this.$store.state.no
    },
  }
};
</script>

<style lang="scss" scoped>
</style>