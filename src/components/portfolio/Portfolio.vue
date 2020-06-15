<template>
  <div>
    <h2>Portfolio Stocks:</h2>
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
  computed: {
    ...mapGetters({
      myStocks: "stockPortfolio"
    })
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