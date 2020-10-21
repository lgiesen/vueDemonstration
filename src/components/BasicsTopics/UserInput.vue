<template lang="pug">
    v-card
        v-card-title
            h2 Form Input Bindings / User Input
        v-card-text
            p {{ text }}
                highlightjs(language="javascript" :code="userInput") 
                | {{ resources }}
</template>

<script>
export default {
  name: "UserInput",
  data: () => ({
      text: `v-model allows for two-way data binding, which conveys that an element 
      is updated on user input. This is especially useful for forms:`,
      userInput: `input(v-model=”name”)
p Your name is {{ name }}`,
      resources: `(Form Input Bindings — Vue.Js, n.d.).`
  })
};
</script>
<style lang="scss" scoped>
</style>