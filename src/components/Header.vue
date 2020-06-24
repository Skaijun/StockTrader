<template>
  <div>
    <div id="nav">
      <div class="nav__left-inner">
        <router-link to="/">Home</router-link>
        <router-link to="/portfolio">Portfolio</router-link>
        <router-link to="/stocks">Stocks</router-link>
      </div>
      <div class="nav__right-inner">
        <button v-if="auth" class="nav__right-end-day-btn" @click="rndPriceOfStocks">End Day</button>
        <div v-if="auth" class="nav__right-save-load" @click="isDropdownOpen = !isDropdownOpen">
          <button class="nav__right-save-load-btn">Save & Load</button>
          <div class="nav__right-dropdown" :class="{'opened':  isDropdownOpen}">
            <ul class="nav__right-dropdown-list">
              <li>
                <a href="#" @click="saveDataToDB">Save</a>
              </li>
              <li>
                <a href="#" @click="loadDataFromDB">Load</a>
              </li>
            </ul>
          </div>
        </div>
        <strong v-if="auth">Funds: {{ myFunds | addCurrency }}</strong>
        <strong v-if="!auth">Logout</strong>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";

export default {
  data() {
    return {
      isDropdownOpen: false
    };
  },
  computed: {
    ...mapGetters({
      myFunds: "funds",
      auth: "isAuthenticated"
    })
  },
  methods: {
    rndPriceOfStocks() {
      this.$store.dispatch("rndStocks");
    },
    saveDataToDB() {
      const data = {
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks
      };
      axios
        .put("/data.json", data)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    },
    loadDataFromDB() {
      this.$store.dispatch("loadData");
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
.nav__right-inner {
  display: flex;
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
.nav__right-save-load {
  position: relative;
}
.nav__right-dropdown {
  position: absolute;
  display: none;
}
.nav__right-dropdown.opened {
  display: block;
}

.nav__right-dropdown-list {
  list-style: none;
  font-weight: 400;
  background-color: rgb(226, 249, 250);
  padding-left: 5px;
  padding-bottom: 5px;
  width: 100px;
  margin-top: 20px;
}
.nav__right-dropdown-list li {
  padding: 6px 0;
  cursor: pointer;
}
.nav__right-dropdown-list li:hover {
  color: blueviolet;
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
  .nav__right-inner {
    flex-direction: row;
    justify-content: center;
  }
  .nav__right-inner button,
  .nav__right-inner strong {
    font-weight: 500;
  }
  .nav__right-dropdown-list {
    font-size: 24px;
    line-height: 28px;
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
  .nav__right-inner strong,
  .nav__right-save-load {
    font-size: 18px;
    line-height: 24px;
    font-weight: 400;
  }
  .nav__right-dropdown-list {
    font-size: 18px;
    line-height: 20px;
    font-weight: 400;
  }
  .nav__right-dropdown-list li {
    padding-bottom: 7px;
  }
}
@media (max-width: 473px) {
  .nav__right-inner {
    display: flex;
    flex-direction: column;
  }
  .nav__right-inner button,
  .nav__right-save-load-btn {
    padding: 10px 0 10px 0;
    margin: 0;
    border-radius: 5px;
    width: 100%;
  }
  .nav__right-inner strong {
    margin-top: 10px;
  }
  .nav__right-dropdown {
    top: -53px;
    right: -18px;
  }
  .nav__right-dropdown-list li {
    background-color: rgb(203, 240, 241);
    padding: 10px 0;
  }
  .nav__right-dropdown-list li {
    border-top: solid 1px black;
    border-left: solid 1px black;
    border-right: solid 1px black;
  }
  .nav__right-dropdown-list li + li {
    border-bottom: solid 1px black;
  }
}
</style>