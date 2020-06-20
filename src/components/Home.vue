<template>
  <div class="home">
    <h1>Trade or View your Portfolio</h1>
    <br />
    <p>You may save and load your Data</p>
    <p>Click on 'End Day' to begin a new Day!</p>
    <br />
    <hr />
    <h3>Your Funds: {{ myFunds | addCurrency}}</h3>
    <div class="login-form">
      <app-login></app-login>
    </div>
  </div>
</template>

<script>
import Login from "../components/login/Login.vue";
export default {
  name: "Home",
  computed: {
    myFunds() {
      return this.$store.getters.funds;
    }
  },
  components: {
    appLogin: Login
  }
};
</script>

<style scoped>
.login-form {
  background-color: rgb(206, 202, 202);
  padding: 30px 0;
}
</style>
