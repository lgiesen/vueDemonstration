<template lang="pug">
  v-footer(padless)
    v-container(fluid)
      v-row
        v-col(cols=3)
          p.display-1.font-weight-bold Lorem ipsum 
        v-col(cols=3)
          p.display-1.font-weight-bold Lorem ipsum 
        v-col(cols=3)
          p.display-1.font-weight-bold Lorem ipsum 
        v-col(cols=3)
          p.display-1.font-weight-bold Lorem ipsum
      v-divider

      v-row(align="center")
        v-col(align="start")
        v-col(align="end")
          | &copy; {{new Date().getFullYear()}} - Leo Giesen
</template>

<script>
export default {
  name: "TheFooter"
};
</script>

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
