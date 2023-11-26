import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    likes: 0,
  },
  mutations: {
    incrementLikes(state) {
      state.likes++;
    },
    resetLikes(state) {
      state.likes = 0;
    },
  },
});

export default store;
