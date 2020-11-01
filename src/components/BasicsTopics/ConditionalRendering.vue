<template lang="pug">
    v-card
        v-card-title
            h2 Conditional Rendering
        v-card-text
            p What is more, the v-if directive determines if a DOM-element is 
              | rendered based on a Boolean value. In combination with v-if, 
              | the v-else-if or the v-else directive can be used. The subsequent 
              | example results in a rendering of only the second div: 
              highlightjs(language="javascript" :code="vif") 
            p Although v-if and v-show have the same use cases, the decisive 
              | difference is that v-show only affects the CSS property display 
              | and is always rendered (Conditional Rendering — Vue.Js, n.d.).

</template>

<script>
export default {
  name: "ConditionalRendering",
  data: () => ({
    vif: `div(v-if="1==2")
div(v-else-if="returnsTrue()")
div(v-else)`,
  })
};
</script>
<style lang="scss" scoped>
</style>