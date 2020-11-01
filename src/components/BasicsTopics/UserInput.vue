<template lang="pug">
    v-card
        v-card-title
            h2 Two-way data binding
        v-card-text
            p {{ text }}
                highlightjs(language="javascript" :code="userInput") 
                | {{ resources }}
</template>

<script>
export default {
  name: "UserInput",
  data: () => ({
      text: `Two-way data binding is performed by v-model, which causes that an element 
      is updated on user input. This is especially useful for forms, because data from 
      user input is evaluated: `,
      userInput: 
`input(v-model=”name”)
p Your name is {{ name }} `,
      resources: `(Form Input Bindings — Vue.Js, n.d.).`
  })
};
</script>
<style lang="scss" scoped>
</style>