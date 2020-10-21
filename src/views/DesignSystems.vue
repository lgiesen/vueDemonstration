<template lang="pug">
  div.designsystems
    v-container
      h1.text-center.display-2.mb-10 Front-End Design Systems
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
      div.block
      div.block
      div.block
      v-row 
        v-col 
          h3 Material Design
          p There are various design languages, for instance Lighting Design System 
            | by Salesforce, Polaris by Shopify, Living Language by IBM and many more.
            | Hence, only the two most influential ones will be presented (Design Languages
            | - Discover Best Design Languages and Design Systems, n.d.). 
            br
            | Firstly, Google’s Material Theme is very popular and can be used with the front-end libraries
            | Materialize.css or Vuetify, where the latter is especially suitable for Vue.js.
            | The Material design guidelines offer a comprehensive and very detailed guide to
            | web and mobile design. It is stressed that a website needs to be informative,
            | honest and reassuring. Thus, intuitiveness, functionality, understandability
            | and authenticity are provided, and an atmosphere of comfort and security is
            | created. The key idea is to imitate real life physics, e.g. shadow is cast by
            | key and ambient light and altered by elevation to the underlying material
            | instead of changing the use of color. User Input may change elevation so that
            | “components move to preset dynamic elevation offset“ (Elevation - Material
            | Design, n.d.) and a three dimensional effect is created.  The material layout
            | uses three principles: First, the layout needs to be predictable. Secondly,
            | there needs to be a consistency in design in form of a repeating grid,
            | harmonious keylines and padding. Thirdly, responsiveness is essential because
            | mobile and desktop devices are used by consumers. Thence, columns, gutters and
            | margins are used to guarantee a responsive design. 
            | Moreover, further details are explained in the guidelines about different types
            | of navigation and parameters for choosing a color palette (consisting of a
            | primary and secondary color and variants of both) are accentuated. Lastly,
            | Google offers a type scale generator and explain how sound, icons, shape and
            | motion are used in Material Design system should be defined.
        v-col
          h3 Apple Design Guidelines
          p Apple’s design guidelines use clarity, deference and depth rules for their themes. In detail
            | that accentuates that text is readably and components are displayed in a clean
            | fashion. Blur and a minimalistic approach to gradients and shadows has an
            | attentive effect and create depth and a layered UI.Apple’s design principles
            | lead to a great presentation of its brand. First, they comprise aesthetic
            | integrity, which underlines how UI impression and behavior replenish and enrich
            | its functionality. Second, there is a focus on consistency, e.g. the use of
            | familiar icons, interface components and unequivocal terminology. Third, direct
            | manipulation involves the user in interaction. Hence UX is enhanced through
            | device rotation and gestures. Fourth, feedback in the case of progress bars or
            | hover and click effects keeps the user engaged. Fifth, metaphors spark interest
            | by provided real life concepts, for instance toggle switches, drag and drop
            | content or digital pages of books. Sixth, user control is provided by guiding the
            | user, who ultimately decides (Human Interface Guidelines - Design - Apple Developer,
            | n.d.; Themes - IOS - Human Interface Guidelines - Apple Developer, n.d.).
      h2 Design Principles and Theory
      p Standardization of terminology (for use cases) facilitate development and reduce the
        | frequency and extent of impact of misunderstandings (Tena et al., 2013). This idea
        | for example takes on shape in the predefined methods, e.g. the functionality of
        | filter() is commonly known.
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