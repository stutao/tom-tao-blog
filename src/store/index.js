import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    token: "",
  },
  getters: {
    getToken: (state) => {
      return state.token
    },
  },
  mutations: {
    set_token(state, ltoken) {
      localStorage.setItem("jwt_token", ltoken)
      state.token = ltoken
    },
    del_token(state) {
      localStorage.removeItem("jwt_token")
      state.token = ""
    },

  },
  actions: {
    set_token(context, token) {
      context.commit("set_token", token)
    },
    del_token(context) {
      context.commit("del_token")
    },
    validate_token(context, token) {
      if(!this.state.token){
        return false
      }
      return 
    },
  },
})

export default store
