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
      text: `In comparison to template syntax, computed properties are designed for 
        more complex logic and reoccurrence of the same calculation. Even though, 
        methods and computed properties return the same result, the latter checks the 
        cache, if a recalculation needs to be performed. Hence, computed properties 
        are updated when a property changes, but methods are not updated after they 
        have been called (Computed Properties and Watchers — Vue.Js, n.d.).`
  })
};
</script>
<style lang="scss" scoped>
</style>