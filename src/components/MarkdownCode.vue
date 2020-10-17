<template lang="pug">
    div(v-html="processedMarkdown")
</template>
<script>
import marked from 'marked';
import highlight from 'highlight.js';
import 'highlight.js/styles/solarized-dark.css';

export default {
  name: "MarkdownCode",
  computed: {
    processedMarkdown(){
      return marked(this.markdown, {
        highlight(md){
          return highlight.highlightAuto(md).value
        }
      });
    }
  },
  props: ['markdown']
}
</script>
<style lang="scss" scoped>
  // ::v-deep: only apply this rule to child components
  ::v-deep code:before{
    content: "" !important;
  }
</style>