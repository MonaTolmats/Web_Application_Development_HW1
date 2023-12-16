// store.js
const store = new Vuex.Store({
  state: {
    count: 0,
    posts: [],
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    incrementLikes(state, postId) {
      const post = state.posts.find((p) => p.postId === postId);
      if (post) {
        post.likes++;
      }
    },
    resetLikes(state) {
      state.posts.forEach((post) => {
        post.likes = 0;
      });
    },
    setPosts(state, posts) {
      state.posts = posts;
    },
  },
  actions: {
    incrementAsync({ commit }) {
      setTimeout(() => {
        commit('increment');
      }, 1000);
    },
    incrementLikesAsync({ commit }, postId) {
      setTimeout(() => {
        commit('incrementLikes', postId);
      }, 1000);
    },
    resetAllLikes({ commit }) {
      commit('resetLikes');
    },
    fetchPosts({ commit }) {
      fetch('/posts.json')
        .then((response) => response.json())
        .then((data) => {
          commit('setPosts', data);
        })
        .catch((error) => console.error('Error fetching posts:', error));
    },
  },
  getters: {
    getCount: (state) => state.count,
    getLikes: (state) => state.posts.reduce((totalLikes, post) => totalLikes + post.likes, 0),
  },
});

export default store;
