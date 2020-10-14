<template lang="pug">
v-container.basics
  h1.text-center Basics of Vue.js
  BasicsTopics.d-flex.flex-wrap.justify-space-around
    AppInstance
    TemplateSyntax
    ComputedProperties
    ClassStyleBinding
    ListRendering
    EventHandling
    ComponentSystem
    ConditionalRendering
  v-row
    v-col 
      v-card
        v-card-title
          h2 Preview of State Management
        v-card-text
          p 
    v-col
</template>
<script>
import ClassStyleBinding from "@/components/BasicsTopics/ClassStyleBinding.vue";
import UserInput from "@/components/BasicsTopics/UserInput.vue";
import ListRendering from "@/components/BasicsTopics/ListRendering.vue";
import ComputedProperties from "@/components/BasicsTopics/ComputedProperties.vue";
import EventHandling from "@/components/BasicsTopics/EventHandling.vue";
import TemplateSyntax from "@/components/BasicsTopics/TemplateSyntax.vue";
import AppInstance from "@/components/BasicsTopics/AppInstance.vue";
import ConditionalRendering from "@/components/BasicsTopics/ConditionalRendering.vue";
import ComponentSystem from "@/components/BasicsTopics/ComponentSystem.vue";

export default {
  name: "Basics",
  components: {
    AppInstance,
    TemplateSyntax,
    EventHandling,
    ListRendering,
    ComputedProperties,
    ClassStyleBinding,
    UserInput,
    ConditionalRendering,
    ComponentSystem
  },
};
</script>

<style lang="scss" scoped>
BasicsTopics * {
  margin: 1em;
  width: 70vh;
  height: 45vh;
}
</style>
