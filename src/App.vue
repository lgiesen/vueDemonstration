<template>
  <div id="app">
    <!-- use the component TheNavigation by using the corresponding tag -->
    <TheNavigation />
    <router-view />
    <!-- use the component TheFooter by using the corresponding tag -->
    <TheFooter msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to ./src
import TheNavigation from "@/components/TheNavigation.vue";
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
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
