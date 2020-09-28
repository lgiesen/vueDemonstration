<template>
  <span class="go-back">
    <button @click="goBack">&larr; Go Back</button>
  </span>
</template>
<script>
export default {
  methods: {
    goBack() {
      // go back/forward by how many steps in the history stack
      return this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
.go-back {
  display: flex;
}
</style>