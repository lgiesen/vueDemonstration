<template lang="pug">
  card#nav.mb-10
    router-link(to="/") Home
    router-link(
      v-for="view in views" 
      :key="view.to.name" 
      :to="view.to"
      ).links {{ view.tag }}
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

