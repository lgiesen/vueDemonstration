<template lang="pug">
    v-card
        v-card-title
            h2 Conditional Rendering
        v-card-text
            p {{ text }}
            highlightjs(language="html" :code="vif")

</template>

<script>
export default {
  name: "ConditionalRendering",
  data: () => ({
    vif: `<div(v-if=”bool1”)></div> \n<div(v-else-if=”bool2”)></div> \n<div(v-else)></div>`,
    text: `The v-if directive determines if a DOM-element is 
    rendered based on a boolean value. In combination with it, 
    the v-else-if or the v-else directive can be used. 
    Although v-if and v-show have the same use cases, the 
    deciding difference is that v-show only affects the CSS 
    property display and is always rendered.`
  })
};
</script>
<style lang="scss" scoped>
</style>