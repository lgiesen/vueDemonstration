<template lang="pug">
  v-card
    v-card-title
      h2 Class and Style Binding
    v-card-text
      v-btn.mb-4.mt-4(
        :class="[isActive ? 'active' : 'disabled']",
        @click="toggleClass"
      ) Toggle my Class to change my color
      p Special reactive actions to modify the DOM are enabled by directives, which use a 
        | ‘v-‘-prefix. By appending a colon, you can pass an argument. For instance, 
        code.hljs.d-inline v-bind
        | connects a DOM element with data or computed properties. Here the image source 
        | link is bound to the value of ‘url’  
        code.hljs.d-inline img(v-bind:src=”url”)
        | . The shorthand for v-bind leaves out the directives name: 
        code.hljs.d-inline img(:src=”url”)
        | .
        br
        | Similarly, you can bind other properties like classes as strings and make use of 
        code.hljs.d-inline :class="{active: isActive, disabled: !isActive}"
        | , 
        code.hljs.d-inline :class="[isActive ? 'active' : 'disabled']"
        |  or 
        code.hljs.d-inline :class="checkIfActive"
        | , where checkIfActive a method or a computed property is (Class and Style Bindings — Vue.Js, n.d.).
        
        | various bracket logic:
        highlightjs(language="javascript" :code="toggleClassText") Toggle my Class
        | active and disabled are classes, which are applied based on isActive
        | By pressing the button, you toggle the value of isActive
        | and therefore add disabled and remove active or the other way around.
        br
        | Another option out of the various ways of implementation is:
        highlightjs(language="javascript" :code="option2") 
</template>

<script>
export default {
  name: "ClassStyleBinding",
  data: () => ({
    isActive: true,
    toggleClassText: `v-btn(:class="[isActive ? 'active' : 'disabled']", \n@click="toggleClass") Toggle my Class`,
    option1: `:class="[isActive ? 'active' : 'disabled']`,
    option2: 
`:class="checkIfActive"
...
export default { computed: {
  checkIfActive () { return this.isActive ? "active" : "disabled"; }
} }`,
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