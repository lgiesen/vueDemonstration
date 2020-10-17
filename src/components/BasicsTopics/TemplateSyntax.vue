<template lang="pug">
    v-card
        v-card-title
            h2 Template Syntax
        v-card-text
            p The HTML template syntax affords declarative rendering of 
              | DOM-data, which conveys that calling a variable in DOM is 
              | reactive. This automatic update of a variable is achieved 
              | with moustache syntax, which also allows JS logic: 
            highlightjs(language="javascript" :code="moustacheSyntax")
</template>

<script>
export default {
  name: "TemplateSyntax",
  data: () => ({
    moustacheSyntax: "{{ variableName >= 0 ? ‘positive’ : ‘negative’}}"
  }),
};
</script>
