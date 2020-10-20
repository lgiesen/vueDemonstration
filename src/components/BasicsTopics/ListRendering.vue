<template lang="pug">
    v-card
        v-card-title
            h2 List Rendering
        v-card-text
            p Iteration through lists is performed by 
                code.hljs.d-inline v-for
                |  and can be displayed in the DOM. For example one can use range: 
                highlightjs(language="javascript" :code="vfor") 
                | Binding the id as a key to the item is a common practice, 
                | which is the case in this for-each loop:
                highlightjs(language="javascript" :code="foreach") 
</template>

<script>
export default {
  name: "ListRendering",
  data: () => ({
      vfor: `v-for="n in 10">{{ n }}`,
      foreach: 
`ol
    li(v-for="(item, index) in list" :key="item.id") 
...
export default {
    data() { return { list: [‘a’, ‘b’, ‘c’] } }
}`,
  })
};
</script>
<style lang="scss" scoped>
</style>