<template>
  <div class="home">
    <Posts></Posts>
  </div>
</template>

<script>
import Posts from '@/components/Posts.vue'

export default {
  name: 'HomeView',
  components: {
    Posts
  }
}
</script>