<template lang="pug">
  v-app#app
    <!-- use the component TheNavigation by using the corresponding tag -->
    TheNavigation
    GoBack
    router-view
    <!-- use the component TheFooter by using the corresponding tag -->
    TheFooter
</template>

<script>
// importing the navigation and the footer
// @ is an alias to ./src
import TheNavigation from "@/components/TheNavigation/TheNavigation.vue";
import TheFooter from "@/components/TheFooter.vue";
import GoBack from "@/components/GoBack";

export default {
  components: {
    TheNavigation,
    TheFooter,
    GoBack
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>