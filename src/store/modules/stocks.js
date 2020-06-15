import stocksList from "../../data/stocksList.js";

const state = {
  stocks: [],
};

const mutations = {
  SET_STOCKS(state, stocksList) {
    state.stocks = stocksList;
  },
  RND_STOCKS(state) {
    state.stocks.forEach((stock) => {
      let spin = Math.random();
      if (spin > 0.5) {
        stock.price = Math.round(1.1 * stock.price);
      } else {
        stock.price = Math.round(0.9 * stock.price);
      }
    });
  },
};

const actions = {
  buyStock: ({ commit }, order) => {
    commit("BUY_STOCK", order);
  },
  initStocks: ({ commit }) => {
    commit("SET_STOCKS", stocksList);
  },
  rndStocks: ({ commit }) => {
    commit("RND_STOCKS");
  },
};

const getters = {
  stocks: (state) => {
    return state.stocks;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
