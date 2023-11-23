<template>
    <div class = container>
        <right-sidebar></right-sidebar>
        <div class = postsContainer>
            <h1>Posts will be here soon</h1>
            
        </div>
        <left-sidebar></left-sidebar>
    </div>
    <footer>
    </footer>
</template>

<script>
import Footer from '@/components/Footer.vue'
import RightSidebar from '../components/RightSidebar.vue'
import LeftSidebar from '../components/LeftSidebar.vue'

export default {
  name: 'PostsContainer',
  components: {
    Footer, RightSidebar, LeftSidebar
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
   

</style>