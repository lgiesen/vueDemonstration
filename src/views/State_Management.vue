<template lang="pug">
  v-container
    v-row
      v-col
        h1.text-center.display-2.mb-10 Vuex - State Management
        v-row
          v-col
            img(src="@/assets/images/passInfo.png")
            p Quelle: 
              a(href="https://www.vuemastery.com/courses/mastering-vuex/intro-to-vuex/") (Intro to Vuex - Mastering Vuex | Vue Mastery, n.d.)
            p &rarr; Overly complicated
            ul
              li Complexity: global ”single source of truth” &rarr; maintainability
          v-col
            img(src="@/assets/images/vuex_table.png")
    div.block
    h4.text-center 
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
    v-row.mt-10
      p On the one hand, small applications pass down properties and emit 
        | events up between different levels of components, which is 
        | manageable for simple websites. On the other hand, complex applications 
        | require organization to ensure maintainability, which is achieved by the 
        | state management library Vuex. 
        br
        | It provides a centralized and reactive storage container for globally 
        | accessible states. Additionally, getters are similar to computed properties 
        | but offer higher efficiency when used multiple times. Moreover, actions 
        | mirror the locally used methods, but they may contain asynchronous elements, 
        | which is suitable for API calls. Mutations commit and keep track of state 
        | change to make it understandable and manageable. Synchronization is mandatory 
        | because multiple changes could affect one state at the same time leading to 
        | race conditions. Hence, it is advisable that actions receive an API response, 
        | process it and forward the information to mutations. Concluding, Vuex is similar 
        | to the local instance with additional adaptations for global use and state change.
        br
        | Store variables may be accessed by using this.$store and specifying the path, 
        | e.g. this.$store.state.storeVariable to use the state storeVariable. Moreover, 
        | map helpers can be used to simplify the creation of computed properties and 
        | methods in the local instance (cf. Appendix, 2.11 State Management). As an 
        | overview, Vuex helps to access state from any component and to manage and 
        | keep track of state change (VueMastery, n.d.).

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
img {
  width: 40vw;
}
</style>
