const store = new Vuex.Store({
    state: {
      count: 0,
      likes: 0,
    },
    mutations: {
      increment(state) {
        state.count++;
      },
      incrementLikes(state) {
        state.likes++;
      },
      resetLikes(state) {
        state.likes = 0;
      },
    },
    actions: {
      incrementAsync({ commit }) {
        setTimeout(() => {
          commit('increment');
        }, 1000);
      },
      incrementLikesAsync({ commit }) {
        setTimeout(() => {
          commit('incrementLikes');
        }, 1000);
      },
      resetAllLikes({ commit }) {
        commit('resetLikes');
      },
    },
    getters: {
      getCount: (state) => {
        return state.count;
      },
      getLikes: (state) => {
        return state.likes;
      },
    },
  });
  
  export default store;