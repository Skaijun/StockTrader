import Vue from "vue";
import App from "./App.vue";
import store from "./store/store.js";
import router from "./router";
import axios from "axios";

axios.defaults.baseURL = "https://stoke-strader.firebaseio.com";

Vue.config.productionTip = false;

Vue.filter("addCurrency", function(value) {
  return "$" + value.toLocaleString();
});

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
