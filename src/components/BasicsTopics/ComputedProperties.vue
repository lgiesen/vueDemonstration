<template lang="pug">
    v-card
        v-card-title
            h2 Computed Properties
        v-card-text
            p {{ text }}
</template>

<script>
export default {
  name: "ComputedProperties",
  data: () => ({
      text: `In comparison to template syntax, computed properties 
      are designed for more complex logic and reoccurrence of the 
      same calculation. Methods and computed properties are located 
      inside the ‘export default’ within a Vue document, which create 
      part of a webpage. Both return the same result, but the latter 
      checks for recalculation in the case of altered data in cache.`
  })
};
</script>
<style lang="scss" scoped>
</style>