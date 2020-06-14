<template>
  <div>
    <h2>Portfolio</h2>
    <app-stock v-for="(stock, index) in myStocks" :key="index" :stock="stock"></app-stock>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Stock from "./Stock.vue";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      myStocks: 'stockPortfolio'
      }),
  },
  components: {
    appStock: Stock
  }
};
</script>

<style>
</style>