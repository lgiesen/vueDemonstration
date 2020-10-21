<template lang="pug">
  v-container
    h1.text-center.display-2.mb-10 Dissociation of Front-End Frameworks
    v-card
      v-tabs(v-model="tab") 
        v-tab(v-for="item in items"
          :key="item.tab") {{ item.tab }}
      v-tabs-items(v-model="tab")
        v-tab-item(key="Presentation")
          ForPresentation
        v-tab-item(key="Seminar Thesis")  
          SeminarThesis
    div.block
</template>

<script>
import ForPresentation from "@/components/HomeTabs/ForPresentation.vue"
import SeminarThesis from "@/components/HomeTabs/SeminarThesis.vue"
export default {
  name: "Home",
  components: {
    ForPresentation,
    SeminarThesis
  },
  data: () => ({
    tab: null,
    items: [
      {
        tab: 'Presentation', 
        component: "ForPresentation"
      },
      {
        tab: 'Seminar Thesis',
        component: "SeminarThesis"
      }
    ],
  }),
};
</script>
<style lang="scss" scoped>
</style>
