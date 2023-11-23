<template>
  <div class="signup">
    <h1>Signup Page</h1>
    <div class = container>
          <SignupBox></SignupBox>
    </div>
  </div>
</template>

<script>
import SignupBox from '@/components/SignupBox.vue'

export default {
  name: 'SignupView',
  components: {
    SignupBox
  }
}
</script>

<style scoped>
.container{
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
}
</style>