import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    category: ""
  },
  getters: {
    getCategory(state) {
      return state.category;
    }
  },
  mutations: {
    setCategory(state, category) {
      state.category = category;
    }
  },
  actions: {},
  modules: {},
});
