import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";

import users from "../store/modules/users.js";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: () => import("../components/portfolio/Portfolio.vue"),
    beforeEnter(to, from, next) {
      if (users.state.idToken) {
        next();
      } else {
        next("/");
      }
    },
  },
  {
    path: "/stocks",
    name: "Stocks",
    component: () => import("../components/stocks/Stocks.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
