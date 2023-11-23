<template>
  <div class="container">

    <!-- ei lase submittida kui validatePassword ei kehti -->
    <form @submit.prevent="validatePassword">

      <h3>Sign In</h3>
      <div class="input">
        <label>Email address</label>
        <input type="email" class="textbox" />
      </div>
      <div class="input">
        <label>Password</label>
        <input type="password" class="textbox" v-model="password" />
      </div>

    <!-- Kui passwordError ei ole tühi string siis lisab kuvatavasse listi iga eksisteeriva errori -->
      <ul class="error" v-if="passwordError">
        <li v-for="error in getErrors()" :key="error">{{ error }}</li>
      </ul>

      <button type="submit" class="submit_button">Sign Up</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      password: '',
      passwordError: ''
    };
  },
  methods: {
    validatePassword() {
      const errorMessages = this.getErrors();

      if (errorMessages.length > 0) {
        this.passwordError = 'Password is not valid:';
      } else {
        this.passwordError = '';
        this.$router.push('/');
        // Redirect only after successful sign-in (you may want to handle authentication here)
      }
    },
    //Kõik tingimused
    getErrors() {
      const lengthRegex = /^.{8,15}$/;
      const uppercaseRegex = /[A-Z]/;
      const lowercaseRegex = /[a-z].*[a-z]/;
      const numericRegex = /\d/;
      const startUppercaseRegex = /^[A-Z]/;
      const underscoreRegex = /_/;

      const errorMessages = [];

      //Kontrollib iga tingimuse. kui eksisteerib siis lisab listi selle tingimuse teksti
      if (!lengthRegex.test(this.password)) {
        errorMessages.push('Your password must have at least 8 characters and less than 15 characters');
      }
      if (!uppercaseRegex.test(this.password)) {
        errorMessages.push('Your password must have at least one uppercase alphabet character');
      }
      if (!lowercaseRegex.test(this.password)) {
        errorMessages.push('Your password must have at least two lowercase alphabet characters');
      }
      if (!numericRegex.test(this.password)) {
        errorMessages.push('Your password must have at least one numeric value');
      }
      if (!startUppercaseRegex.test(this.password)) {
        errorMessages.push('Your password should start with an uppercase alphabet');
      }
      if (!underscoreRegex.test(this.password)) {
        errorMessages.push('Your password should include the character "_"');
      }
      return errorMessages;
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column; /* Stack children vertically */
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  min-width: 800px;
  min-height: 200px; /* Set a minimum height */
margin-bottom: 50px;
  margin: 20px;
  padding: 20px;
  background-color: #999;
  overflow: hidden; /* Hide content that exceeds the container height */

}

.textbox {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.submit_button {
  background-color: #343a40;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

label {
  max-width: 100px;
}

.error {
  color: rgb(194, 10, 10);
  margin-top: 5px;
  list-style-type: none; /* Remove default list styling */
  padding: 0; /* Remove default padding for the list */
}

.error li {
  margin-bottom: 5px; /* Adjust margin between error messages */
}
</style>
