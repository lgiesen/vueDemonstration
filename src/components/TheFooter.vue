<template>
  <div id="TheFooter">
    <hr />
    <h1>This is the Footer</h1>
  </div>
</template>

<script>
export default {
  name: "TheFooter",

  data: () => ({
    importantLinks: [
      {
        text: "one",
        href: "https://vuetifyjs.com",
      },
      {
        text: "two",
        href: "https://community.vuetifyjs.com",
      },
      {
        text: "three",
        href: "https://madewithvuejs.com/vuetify",
      },
      {
        text: "four",
        href: "https://twitter.com/vuetifyjs",
      },
      {
        text: "five",
        href: "https://medium.com/vuetify",
      },
    ],
    whatsNext: [
      {
        text: "Link1",
        href: "https://vuetifyjs.com/components/api-explorer",
      },
      {
        text: "Link2",
        href: "https://vuetifyjs.com/getting-started/pre-made-layouts",
      },
      {
        text: "Link3",
        href:
          "https://vuetifyjs.com/getting-started/frequently-asked-questions",
      },
    ],
  }),
};
</script>
