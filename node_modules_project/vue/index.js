import Vue from "vue";
import Vuex from "vue";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
});

store.commit("íncrement");
console.log(store.state.count);
