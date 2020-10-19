<template lang="pug">
  span.go-back.ml-10
    v-btn(@click="goBack" outlined icon color="primary") 
      v-icon(size="24px") mdi-arrow-left
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