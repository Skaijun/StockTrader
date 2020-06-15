<template>
  <div>
    <div class="single-stock">
      <div class="stock__top">
        <label>{{ stock.name }}</label>
        <span>(Price: {{ stock.price }} )</span>
      </div>
      <div class="stock__bottom">
        <input
          type="number"
          class="stock__bottom-input"
          :class="{'wrong-input': !isEnoughFunds}"
          placeholder="Quantity"
          v-model="quantity"
        />
        <button
          class="stock__bottom-btn"
          :class="{'wrong-amount': !isEnoughFunds}"
          @click="buyItems"
          :disabled="!isEnoughFunds || quantity <= 0"
        >{{ isEnoughFunds ? 'Buy' : 'Too much'}}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  computed: {
    myFunds() {
      return this.$store.getters.funds;
    },
    isEnoughFunds() {
      return this.myFunds >= this.stock.price * this.quantity;
    }
  },
  methods: {
    buyItems() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.$store.dispatch("buyStock", order);
      this.quantity = 0;
    }
  }
};
</script>

<style scoped>
.single-stock {
  margin: 11px;
  width: 376px;
  border: 1px solid grey;
  border-radius: 5px;
}
.stock__top {
  display: flex;
  justify-content: start;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background-color: greenyellow;
  padding: 5px 10px;
}
.stock__top label {
  margin-right: 5px;
  font-weight: 700;
}
.stock__bottom {
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
}
.stock__bottom-input {
  padding: 5px 10px;
  color: grey;
  border-radius: 3px;
  border: 1px solid grey;
  outline: none;
  width: 200px;
}
.stock__bottom-btn {
  cursor: pointer;
  background-color: #42b983;
  opacity: 0.8;
  outline: none;
  border: none;
  padding: 9px;
  border-radius: 3px;
  font-weight: 600;
}
.stock__bottom-btn:hover {
  opacity: 1;
}
.wrong-amount {
  background-color: rgb(253, 152, 141);
  color: rgb(29, 27, 27);
}
.wrong-amount:hover {
  cursor: not-allowed;
}
.wrong-input {
  border-color: red;
  background-color: rgb(250, 226, 223);
}

@media (max-width: 1240px) {
  .single-stock {
    margin: 11px;
    width: 350px;
  }
}
@media (max-width: 1162px) {
  .single-stock {
    margin: 10px;
    width: 320px;
  }
}
@media (max-width: 1006px) {
  .single-stock {
    margin: 10px;
    width: 400px;
  }
}
@media (max-width: 860px) {
  .single-stock {
    margin: 10px;
    width: 350px;
  }
}
@media (max-width: 450px) {
  .single-stock {
    margin: 5px;
    width: 320px;
  }
}
</style>