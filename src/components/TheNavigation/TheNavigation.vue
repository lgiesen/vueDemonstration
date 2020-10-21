<template lang="pug">
  card#nav.mb-10
    v-app-bar(absolute)
      template
        GoBack
        v-tabs(align-with-title)
          v-tab(to="/") Home
          <!-- use all the items from the navItems.json with corresponding links -->
          v-tab(v-for="view in views" 
            :key="view.to.name" 
            :to="view.to").links {{ view.tag }}
</template>

<script>
//import the items for the navbar
import navItems from "./navItems.json";
import GoBack from "@/components/GoBack"
export default {
  name: "TheNavigation",
  components: {
    GoBack
  },
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
