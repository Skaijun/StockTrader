<template>
  <div class="home">
    <h1>Trade or View your Portfolio</h1>
    <br />
    <p>You may save and load your Data</p>
    <p>Click on 'End Day' to begin a new Day!</p>
    <br />
    <hr />
    <h3>Your Funds: {{ myFunds | addCurrency}}</h3>
  </div>
</template>

<script>

export default {
  name: "Home",
  computed: {
    myFunds() {
      return this.$store.getters.funds;
    }
  },
  components: {
    // appHeader: Header
  }
};
</script>
