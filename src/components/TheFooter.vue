<template lang="pug">
  v-footer(padless)
    v-row(justify="center"
      no-gutters)
      v-btn.my-2(
        v-for="link in links"
        :key="link"
        color="white"
        text
        rounded)
      v-col.primary.lighten-2.py-4.text-center.white--text(
        cols=12)
        p &copy; {{new Date().getFullYear()}} - Leo Giesen
</template>

<script>
export default {
  name: "TheFooter",
  data: () => ({
    links: [
      'Contact',
      'Impressum',
      'Privacy Policy',
      'Terms of Use'
    ]
  })
};
</script>
<style lang="scss" scoped>
</style>

