<template lang="pug">
  v-footer(padless)
    v-container(fluid)
      v-container
        v-row
          v-col(cols=3)
            p Impressum 
          v-col(cols=3)
            p Privacy Policy 
          v-col(cols=3)
            p Contact
          v-col(cols=3)
            p Terms of Use
      v-divider
      v-container
        v-row
          p
            | &copy; {{new Date().getFullYear()}} - Leo Giesen
</template>

<script>
export default {
  name: "TheFooter"
};
</script>
<style lang="scss" scoped>
</style>

// <i18n>
// {
//   "en": {
//     "home": "Home", 
//     "about": "About", 
//     "contact": "Contact", 
//     "imprint": "Imprint",
//     "privacy": "Privacy",
//     "terms": "Terms"
//   }, 
//   "de": {
//     "home": "Start", 
//     "about": "Über Uns", 
//     "contact": "Kontakt", 
//     "imprint": "Impressum",
//     "privacy": "Privatsphäre",
//     "terms": "Allg. Geschäftsbedingungen"
//   }
// }
// </i18n>
