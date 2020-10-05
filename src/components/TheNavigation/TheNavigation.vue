<template lang="pug">
  div#nav
    ul.nav-links
      li
        router-link(to="/") Home
      <!-- use all the items from the navItems.json with corresponding links -->
      li(v-for="view in views" :key="view.name").links
        router-link(:to="view.to") {{ view.tag }}
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

ul {
  list-style-type: none;
  * {
    display: inline;
    margin: 1rem;
    text-decoration: none;
  }
}
#nav {
  padding: 30px;
  text-align: center;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: $primary;
    }
  }
}
</style>
