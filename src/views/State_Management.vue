<template lang="pug">
  v-container
    v-row(justify="start")
      v-col(align="center")
        h1.display-3.warning--text.font-weight-bold
          | Vuex - State Management
    v-row
      p In store.js: state: {no: 11}. 
      | This is referenced in State_Management.vue (this view)
      | within 
      br
      | computed: {
      |  num () {
      |   return this.$store.state.no
      |  },
      | }
      br
      | This num can be referenced in the html template of the view
      | with double curly brackets: {{num}}
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