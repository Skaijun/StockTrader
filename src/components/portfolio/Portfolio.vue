<template>
  <div>
    <h2>Portfolio Stocks:</h2>
    <div class="user-info" v-if="name && age">
      <h5>{{ 'Name: ' + name }}</h5>
      <h5>{{ 'Age: ' + age }}</h5>
    </div>
    <div class="stocks">
      <app-stock v-for="(stock, index) in myStocks" :key="index" :stock="stock"></app-stock>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Stock from "./Stock.vue";

export default {
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("fetchUser");
  },
  computed: {
    ...mapGetters({
      myStocks: "stockPortfolio"
    }),
    name() {
      return !this.$store.getters.user ? false : this.$store.getters.user.name;
    },
    age() {
      return !this.$store.getters.user ? false : this.$store.getters.user.age;
    },
    email() {
      return !this.$store.getters.user ? false : this.$store.getters.user.email;
    }
  },
  components: {
    appStock: Stock
  }
};
</script>

<style scpped>
.stocks {
  display: flex;
  flex-wrap: wrap;
}
@media (max-width: 860px) {
  .stocks {
    flex-direction: column;
    align-items: center;
  }
}
</style>