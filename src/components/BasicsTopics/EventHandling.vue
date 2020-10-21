<template lang="pug">
    v-card
        v-card-title
            h2 Event Handling
        v-card-text
            p Event listeners are introduced by the v-on directive, which for example 
                | call a function on button press and execute inline instructions: 
                highlightjs(language="javascript" :code="von")
                | Moreover, event modifications can be chained.
                highlightjs(language="javascript" :code="prevent")
                | In this example, .prevent stops the page from reloading and the @ shorthand for v-on is used (Event Handling — Vue.Js, n.d.).
</template>

<script>
export default {
  name: "EventHandling",
  data: () => ({
      von: `btn(v-on:click=”func(), counter += 1”) {{ counter }}`,
      prevent: `form(@submit.prevent=”addToCart(item)”)`
  })
};
</script>
<style lang="scss" scoped>
</style>