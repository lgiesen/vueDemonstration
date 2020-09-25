<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- Use the Footer component as a tag -->
    <Footer msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Footer,
  },
};
</script>
