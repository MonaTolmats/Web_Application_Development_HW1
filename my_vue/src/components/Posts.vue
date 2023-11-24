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
          <img class="post_logo" src="/like.png" alt="Like button">
          <p>Likes: {{ getLikes }}</p>
        </div>
      </div>
    </div>
    <right-sidebar></right-sidebar>
  </div>
  <button @click="resetAllLikes">Reset All Likes</button>
  <footer-component></footer-component>
</template>


<script>
import { mapState, mapActions, mapGetters, mapMutations} from 'vuex';
import FooterComponent from '@/components/Footer.vue'
import LeftSidebar from '@/components/LeftSidebar.vue'
import RightSidebar from '@/components/RightSidebar.vue'

export default {
  name: 'PostsContainer',
  components: {
    LeftSidebar,
    RightSidebar,
    // ... your components such as FooterComponent, LeftSidebar, RightSidebar
  },
  computed: {
    ...mapState(['posts', 'count']), // Maps state.posts to this.posts
    ...mapGetters(['getLikes']),
  },
  created() {
    this.fetchPosts(); // Fetch posts when the component is created
  },
  methods: { // Maps actions.fetchPosts to this.fetchPosts
    ...mapMutations(['increment', 'resetLikes']),
    ...mapActions(['fetchPosts', 'incrementAsync', 'incrementLikesAsync', 'resetAllLikes']),
  }
}
</script>



<style scoped>
.container{
    display: flex;
    justify-content: space-between;
    top: 0%;
    padding-top: 9px;
    padding-bottom: 9px;

}

.post_logo, .like_button {
  /* Adjust the size as needed */
  width: 25px; 
  height: 25px;
}

.post_image {
  max-width: 50%; /* Ensures the image is not wider than its container */
  height: auto; /* Maintains the aspect ratio of the image */
  border-radius: 10px; /* Optional: for rounded corners */
}

.post {
  background-color: #dac7c7; /* Light gray background */
  padding: 15px; /* Space inside each post container */
  margin-bottom: 20px; /* Space between each post */
  border-radius: 10px; /* Rounded corners for the container */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
}
   

</style>