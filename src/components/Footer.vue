<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">This is the homepage</h1>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">What's next?</h2>

        <v-row justify="center">
          <v-col class="" cols="">
            <a
              v-for="(next, i) in whatsNext"
              :key="i"
              :href="next.href"
              class="subheading mx-3"
              target="_blank"
            >
              {{ next.text }}
            </a>
          </v-col>
        </v-row>
      </v-col>

      <v-col class="" cols="">
        <h2 class="headline font-weight-bold mb-3">Important Links</h2>

        <v-row justify="center">
          <v-col class="mb-3" cols="12">
            <a
              v-for="(link, i) in importantLinks"
              :key="i"
              :href="link.href"
              class="subheading mx-3"
              target="_blank"
            >
              {{ link.text }}
            </a>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Footer",

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
