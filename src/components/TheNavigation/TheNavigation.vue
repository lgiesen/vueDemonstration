<template>
  <div id="nav">
    <ul class="nav-links">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <!-- use all the items from the navItems.json with corresponding links -->
      <li v-for="view in views" :key="view.name" class="links">
        <router-link :to="view.to">{{ view.tag }}</router-link>
      </li>
    </ul>
  </div>
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
ul {
  list-style-type: none;
  * {
    display: inline;
    margin: 1rem;
  }
}
</style>
