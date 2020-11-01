
<template lang="pug">
    v-container.SeminarThesis
        div.pa-2.mt-10(v-for="paragraph in paragraphs")
            h3.mb-3 {{ paragraph.header }}
            p {{ paragraph.content }}
</template>

<script>
export default {
  name: "SeminarThesis",
  components: {},
  data: () => ({
    paragraphs: [
      {
        header: "1.1	Classification in the Context of the Project Seminar",
        content: `This seminar thesis is part of the seminar „Game of Competences”, which 
          has the objective to implement a web-based simulation platform for public 
          administrations. The complexity of this simulation system requires the use of a 
          front-end framework or library to manage how and where the simulation game data 
          is displayed. Thus, a comprehensive overview of the methodology for a successful 
          front-end implementation using the framework Vue is presented. \n
          Firstly, an evaluation of the most popular front-end frameworks and libraries is 
          conducted and Vue.js is weighed up against alternatives. Secondly, the fundamental 
          toolset and additional functionalities of Vue are presented. Thirdly, the significance 
          of design languages is clarified and two of them are shed a light on. Finally, the p
          reviously mentioned toolset and concepts are applied and illustrated on an interactive website.`
      },      
      {
        header: "1.2	Use Cases and Relevance of Front-End Frameworks",
        content: `In contrast to an unpretentious and simple front-end, a complex website needs 
          structure and management. This problem is addressed by front-end frameworks, which offer 
          the required scaffold for front-end applications including a document and folder structure 
          to resolve the problem of cluttered and chaotic documents. Furthermore, they comprise various 
          functions and a large variety of tools, for example, to manage data and state. Moreover, they 
          foster the principle of ‘separation of concerns’, which states that each part of a program has 
          its purpose and acts independently. This principle provides clarity, transparency and 
          maintainability, which are of high importance to a complex project. Additionally, implementation 
          fast-tracking is enabled by frameworks, because they address frequent issues in production and 
          development (Does Your Web App Need a Front-End Framework? - Stack Overflow Blog, n.d.).`
      },
      {
        header: "1.3	Evaluation of Angular, React and Vue.js",
        content: `The most significant front-end frameworks and libraries at the moment are Angular, 
          React and Vue. They have different use-cases because they utilize different approaches to face 
          challenges. \n
          Angular is the most popular and offers a large variety of built-in features, which might overwhelm 
          an inexperienced project team. On the contrary, React does not provide essential built-in features 
          and instead relies on its extensive community to implement them. Unlike React, Vue has a comparatively 
          smaller community, hence it cannot depend on it to program features. Thus, Vue comprises the most 
          frequently used features, but not as many as Angular. As a consequence, it fits the context of a small 
          to medium sized project. \n
          Dissimilar to the other two, React is a library because it only renders the UI. On the one hand, this 
          provides freedom on how to program the front-end. On the other hand, the programmer has to cope with a 
          great amount of decision-making, which is not the case for front-end frameworks like Angular and Vue. \n
          React and Vue compile their code into powerful virtual DOM rendering functions, which are partly 
          responsible for their great startup and runtime performance. In contrast to React and Vue, Angular has 
          a significantly higher volume indicating a threat to runtime performance (Xing et al., 2019, p. 3-4). 
          Because Vue is the most lightweight option, it offers the “most efficient rendering and processing” out 
          of the aforementioned front-end frameworks and libraries (Xing et al., 2019, p. 4). \n
          As a reflection, Vue is easier and faster to learn than React and Angular, because it forces fewer 
          decisions onto the programmer than React and does not involve a great range of tools to learn like 
          Angular (Yong Kang Xing et al., 2019, p. 3-4). These factors are crucial for the process of choosing a 
          front-end framework or library because the project team needs to be able to acquire the necessary toolset 
          quickly and reduce the overall difficulty to realize the project goals. (TechMagic, n.d.). Thus, in the 
          context of the seminar, Vue allows the fastest acquisition of the necessary toolset to successfully 
          implement a web-based simulation platform for public administrations (Vue.Js | Vue vs React vs Angular 
          | Angular vs Vue | React vs Vue, n.d.; Xing et al., 2019). `
      }
    ]
  }),
};
</script>
<style lang="scss" scoped>
</style>
