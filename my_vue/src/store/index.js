import { createStore } from 'vuex';

export default createStore({
  state: {
    posts: []
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    }
  },
  actions: {
    fetchPosts({ commit }) {
      fetch('/posts.json')
        .then(response => response.json())
        .then(data => {
          commit('setPosts', data);
        })
        .catch(error => console.error('Error fetching posts:', error));
    }
  }
});
