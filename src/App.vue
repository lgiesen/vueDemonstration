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
// importing the navigation and the footer
// @ is an alias to ./src
import TheNavigation from "@/components/TheNavigation/TheNavigation.vue";
import TheFooter from "@/components/TheFooter.vue";

// mapState, mapGetters are a helpers to facilitate the creation of computed properties 
import { mapState } from 'vuex';

export default {
  components: {
    TheNavigation,
    TheFooter,
  },
  computed: mapState({
      num: state => state.no,
    })
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
