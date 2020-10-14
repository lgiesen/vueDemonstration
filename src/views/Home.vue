<template lang="pug">
  div.home
    v-container
      v-row.text-center
        v-col(cols="12")
          v-img(
            :src="require('../assets/logo.svg')"
            class="my-3"
            contain
            height="200")

        v-col.mb-4
          h1.display-2.font-weight-bold.mb-3 Dissociation of Front-End Frameworks

        v-col(class="mb-5" cols="12")
          h2.headline.font-weight-bold.mb-3 What's next?

          v-row(justify="center")
            v-col
              a(
                v-for="(next, i) in whatsNext"
                :key="i"
                :href="next.href"
                class="subheading mx-3"
                target="_blank"
                ) {{ next.text }}

        v-col
          h2.headline.font-weight-bold.mb-3 Classification in the context of the project seminar 
          p This seminar thesis is part of the project seminar „Game of Competences”, 
            | which has the objective to implement a web-based simulation platform for public administrations. 
            | Because of its complexity, the use of a front-end framework is essential. Thus, a comprehensive 
            | overview of the methodology for a successful front-end implementation using the framework Vue.js 
            | is presented here. Front-end Frameworks offer a scaffold for front-end applications including a 
            | document and folder structure, various functions, for instance CSS components, AJAX requests and 
            | much more. Firstly, an evaluation of the most popular front-end frameworks is conducted and 
            | Vue.js is weighed up against other frameworks. Secondly, the basic toolset and further 
            | functionalities of Vue.js is illustrated. Thirdly, influential design languages are clarified and 
            | finally an interactive website illustrates the wide range of Vue’s capabilities.
          h2.headline.font-weight-bold.mb-3 Use Cases and Relevance of Front-End Frameworks
          p HTML5, CSS3 und possibly JS may be used for a simple front-end, but a complex website needs management 
            | to provide introduce order in otherwise cluttered and chaotic documents. Front-end frameworks foster 
            | „separation of concerns”, which states that each part of a program has its own purpose and act 
            | independently. This provides clarity, transparency and maintainability. A framework allows 
            | fast-tracking of the implementations because it addresses frequent issues.
          h2.headline.font-weight-bold.mb-3 Evaluation of Vue.js, React and Angular
          p Vue.js, React and Angular attempt to solve problems differently. The biggest of the three, Angular, 
            | offers a large variety of features, whereas React does not and builds on its big community to offer 
            | for example libraries for state management like Redux. Unlike React, Vue has a comparatively smaller 
            | community. Hence, it uses a hybrid approach because it includes the frequently used features, but 
            | not as many as Angular. 
          p React is technically a library because it only renders the UI. On the one hand, it provides freedom. 
            | On the other hand, the programmer has to cope with a lot of decision-making. React and Vue use compile 
            | into powerful virtual DOM rendering functions, which are partly responsible for their great startup 
            | and runtime performance.
          p As a reflection, Vue is easier to learn than React and Angular because it forces fewer decisions onto 
            | the programmer thana React and does not involve a great number of tools to learn unlike Angular. 
            | It is specialized for an adaptable UI and complex single-page applications. Thus, in the context of 
            | the project seminar, Vue allows for the fastest acquisition of the necessary skill toolset to 
            | successfully implement a web-based simulation platform for public administrations.
            | (Comparison with Other Frameworks — Vue.Js, n.d.; React vs Angular vs Vue.Js — What to Choose in 2020? 
            | (Updated in 2020) | by TechMagic | TechMagic | Medium, n.d.; Vue.Js | Vue vs React vs Angular | Angular 
            | vs Vue | React vs Vue, n.d.)
</template>

<script>
export default {
  name: "Home",
  components: {},
  data: () => ({
    whatsNext: [
      {
        text: "Explore components",
        href: "https://vuetifyjs.com/components/api-explorer",
      },
      {
        text: "Select a layout",
        href: "https://vuetifyjs.com/getting-started/pre-made-layouts",
      },
      {
        text: "Frequently Asked Questions",
        href:
          "https://vuetifyjs.com/getting-started/frequently-asked-questions",
      },
    ],
  }),
};
</script>
