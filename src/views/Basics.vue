<template lang="pug">
v-container.basics
  h1.text-center.display-2.mb-10 Basics of Vue.js
  BasicsTopics.d-flex.flex-wrap.justify-space-around
    AppInstance
    TemplateSyntax
    ComputedProperties
    ClassStyleBinding
    ConditionalRendering
    ListRendering
    EventHandling
    UserInput
    ComponentSystem
</template>
<script>
import AppInstance from "@/components/BasicsTopics/AppInstance.vue";
import TemplateSyntax from "@/components/BasicsTopics/TemplateSyntax.vue";
import ComputedProperties from "@/components/BasicsTopics/ComputedProperties.vue";
import ClassStyleBinding from "@/components/BasicsTopics/ClassStyleBinding.vue";
import ConditionalRendering from "@/components/BasicsTopics/ConditionalRendering.vue";
import ListRendering from "@/components/BasicsTopics/ListRendering.vue";
import EventHandling from "@/components/BasicsTopics/EventHandling.vue";
import UserInput from "@/components/BasicsTopics/UserInput.vue";
import ComponentSystem from "@/components/BasicsTopics/ComponentSystem.vue";

export default {
  name: "Basics",
  components: {
    AppInstance,
    TemplateSyntax,
    ComputedProperties,
    ClassStyleBinding,
    ConditionalRendering,
    ListRendering,
    EventHandling,
    UserInput,
    ComponentSystem
  },
};
</script>

<style lang="scss" scoped>
BasicsTopics * {
  margin: 1em;
  width: 55vh;
  min-height: 45vh;
}
</style>
