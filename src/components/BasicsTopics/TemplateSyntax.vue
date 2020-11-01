<template lang="pug">
    v-card
        v-card-title
            h2 Template Syntax
        v-card-text
            p {{ text }}
              highlightjs(language="javascript" :code="moustacheSyntax")
            p (Vue, n.d.-b)
</template>
 
<script>
export default {
  name: "TemplateSyntax",
  data: () => ({
    moustacheSyntax: "{{ variableName >= 0 ? ‘positive’ : ‘negative’}}",
    text: `The HTML template syntax affords declarative rendering of the 
      DOM data, which conveys that calling a variable in DOM is reactive. 
      The above mentioned automatic update of a variable is applied in the 
      moustache syntax, which also allows JS logic:`
  }),
};
</script>
