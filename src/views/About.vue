<template lang="pug">
  v-container
    h3.text-center.display-2.font-weight-bold.mb-10 Why Vue.js?
    img(alt="Vue logo" src="../assets/logo.png")
    p Presentations today to put the puzzle pieces together:
    h2 Monolithic or Microsoervice Architecture

    h3 Monolithic Architecture
    p containered with docker
    ul good for small and bad for big webapps
      li simple to develop, deploy and manage
      li easy to comprehend for a small webapp
      li easy to scale up
    ul disadvantages might not apply to this project
      li language and framework lock 
      li deployment as a single unit
      li development slows down
    
    h3 Microsoervice Architecture
    p Lorem ipsum

    h3 Backend Tools
      p Flask
    p use Git and GitLab 
    p Insights from other presentations regarding ....
    a(href="https://www.youtube.com/watch?v=IwT_pBcDmSI") YT-Video about Monolithic Architecture
    br
    a(href="https://mlsdev.com/blog/128-microservices-vs-monoliths-how-to-understand-when-it-s-time-to-use-the-former-option") Article about Monolithic Architecture vs Microsoervices
</template>
<script>
export default {
  name: "About",
  data: () => ({
  }),
  computed: {
  }
};
</script>
<style lang="scss" scoped>
img {
  max-width: 100px;
}
</style>