<template>
  <div>
    <div id="nav">
      <div class="nav__left-inner">
        <router-link to="/">Home</router-link>
        <router-link to="/portfolio">Portfolio</router-link>
        <router-link to="/stocks">Stocks</router-link>
      </div>
      <div class="nav__right-inner">
        <button class="nav__right-end-day-btn" @click="rndPriceOfStocks">End Day</button>
        <button class="nav__right-save-load-btn">Save & Load</button>
        <strong>Funds: {{ myFunds | addCurrency }}</strong>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      myFunds: "funds"
    })
  },
  methods: {
    rndPriceOfStocks() {
      this.$store.dispatch('rndStocks');
    }
  }
};
</script>

<style scoped>
#nav {
  display: flex;
  justify-content: space-between;
  font-size: 28px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 700;
  margin-bottom: 100px;
  margin-top: 30px;
  padding: 20px;
  background-color: rgb(226, 249, 250);
  border-radius: 25px;
}

.nav__left-inner a + a {
  margin-left: 10px;
  padding-left: 10px;
  border-left: 2px solid black;
}

.nav__right-inner button {
  margin-right: 20px;
  background-color: transparent;
  background: transparent;
  border: none;
  font-size: 28px;
  line-height: 32px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 700;
}

.nav__right-inner button:hover {
  color: #2d41ee;
  cursor: pointer;
}

.nav__right-inner button:focus,
.nav__right-inner button:active {
  outline: none;
}

#nav a {
  color: #2c3e50;
}

#nav a:hover {
  color: #2d41ee;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

@media (max-width: 1000px) {
  #nav {
    flex-direction: column;
  }
  .nav__left-inner {
    margin-bottom: 20px;
  }
}
@media (max-width: 750px) {
  .nav__left-inner {
    display: flex;
    flex-wrap: wrap;
    text-align: center;
  }
  .nav__left-inner a {
    width: 100%;
  }
  .nav__left-inner a + a {
    border: none;
    padding-left: 0;
    margin-left: 0;
    padding-top: 5px;
  }
}
@media (max-width: 650px) {
  .nav__right-inner button,
  .nav__right-inner strong {
    font-size: 18px;
    line-height: 24px;
    font-weight: 400;
  }
}
@media (max-width: 473px) {
  .nav__right-inner {
    display: flex;
    flex-direction: column;
  }
  .nav__right-inner button {
    padding: 0;
    margin: 0 0 7px 0;
    border: 1px solid black;
    border-radius: 5px;
    background-color: rgb(164, 241, 241);
  }
}
</style>