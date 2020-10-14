<template lang="pug">
    v-card
        v-card-title
            h2 Template Syntax
        v-card-text
            p The HTML template syntax affords declarative rendering of 
                | DOM-data, which conveys that calling a variable in DOM is 
                | reactive. This automatic update of a variable is achieved 
                | with moustache syntax, which also allows JS logic: 
            vue-code-highlight {{{ variableName >= 0 ? ‘positive’ : ‘negative’}}}
</template>

<script>
import { component as VueCodeHighlight } from 'vue-code-highlight';
export default {
  name: "TemplateSyntax",
  components:{
    VueCodeHighlight,
  }
};
</script>
<style lang="scss" scoped>
</style>