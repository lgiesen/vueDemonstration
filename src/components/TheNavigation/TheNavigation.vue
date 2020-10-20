<template lang="pug">
  card#nav
    v-app-bar(absolute dense)
      //- props can be used to customize the v-img properties
      template(v-slot:img="{ props }")
        v-img(v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)")
      template(v-slot:extension)
        v-tabs(align-with-title)
          v-tab(to="/") Home
          <!-- use all the items from the navItems.json with corresponding links -->
          v-tab(v-for="view in views" 
            :key="view.name" 
            :to="view.to").links {{ view.tag }}
</template>

<script>
//import the items for the navbar
import navItems from "./navItems.json";
export default {
  name: "TheNavigation",
  data() {
    return {
      views: navItems,
    };
  },
};
</script>

<style scoped lang="scss">
$primary: #6238b4;
#nav {
  padding: 30px;
  text-align: center;
  width: 100vw;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: $primary;
    }
  }
}
</style>
