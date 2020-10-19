<template lang="pug">
  v-footer.primary.lighten-1(padless)
    v-row(justify="center"
      no-gutters)
      v-btn.my-2(
        v-for="link in links"
        :key="link"
        color="white"
        text) {{ link }}
      v-col.primary.lighten-2.py-4.text-center.white--text(
        cols=12)
        v-btn.mx-4.white--text(
          v-for="icon in icons"
          :key="icon"
          icon
          :href="icon.link")
          v-icon(size="24px") {{ icon.mdi }}
        p.mt-6 &copy; {{new Date().getFullYear()}} - Leo Giesen
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
    ],
    icons: [
      {mdi: 'mdi-web', link: 'https://leogiesen.com/'},
      {mdi: 'mdi-xing', link: 'https://www.xing.com/profile/Leo_Giesen'},
      {mdi: 'mdi-linkedin', link: 'https://www.linkedin.com/in/leogiesen/'},
      {mdi: 'mdi-github', link: 'https://github.com/lgiesen'},
    ],
  })
};
</script>
<style lang="scss" scoped>
</style>

