<template lang="pug">
  v-container.basics
    h1.text-center Basics of Vue.js
    v-row
        v-col
            v-card
                v-card-title
                    h2 Vue Instnace
                v-card-text
                    p 
        v-col
            v-card
                v-card-title
                    h2 Template Syntax
                v-card-text
                    p 
    v-row
        v-col
            v-card
                v-card-title
                    h2 Computed Properties and Watchers
                v-card-text
                    p 
        v-col
            v-card
                v-card-title
                    h2 Class and Style Binding
                v-card-text
                    v-btn(
                        :class="[isActive ? 'active' : 'disabled']" 
                        @click="toggleClass") Toggle my class
                    p
                        v-pre You can pass arguments to the v-bind directive so that 
                            | you can add classes based on boolean expressions.
                            | The code used for the button is: 
                            | v-btn(:class="{active: isActive, disabled: 
                            | !isActive}" @click="toggleClass") Toggle my class
                            | active and disabled are classes, which are applied based on the data isActive
                            | By pressing the button, you toggle the value of isActive
                            | and therefore add disabled and remove active or the other way around. 
                            br 
                            br
                            | Luckily, there are more beautiful ways of implementation:
                            br 
                            | First one is:
                            | :class="[isActive ? 'active' : 'disabled']
                            br
                            | Second one is:
                            | :class="checkIfActive" in combination with the computed property:
                            | checkIfActive(){ return this.isActive ? "active" : "disabled"; }
    v-row
        v-col
            v-card
                v-card-title
                    h2 Conditional Rendering
                v-card-text
                    p 
        v-col  
            v-card
                v-card-title
                    h2 List Rendering
                v-card-text
                    p 
    v-row
        v-col
            v-card
                v-card-title
                    h2 Event Handling
                v-card-text
                    p 
        v-col  
            v-card
                v-card-title
                    h2 Form Input Bindings / User Input
                v-card-text
                    p 
    v-row
        v-col
            v-card
                v-card-title
                    h2 Component System
                v-card-text
                    p 
        v-col  
            v-card
                v-card-title
                    h2 Preview of State Management 
                v-card-text
                    p 
</template>
<script>
export default {
    name: "Basics",
    data: () => ({
        isActive: true
    }),
    methods: {
        toggleClass(){
            this.isActive = !this.isActive
        }
    },
    computed: {
        checkIfActive(){
            return this.isActive ? "active" : "disabled";
        }
    }
}
</script>

<style lang="scss" scoped>
    .active{
        background-color: lightgreen;
        color: green;
    }
    .disables{
        background-color: grey;
        color: black;
    }
</style>