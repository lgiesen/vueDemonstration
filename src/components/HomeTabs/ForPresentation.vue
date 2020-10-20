<template lang="pug">
  v-container
    h3.mt-10.mb-6 What is our situation and what do we need?
    p Goal: Web-based simulation platform for public administrations = complex &rarr; manage logic and files 
      br
      | &rarr; front-end framework or library offer scaffold for front-end appolications
      | with structure ("separation of concerns") &rarr; clarity, transparency and maintainability
    h3.mt-10.mb-6 Which front-end framework or libary suits our project?
    v-flex.text-xs-center
      //- v-col(
      //-   v-for="elem in FrameworksLibraries"
      //-   :key="elem.name")
      //-   //- img(:alt="elem.alt" 
      //-   //-   :src="`@/assets/${elem.src}`")
      //-   img(:src="elem.src" 
      //-     :alt="elem.alt")
      //-   p {{elem.src}}
      //- img(src="@/assets/elem.src")
      //- <img :src="'/path/to/images/' + fileName">
      v-simple-table
        thead
          tr
            th 
            th.text-center
              img(src="@/assets/angular.png")
              h2 Angular
            th.text-center
              img(src="@/assets/React.png")
              h2 React
            th.text-center
              img(src="@/assets/logo.png")
              h2 Vue
        tbody
          tr
            td Type
            td Framework
            td Library (freedom vs choices)
            td Framework
          tr
            td Volume &rarr; Startup &amp; 
                br 
                | Runstime Performance
            td Large
            td Medium/Small
            td Small
          tr  
            td Built-in Functionalities
            td Large variety
            td Very Basic: Only Dom Manipulation 
                br
                | (and State Management)
            td Basic: Routing, State Management, ... 
          tr
            td Complexity
            td High: Many functionalities to comprehend
            td High: A lot of decision-making
            td Low: Easy and fast to learn
    
    h2.text-center.margin
      v-icon.mr-4 mdi-arrow-right
      v-icon.mt-7.mb-7 mdi-vuejs
      | ue.js
      v-icon.ml-4 mdi-arrow-left

</template>

<script>
export default {
  name: "ForPresentation",
  components: {},
  data: () => ({
    FrameworksLibraries: [
      {
        name: "angular",
        src: '@/assets/angular.png',
        alt: "Angular Icon",
      },
      {
        name: "react",
        src: '@/assets/React.png',
        alt: "React Icon",
      },
      {
        name: "vue",
        src: '@/assets/logo.png',
        alt: "Vue Icon",
      },
    ]
  }),
};
</script>
<style lang="scss" scoped>
  img{
    height: 100px;
  }
</style>