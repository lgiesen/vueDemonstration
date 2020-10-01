<template lang="pug">
  div.about
    v-container.text-center
      GoBack
      h1 This is an about page
      img(alt="Vue logo" src="../assets/logo.png")
</template>
<script>
import GoBack from "@/components/GoBack";
export default {
  components: { GoBack },
};
</script>