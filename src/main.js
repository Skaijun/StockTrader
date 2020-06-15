import Vue from "vue";
import App from "./App.vue";
import store from "./store/store.js";
import router from "./router";

Vue.config.productionTip = false;

Vue.filter("addCurrency", function(value) {
  return "$" + value.toLocaleString();
});

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");

