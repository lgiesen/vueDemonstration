<template lang="pug">
  v-card
    v-card-title
      h2 Class and Style Binding
    v-card-text
      v-btn(
        :class="[isActive ? 'active' : 'disabled']",
        @click="toggleClass"
      ) Toggle my class
      p
        v-pre You can pass arguments to the v-bind directive so that
          | you can add classes based on boolean expressions.
          | The code used for the button is:
          | v-btn(:class="{active: isActive, disabled:
          | !isActive}" @click="toggleClass") Toggle my class
          | active and disabled are classes, which are applied based on the data isActive
          | By pressing the button, you toggle the value of isActive
          | and therefore add disabled and remove active or the other way around.
          br 
          br
          | Luckily, there are more beautiful ways of implementation:
          br 
          | First one is:
          | :class="[isActive ? 'active' : 'disabled']
          br
          | Second one is:
          | :class="checkIfActive" in combination with the computed property:
          | checkIfActive(){ return this.isActive ? "active" : "disabled"; }
</template>

<script>
export default {
  name: "ClassStyleBinding",
  data: () => ({
    isActive: true,
    // name: "Default Name",
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