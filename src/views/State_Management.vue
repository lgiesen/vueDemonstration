<template lang="pug">
  v-container
    v-row
      v-col(align="center" outlined)
        h1
          | Vuex - State Management
    v-row(cols="12" justify="space-between" align="center")
      //- v-spacer
      v-col(cols="5")
        //- v-pre disables vues interpretation of code (here: curly brackets) for that block
        v-card.box(outlined) 
          v-pre In store.js: state: {no: 11}. 
            | This is referenced in State_Management.vue (this view)
            | within
            br
            | computed: {
            br
            |   return this.$store.state.no
            |  num () {
            |  },
            br
            | }
            br
            | This num can be referenced in the html template of the view
            | with double curly brackets: {{ num }}
      //- v-spacer
      v-col(cols="5")
        v-card.box(outlined) asdf
      //- v-spacer
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

.box{
  height: 40vh;
}
</style>