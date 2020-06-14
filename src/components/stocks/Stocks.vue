<template>
  <div>
    <h2>Aviable Stocks:</h2>
    <div class="stocks">
      <app-stock v-for="(stock, index) in stocks" :stock="stock" :key="index"></app-stock>
    </div>
  </div>
</template>

<script>
import Stock from "./Stock.vue";
// import { StocksList } from "../../data/stocksList.js";

export default {
  computed: {
    stocks() {
      return this.$store.getters.stocks;
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