import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import store from "./store/store.js";
import router from "./router";
import axios from "axios";

Vue.config.productionTip = false;

Vue.use(Vuelidate);

axios.defaults.baseURL = "https://stoke-strader.firebaseio.com";

Vue.filter("addCurrency", function(value) {
  return "$" + value.toLocaleString();
});

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
