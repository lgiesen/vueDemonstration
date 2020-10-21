<template lang="pug">
    v-container
      v-row
        v-col(align="center")
          h1.text-center.display-2.mb-10 Vuex - State Management
          h4 
            a(href="https://scrimba.com/scrim/cMPa2Uk?pl=pnyzgAP") Learn with Tutorial
      v-row(cols="12")
        v-spacer
        v-col(cols="6")
          //- v-pre disables vues interpretation of code (here: curly brackets) for that block
          v-card.box 
            v-card-title Referencing Vuex Store
            v-card-text In store.js: state: {no: 11}. 
              | This is referenced in State_Management.vue (this view)
              | within
              br
              | computed: {
              br
              |  viewComputed () { return this.$store.state.clickAmount },
              br
              | }
              br
              | viewComputed can be referenced in the html template of the view
              | with double curly brackets: 
              span(v-pre) {{ viewComputed }}
        v-spacer
        v-col(cols="6")
          v-card.box
            v-card-title mapGetters
            v-card-text
              p getRequestCount: {{getRequestCount}} 
              p getValidRequests: {{getValidRequests}}
              v-text-field(v-model.number="id")
              p getRequestById: {{getRequestById(id)}}
        v-spacer
      v-row
        v-spacer
        v-col(cols=6)
          v-card.box 
            p clickAmount: {{ clickAmount }}
            v-btn(@click="incrementVarDelayed") delayed increment
            v-btn(@click="incVar") direct increment
        v-spacer
        v-col(cols=6)
          v-card.box
        v-spacer
</template>

<script>
// importing map-Helpers for facilitating computed property creation
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
// import { mapState } from 'vuex';
// import { mapGetters } from 'vuex';
// import { mapMutations } from 'vuex';
// import { mapActions } from 'vuex';

export default {
  name: "State_Management",
  data: () => ({
    id: 123,
  }),
  // Option 1: normal
  // computed: {
  //   viewComputed () {
  //     return this.$store.state.clickAmount
  //   },
  // Option 2: using mapState -- ggf. falsch
  // computed: mapState({
  //   viewComputed: (state) => state.clickAmount,
  // }),
  computed: {
    ...mapState(['clickAmount']), // does not go together with mapGetters
    ...mapGetters([
        'getRequestCount', 'getValidRequests', 'getRequestById'
    ]),},
  methods: {
    incVar(){
      this.$store.dispatch('incVar')
    },
    // Option 1:
    // incrementVarDelayed(){
    //   this.$store.dispatch('incrementVarDelayed')
    // },
    ...mapMutations(['incVar']),
    ...mapActions(['incrementVarDelayed'])
  }
};
</script>

<style lang="scss" scoped>
.box {
  height: 40vh;
  padding: 0.75em 1em;
}
</style>
