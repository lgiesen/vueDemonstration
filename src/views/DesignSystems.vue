<template lang="pug">
  div.designsystems
    v-container
      h1.text-center.display-2.mb-10 Front-End Design Systems
      h3 := How to implement UI &amp; UX for desktop and mobile
      v-row
        v-col
          h3 Google Material Design Guidelines
          ul Principles
            li Layout: predictable, consistent, responsive
            li Sound: informative, honest, reassuring
            li Motion: informative, focused, expressive
            li Gestures: alternative interaction, easy to use, tactile control
          br
          ul
            li Imitate real life physics &rarr; shadow
          v-icon mdi-vuetify
          span Vuetify (Material Component Framework)
          br 
          br
          p &rarr; Material Design with Vuetify
        v-col
          h3 Apple Design Guidelines
          ul 
            li Guidelines: clarity, deference, depth 
            li Principles:
              ul  
                li aesthetic 
                li integrity
                li consistency
                li direct manipulation
                li feedback
                li metaphors
                li user control
            li Not detailed &rarr; application in project unclear 

      div.block
      v-row
        p The significance of the UI and UX in web development is rising because 
          | UI and UX are essential to attain and keep the attention of users 
          | (Yi et al., 2018). For example, a great UX comprises well-thought-out 
          | features. Front-end design languages aid in the development of websites 
          | with a high level of usability and appearance, for instance, they define 
          | how these features are implemented and integrated into a website.
          br
          | According to Ian Grout, design languages “provide the means by which to 
          | describe the operation of both software programs and hardware” (Grout, 2008). 
          | If this definition is applied and narrowed down to the front-end, front-end 
          | design languages specify how the characteristics and features of the UI and 
          | UX should be implemented (Baldwin, n.d.). In the context of the “Game of 
          | Competences” seminar, a front-end design language is advised to be used since 
          | it includes principles to enhance the appearance and usability of a website, 
          | for example, it minimizes friction by displaying an uncluttered UI and fosters 
          | flawless navigation of a website.
          br
          | There are various approaches to design languages by different companies, for 
          | instance, Fluent Design Systems by Microsoft, Lighting Design System by Salesforce, 
          | Polaris by Shopify and Living Language by IBM. Hence, only the two most influential 
          | ones will be presented (Chandan &amp; Varun, n.d.).

      v-row 
        v-col 
          h3 Material Design
          p Google’s Material Theme offers a comprehensive and very detailed rulebook to desktop 
            | and mobile design. The key idea is to imitate real-life physics, e.g. shadow is cast 
            | by key and ambient light and altered by elevation to the underlying material instead 
            | of changing the use of color. Additionally, user input may alter the level of elevation 
            | so that “components move to preset dynamic elevation offset“ (Google, n.d.-c, n.d.-d) 
            | and a three-dimensional effect is achieved.
            br
            | The material layout uses three principles: Firstly, the layout needs to be predictable. 
            | Secondly, there needs to be a consistency in design in form of a repeating grid, 
            | harmonious keylines and padding. Thirdly, responsiveness is essential because mobile 
            | and desktop devices are heavily used by consumers. The goal of responsive design is 
            | guaranteed by the use of columns (cf. 1 in Figure 2), gutters (cf. 2 in Figure 2) 
            | and margins (cf. 3 in Figure 2) (Google, n.d.-h).
            br
            | Furthermore, it is stressed that sound needs to be informative, honest and reassuring. 
            | Thus, intuitiveness, functionality, understandability and authenticity are provided 
            | and an atmosphere of comfort and security is created (Google, n.d.-b). 
            br
            | Moreover, further details are highlighted in the guidelines about navigation and 
            | parameters for choosing a color palette (Material Design, n.d.; Understanding Navigation 
            | - Material Design, n.d.). Lastly, Google offers a type scale generator and explains how 
            | sound, icons, shape and motion are defined and used in Material Design system (Google,
            |  n.d.-g, n.d.-b, n.d.-f, n.d.-a, n.d.-i). 
            br
            | The Material Design system can be used with the front-end library Materialize.css and 
            | the Material Design framework Vuetify, which was specifically developed for Vue. 
            | Hence, it offers a fast implementation of the Material Design guidelines and is simple 
            | to learn and apply as demonstrated in the appendix.
            br
            | In conclusion, it is recommended to use the Material Theme for this seminar, because 
            | of its specific and detailed guidelines and its fast and simplistic implementation using Vuetify.

        v-col
          h3 Apple Design Guidelines
          p Apple’s design guidelines use rules of clarity, deference and depth for their themes. 
            | In detail, that accentuates that text is readably and components are displayed cleanly. 
            | The use of blur and the minimalistic approach to gradients and shadows have an 
            | attentive effect and create depth and a layered UI.
            br
            | Apple’s design principles lead to a sophisticated presentation of its brand. First, 
            | they comprise aesthetic integrity, which underlines how UI impression and behavior 
            | replenish and enrich its functionality. Second, there is a focus on consistency, e.g. 
            | the use of familiar icons, interface components and unequivocal terminology. Third, 
            | direct manipulation involves the user in interaction. Hence, UX is enhanced through 
            | device rotation and gestures. Fourth, feedback through progress bars or hover and 
            | click effects keeps the user engaged. Fifth, metaphors spark interest by providing 
            | real-life concepts, for instance, toggle switches, drag and drop content or digital 
            | pages of books. Sixth, user control is provided by guiding the user, who ultimately 
            | decides (Apple, n.d.-b, n.d.-a).
      h2 Design Principles and Theory
      p There are various types of principles. Hence, an exemplary principle is presented.
        | Standardization of terminology (for use cases) facilitates the development and reduces 
        | the frequency and extent of the impact of misunderstandings (Tena et al., 2013). 
        | This idea may be observed in the predefined methods, e.g. the functionality of the 
        | filter method is commonly known. Additionally, this concept is applied in Vuetify, 
        | where various HTML elements like an input have a responsive Vuetify counterpart, 
        | which is denoted with a “v-“ prefix.
        br
        | This principle should be considered in the project work of the seminar. For example, 
        | it is not advisable to name a variable “x” because it is not clear to other 
        | project members what the variable could stand for. This causes a significant 
        | decrease in maintainability and productivity. If the project group follows this 
        | principle of standardization, it “facilitate[es] communication within multidisciplinary 
        | web development teams and leading to agreed designs” (Tena et al., 2013, p. 1).

</template>
<script>
export default {
    name: "Design_Systems",
    data: () => ({
    })
};
</script>
<style lang="scss" scoped>
img {
  max-width: 100px;
}
</style>