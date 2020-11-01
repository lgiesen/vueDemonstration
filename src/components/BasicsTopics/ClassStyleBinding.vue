<template lang="pug">
  v-card
    v-card-title
      h2 Class and Style Binding
    v-card-text
      v-btn.mb-4.mt-4(
        :class="[isActive ? 'active' : 'disabled']",
        @click="toggleClass"
      ) Toggle my Class to change my color
      p In contrast to methods and computed properties, directives enable special reactive 
        | actions to modify the DOM inside of the HTML tag. They can be identified by their 
        | ‘v-‘ prefix. Moreover, an argument is passed by appending a colon, for instance, 
        | v-bind connects a DOM element with data or computed properties. Here the link is 
        | bound to the value of ‘url’:
        code.hljs.d-inline a(v-bind:href=”url”)
        |  The examples from the appendix use the shorthand for
        code.hljs.d-inline v-bind
        | , which leaves out the directives name: 
        code.hljs.d-inline a(:href=”url”)
        | . 
        br 
        | Similarly, you can bind other properties like classes as strings and make use of 
        | various bracket logic:  
        highlightjs(language="javascript" :code="vif") 
        | In the three examples the active or disabled class is applied, whether or not 
        | sActive has a value of true. The last example indicates that methods or computed 
        | properties (here checkIfActive) can be used as well (Class and Style Bindings — Vue.Js, n.d.).
</template>

<script>
export default {
  name: "ClassStyleBinding",
  data: () => ({
    isActive: true,
    vif: `div(:class="{active: isActive, disabled: !isActive}")
div(:class="[isActive ? 'active' : 'disabled']")
div(:class="checkIfActive")`
  }),
  methods: {
    toggleClass() {
      this.isActive = !this.isActive;
    },
    // setName: function(new_name) {
    //   this.name = new_name;
    // },
  },
  computed: {
    checkIfActive() {
      return this.isActive ? "active" : "disabled";
    },
  },
};
</script>
<style lang="scss" scoped>
.active {
  background-color: lightgreen;
  color: green;
}
.disabled {
  background-color: grey;
  color: black;
}
</style>