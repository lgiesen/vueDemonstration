import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    storeVariable: 11,
    id: 1,
    requests: [
      {id: 0, valid: true, name: "lorem ipsum"},
      {id: 2, valid: true, name: "dolor sit amet"},
      {id: 8, valid: false, name: "ex ludus integre qui"},
    ]
  },
  mutations: {

  },
  actions: {

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

