<template lang="pug">
    v-card
        v-card-title
            h2 Conditional Rendering
        v-card-text
            p The 
                code.hljs.d-inline v-if
                |  directive determines, if a DOM-element is 
                | rendered based on a boolean value. In combination with it, 
                | the 
                code.hljs.d-inline v-else-if
                |  or the v-else directive can be used. 
                | Although 
                code.hljs.d-inline v-if
                |  and 
                code.hljs.d-inline v-show
                |  have the same use cases, the 
                | deciding difference is that 
                code.hljs.d-inline v-show
                |  only affects the CSS property display and is always rendered.
            highlightjs(language="html" :code="vif")

</template>

<script>
export default {
  name: "ConditionalRendering",
  data: () => ({
    vif: `<div(v-if=”false”)></div> \n<div(v-else-if="true”)></div> \n<div(v-else)></div>`,
  })
};
</script>
<style lang="scss" scoped>
</style>