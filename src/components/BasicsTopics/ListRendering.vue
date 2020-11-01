<template lang="pug">
    v-card
        v-card-title
            h2 List Rendering
        v-card-text
            p Additionally, iteration through lists is performed by 
                | v-for and can be displayed in the DOM. For example 
                | one can use ranges: 
                highlightjs(language="javascript" :code="vfor") 
                | It is worth noting that binding the id as a key to the 
                | item is a common practice: 
                highlightjs(language="javascript" :code="keybinding") 
                | Additionally, well-known functions to alter lists can be used, 
                | for instance, push, pop, splice, sort, reverse, filter and concat (Vue, n.d.-a).
</template>

<script>
export default {
  name: "ListRendering",
  data: () => ({
      vfor: `div(v-for="n in 10") {{ n }}`,
      keybinding: 
`data() { 
    return { 
        list: [
            { id: 1, name: "a" }, 
            {id: 2, name: "b" }, 
            { id: 3, name: "c" }
        ] 
    }
}`,
  })
};
</script>
<style lang="scss" scoped>
</style>