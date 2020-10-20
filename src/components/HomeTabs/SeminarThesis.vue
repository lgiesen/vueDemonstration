
<template lang="pug">
    v-container.SeminarThesis
        div.pa-2.mt-10(v-for="paragraph in paragraphs")
            h3.mb-3 {{ paragraph.header }}
            p {{ paragraph.content }}
        h2 What Tools Could be Used?
        //- v-img(
        //-     :src="require('@/assets/logo.svg')"
        //-     class="my-3"
        //-     contain
        //-     height="100")
</template>

<script>
export default {
  name: "SeminarThesis",
  components: {},
  data: () => ({
    paragraphs: [
      {
        header: "1.1	Classification in the Context of the Project Seminar",
        content: `This seminar thesis is part of the project seminar „Game of Competences”, 
          which has the objective to implement a web-based simulation platform for public 
          administrations. Because of its complexity, the use of a front-end framework is 
          essential for an efficient implementation. Thus, a comprehensive overview of the 
          methodology for a successful front-end implementation using the framework Vue is 
          presented here. Front-end Frameworks offer a scaffold for front-end applications 
          including a document and folder structure, various functions, for instance CSS 
          components, AJAX requests and much more. \n
          Firstly, an evaluation of the most popular front-end frameworks is conducted and 
          Vue is weighed up against other frameworks. Secondly, the basic toolset and further 
          functionalities of Vue are presented. Thirdly, influential design systems are 
          clarified and finally an interactive website illustrates the wide range of Vue’s capabilities.`
      },      
      {
        header: "1.2	Use Cases and Relevance of Front-End Frameworks",
        content: `HTML5, CSS3 und JS may be used for an unpretentiousfront-end, 
          but a complex website needs structure. Font-end Frameworks introduce 
          clear management and resolve the problem of cluttered and chaotic documents. 
          Moreover, they foster „separation of concerns”, which states that each part 
          of a program has its own purpose and act independently. This provides clarity, 
          transparency and maintainability. Additionally, implementation fast-tracking 
          is enabled by frameworks because they address frequent issues (Does Your Web 
          App Need a Front-End Framework? - Stack Overflow Blog, n.d.).`
      },
      {
        header: "1.3	Evaluation of Angular, React and Vue.js",
        content: `The most significant front-end frameworks and libraries at the moment 
          are Angular, React and Vue. They all have their use-cases, because they utilize 
          different approaches to solve problems. \n
          The biggest of the three, Angular, offers a large variety of features, whereas 
          React does not. Instead, React builds on its extensive community to implement 
          features, for instance the state management library Redux. Unlike React, Vue 
          has a comparatively smaller community. Hence, a hybrid approach is used because 
          it comprises the most frequently used features, but not as many as Angular. \n
          Dissimilar the other two, React is a library because it only renders the UI. On 
          the one hand, this provides freedom. On the other hand, the programmer has to 
          cope with a lot of decision-making. \n
          React and Vue compile their code into powerful virtual DOM rendering functions, 
          which are partly responsible for their great startup and runtime performance. 
          In contrast to React and Vue, Angular has a significantly higher volume 
          indicating a threat to runtime performance (Xing et al., 2019, p. 3-4). 
          Because Vue is the most lightweight option, it offers the “most efficient 
          rendering and processing” out of all front-end frameworks and libraries 
          (Xing et al., 2019, p. 4). \n
          As a reflection, Vue is quicker and easier to learn than React and Angular 
          because it forces fewer decisions onto the programmer than React and does not
          involve a great range of tools to learn like Angular (Yong Kang Xing et al., 
          2019, p. 3-4). It is specialized for an adaptable UI and complex single-page 
          applications (React vs Angular vs Vue.Js — What to Choose in 2020? (Updated in 
          2020) | by TechMagic | TechMagic | Medium, n.d.). Thus, in the context of the 
          project seminar, Vue allows for the fastest acquisition of the necessary toolset 
          to successfully implement a web-based simulation platform for public administrations 
          (Vue.Js | Vue vs React vs Angular | Angular vs Vue | React vs Vue, n.d.; Xing et al., 2019).`
      }
    ]
  }),
};
</script>
<style lang="scss" scoped>
</style>
