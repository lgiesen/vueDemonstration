<template lang="pug">
  v-card
    v-card-title
      h2 Class and Style Binding
    v-card-text
      div.text-xs-center
        v-btn(
          :class="[isActive ? 'active' : 'disabled']",
          @click="toggleClass"
        ) Toggle my Class to change my color
      p You can pass arguments to the 
        code.hljs.d-inline v-bind
        |  directive so that you can add classes based on boolean expressions.
        | The code used for the button is:
        highlightjs(language="javascript" :code="toggleClassText") Toggle my Class
        | active and disabled are classes, which are applied based on the data isActive
        highlightjs(language="css" :code="css")
        | By pressing the button, you toggle the value of isActive
        | and therefore add disabled and remove active or the other way around.
        br 
        br
        | Luckily, there are more beautiful ways of implementation:
        br 
        | First one is:
        highlightjs(language="javascript" :code="option1") 
        br
        | Second one is:
        highlightjs(language="javascript" :code="option2") 
        | in combination with the computed property:
        highlightjs(language="javascript" :code="option2computed") 
</template>

<script>
export default {
  name: "ClassStyleBinding",
  data: () => ({
    isActive: true,
    toggleClassText: `v-btn(:class="[isActive ? 'active' : 'disabled']", \n@click="toggleClass") Toggle my Class`,
    css: `.active { background-color: lightgreen; color: green; } \n.disabled { background-color: grey; color: black; }`,
    option1: `:class="[isActive ? 'active' : 'disabled']`,
    option2: `:class="checkIfActive"`,
    option2computed: `checkIfActive(){ return this.isActive ? "active" : "disabled"; }`,
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