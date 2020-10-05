<template lang="pug">
    v-container
      v-row
        v-col(align="center" outlined)
          h1
            | Vuex - State Management
      v-row(cols="12")
        v-spacer
        v-col(cols="5")
          //- v-pre disables vues interpretation of code (here: curly brackets) for that block
          v-card.box(outlined) 
            p In store.js: state: {no: 11}. 
              | This is referenced in State_Management.vue (this view)
              | within
              br
              | computed: {
              br
              |  viewComputed () { return this.$store.state.storeVariable },
              br
              | }
              br
              | viewComputed can be referenced in the html template of the view
              | with double curly brackets: 
              span(v-pre) {{ viewComputed }}
        v-spacer
        v-col(cols="5")
          v-card.box(outlined) Lorem ipsum
            p storeVariable: {{ storeVariable }}
            p getRequestCount: {{getRequestCount}} 
            p getValidRequests: {{getValidRequests}}
            v-text-field(v-model.number="id")
            p getRequestById: {{getRequestById(id)}}
        v-spacer
      v-row
</template>

<script>
// importing map-Helpers for facilitating computed property creation
// import { mapState, mapMutations, mapGetters } from 'vuex';
// import { mapState } from 'vuex';
import { mapGetters } from 'vuex';
// import { mapMutations } from 'vuex';
// import { mapActions } from 'vuex';

export default {
  name: "State_Management",
  data: () => ({
    id: 2,
  }),
  // Option 1: normal
  // computed: {
  //   viewComputed () {
  //     return this.$store.state.storeVariable
  //   },
  // Option 2: using mapState -- ggf. falsch
  // computed: mapState({
  //   viewComputed: (state) => state.storeVariable,
  // }),
  computed: 
    // mapState(['storeVariable']), // does not go together with mapGetters
    mapGetters([
        'getRequestCount', 'getValidRequests', 'getRequestById'
    ]),
};
</script>

<style lang="scss" scoped>
.box {
  height: 40vh;
  padding: 0.75em 1em;
}
</style>
