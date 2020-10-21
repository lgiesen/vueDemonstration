<template lang="pug">
  v-app#app
    <!-- use the component TheNavigation by using the corresponding tag -->
    TheNavigation
    router-view
    <!-- use the component TheFooter by using the corresponding tag -->
    TheFooter 
</template>

<script>
// importing the navigation and the footer
// @ is an alias to ./src
import TheNavigation from "@/components/TheNavigation/TheNavigation.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  components: {
    TheNavigation,
    TheFooter
  },
};
</script>

<style lang="css">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.block{
  width: 100vw;
  height: 5rem;
}
/* lioshi */
/* .hljs-comment{color:#8d8d8d !important}.hljs-quote{color:#b3c7d8 !important}.hljs-deletion,.hljs-name,.hljs-regexp,.hljs-selector-class,.hljs-selector-id,.hljs-tag,.hljs-template-variable,.hljs-variable{color:#c66 !important}.hljs-built_in,.hljs-builtin-name,.hljs-literal,.hljs-number,.hljs-subst .hljs-link,.hljs-type{color:#de935f !important}.hljs-attribute{color:#f0c674 !important}.hljs-addition,.hljs-bullet,.hljs-params,.hljs-string{color:#b5bd68 !important}.hljs-meta,.hljs-section,.hljs-title{color:#81a2be !important}.hljs-class,.hljs-function,.hljs-keyword,.hljs-selector-tag{color:#be94bb !important}.hljs-symbol{color:#dbc4d9 !important}.hljs{display:block !important;overflow-x:auto !important;background:#303030 !important;color:#c5c8c6 !important;padding:.5em !important}.hljs-emphasis{font-style:italic !important}.hljs-strong{font-weight:700 !important} */
/* night-owl */
/* .hljs{display:block !important;overflow-x:auto !important;padding:.5em !important;background:#011627 !important;color:#d6deeb !important}.hljs-keyword{color:#c792ea !important;font-style:italic}.hljs-built_in{color:#addb67 !important;font-style:italic !important}.hljs-type{color:#82aaff !important}.hljs-literal{color:#ff5874 !important}.hljs-number{color:#f78c6c !important}.hljs-regexp{color:#5ca7e4 !important}.hljs-string{color:#ecc48d !important}.hljs-subst{color:#d3423e !important}.hljs-symbol{color:#82aaff !important}.hljs-class{color:#ffcb8b !important}.hljs-function{color:#82aaff !important}.hljs-title{color:#dcdcaa !important;font-style:italic}.hljs-params{color:#7fdbca !important}.hljs-comment{color:#637777 !important;font-style:italic}.hljs-doctag{color:#7fdbca !important}.hljs-meta{color:#82aaff !important}.hljs-meta-keyword{color:#82aaff !important}.hljs-meta-string{color:#ecc48d !important}.hljs-section{color:#82b1ff !important}.hljs-builtin-name,.hljs-name,.hljs-tag{color:#7fdbca !important}.hljs-attr{color:#7fdbca !important}.hljs-attribute{color:#80cbc4 !important}.hljs-variable{color:#addb67 !important}.hljs-bullet{color:#d9f5dd !important}.hljs-code{color:#80cbc4 !important}.hljs-emphasis{color:#c792ea !important;font-style:italic}.hljs-strong{color:#addb67 !important;font-weight:700}.hljs-formula{color:#c792ea !important}.hljs-link{color:#ff869a !important}.hljs-quote{color:#697098 !important;font-style:italic}.hljs-selector-tag{color:#ff6363 !important}.hljs-selector-id{color:#fad430 !important}.hljs-selector-class{color:#addb67 !important;font-style:italic}.hljs-selector-attr,.hljs-selector-pseudo{color:#c792ea !important;font-style:italic}.hljs-template-tag{color:#c792ea !important}.hljs-template-variable{color:#addb67 !important}.hljs-addition{color:#addb67ff !important;font-style:italic}.hljs-deletion{color:#ef535090 !important;font-style:italic} */
/* tomorrow night eightees */
.hljs-comment,.hljs-quote{color:#999 !important}.hljs-deletion,.hljs-name,.hljs-regexp,.hljs-selector-class,.hljs-selector-id,.hljs-tag,.hljs-template-variable,.hljs-variable{color:#f2777a !important}.hljs-built_in,.hljs-builtin-name,.hljs-link,.hljs-literal,.hljs-meta,.hljs-number,.hljs-params,.hljs-type{color:#f99157 !important}.hljs-attribute{color:#fc6 !important}.hljs-addition,.hljs-bullet,.hljs-string,.hljs-symbol{color:#9c9 !important}.hljs-section,.hljs-title{color:#69c !important}.hljs-keyword,.hljs-selector-tag{color:#c9c !important}.hljs{display:block;overflow-x:auto;background:#2d2d2d !important;color:#ccc !important;padding:.5em !important}.hljs-emphasis{font-style:italic !important}.hljs-strong{font-weight:700 !important}
/* Inline code block */
</style>