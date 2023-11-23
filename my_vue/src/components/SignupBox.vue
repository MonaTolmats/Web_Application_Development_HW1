<template>
<div class = container>
     <div class="vue-tempalte">
        <form>
            <h3>Sign In</h3>
            <div class="mb-3">
                <label>Email address</label>
                <input type="email" class="form-control form-control-lg" />
            </div>
            <div class="mb-3">
                <label>Password</label>
                <input type="password" class="form-control form-control-lg" />
            </div>
            <button type="submit" class="btn btn-dark btn-lg btn-block">Sign In</button>
            <p class="forgot-password text-right mt-2 mb-4">
                <router-link to="/forgot-password">Forgot password ?</router-link>
            </p>
        </form>
    </div>
</div>
   
</template>

<script>

</script>

<style scoped>

.container {
display: flex;
align-items: center;
justify-content: center;
width: 500px;
height: 300px;
margin: 20px;
padding: 20px;
background-color: #999;
}

.form-control {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.btn-dark {
  background-color: #343a40;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

label{
    max-width: 100px;
}

</style>