/* eslint-disable */
<template lang="pug">
#404error
  v-container
    v-row(justify="start")
      v-col(align="center")
        h1.display-3.warning--text.font-weight-bold
          | 404 - Page not found
        h2.mt-4 You got lost! This page does not exist.
  v-parallax(dark, src="@/assets/images/404.jpg", height="800")
    v-container(fluid)
      v-row(justify="start", align="center")
        v-col
          p.text-justify.headline.font-weight-bold
            | {{ $t('404message') }}
      v-row(justify="start", align="center")
        v-col(align="center")
          v-btn(color="warning", :to="{ name: 'home' }") 
            | {{ $t('goHome') }}
</template>

<script>
/* eslint-disable max-len */
export default {
  name: "NotFound",
};
</script>

<i18n>
{
  "en": {
    "goHome": "Take me back home", 
    "404message": "You always loved flying and you were so excited about"
  },
  "de": {
    "goHome": "Zur Homepage",
    "404message": "You always loved flying and you were so excited about"
  }
}
</i18n>
