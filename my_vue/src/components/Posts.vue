<template>
  <div class="container">
    <left-sidebar></left-sidebar>
    <div id="postsContainer">
      <div class="post" v-for="post in posts" :key="post.postId">
        <div class="post_header">
          <img class="post_logo" :src="'/icon.ico'" alt="Author's logo">
          <p class="post_date">{{ post.createTime }}</p>
        </div>
        <div>
          <img v-if="post.image" class="post_image" :src="post.image" :alt="post.title">
          <p class="post_text">{{ post.title }}</p>
          <button class="like_button" @click="incrementLikes(post)">
            <img src="/like.png" alt="Like button">
          </button>
          <p>Likes: {{ post.likeCount || 0 }}</p>
        </div>
      </div>
    </div>
    <right-sidebar></right-sidebar>
  </div>
  <button @click="resetAllLikes">Reset All Likes</button>
  <footer-component></footer-component>
</template>

<script>
import { mapState, mapActions, mapGetters, mapMutations } from 'vuex';
import FooterComponent from '@/components/Footer.vue';
import LeftSidebar from '@/components/LeftSidebar.vue';
import RightSidebar from '@/components/RightSidebar.vue';

export default {
  name: 'PostsContainer',
  components: {
    LeftSidebar,
    RightSidebar,
    // ... your components such as FooterComponent, LeftSidebar, RightSidebar
  },
  computed: {
    ...mapState(['posts', 'count']), // Maps state.posts to this.posts
    getLikes() {
      return this.$store.state.l;
    },
  },
  created() {
    this.fetchPosts(); // Fetch posts when the component is created
  },
  methods: {
    ...mapMutations(['increment', 'resetLikes']),
    ...mapActions(['fetchPosts', 'incrementAsync', 'incrementLikesAsync', 'resetAllLikes']),
    incrementLikes(post) {
      this.incrementLikesAsync(post.postId);
      post.likeCount = Number.isNaN(post.likeCount) ? 1 : post.likeCount + 1;
    },
    resetAllLikes() {
      this.resetLikes();
      // Reset likeCount for each post to 0
      this.posts.forEach((post) => {
        post.likeCount = 0;
      });
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  top: 0%;
  padding-top: 9px;
  padding-bottom: 9px;
}

.post_logo,
.like_button img {
  /* Adjust the size as needed */
  width: 25px;
  height: 25px;
}

.post_image {
  max-width: 50%;
  height: auto;
  border-radius: 10px;
}

.post {
  background-color: #dac7c7;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.like_button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  font-size: inherit;
  color: inherit;
}
</style>
