import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    storeVariable: 123,
    requests: [
      {id: 123, valid: true, priorityLevel: 20},
      {id: 234, valid: true, priorityLevel: 1},
      {id: 345, valid: false, priorityLevel: 7},
    ]
  },
  mutations: {
    incVar(store){
      store.storeVariable++
    },
  },
  actions: {
    incrementVar(context){
      context.commit('incVar')
    },
    incrementVarDelayed({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          commit('incVar')
          resolve()
        }, 500)
      })
    }
  },
  getters: {
    getRequestCount: state => {
      return state.requests.length
    },
    getValidRequests: state => {
      return state.requests.filter(request => request.valid)
    },
    // id is passed as an argument
    getRequestById: (state) => (id) => {
      return state.requests.find(request => request.id === id)
    }
  },
  modules: {

  }
})

