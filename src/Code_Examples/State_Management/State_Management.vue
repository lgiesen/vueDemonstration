<template lang="pug">
    v-container
        p getRequestCount: {{getRequestCount}} | getValidRequests: {{getValidRequests}}
        v-text-field(v-model.number="id")
        p getRequestById: {{getRequestById(id)}}
        p storeVariable: {{ storeVariable }}
        v-btn(@click="incrementVarDelay") delayed increment
        btn(v-on:click=”func(), counter += 1”) {{ counter }}
        
div(:class="{active: isActive, disabled: !isActive}")
div(:class="[isActive ? 'active' : 'disabled']")
div(:class="checkIfActive")
</template>
<script>
// importing map-Helpers for facilitating computed property creation
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
export default {
    name: "State_Management_Example",
    data() { return { list: [{ id: 1, name: "a" }, {id: 2, name: "b" }, { id: 3, name: "c" }] }},
    // data: () => ({
    //     id: 123, 
    // }),
    computed: {
        ...mapState(['storeVariable']),
        ...mapGetters([ 'getRequestCount', 'getValidRequests', 'getRequestById' ]),
    },
    methods: {
        incrementVarDelay(){ 
            this.$store.dispatch('incrementVarDelayed') 
        },
    }
};
</script>

