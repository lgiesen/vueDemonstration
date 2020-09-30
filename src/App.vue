<template>
  <div id="app">
    <v-app>
      <!-- use the component TheNavigation by using the corresponding tag -->
      <TheNavigation />
      <router-view />
      <!-- use the component TheFooter by using the corresponding tag -->
      <TheFooter msg="Welcome to Your Vue.js App" />
    </v-app>
  </div>
</template>

<script>
// importing the navigation and the footer
// @ is an alias to ./src
import TheNavigation from "@/components/TheNavigation/TheNavigation.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  components: {
    TheNavigation,
    TheFooter,
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
