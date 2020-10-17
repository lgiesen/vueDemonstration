<template lang="pug">
    v-card
        v-card-title
            h2 Template Syntax
        v-card-text
            p The HTML template syntax affords declarative rendering of 
              | DOM-data, which conveys that calling a variable in DOM is 
              | reactive. This automatic update of a variable is achieved 
              | with moustache syntax, which also allows JS logic: 
            MarkdownCode(:markdown="exampleCode")
            highlightjs(language="javascript" :code="exampleCode")
            pre
              code.javascript {{exampleCode}}
</template>

<script>
import MarkdownCode from "@/components/MarkdownCode.vue";

export default {
  name: "TemplateSyntax",
  components:{
    MarkdownCode
  },
  data: () => ({
    exampleCode: "let x = 3; function() { return test; }"
  }),
  computed: {
  }
};
</script>
