import stocksList from "../../data/stocksList.js";

const state = {
  stocks: [],
};

const mutations = {
  SET_STOCKS(state, stocksList) {
    state.stocks = stocksList;
  },
  //   'RND_STOCKS'(state) {},
};

const actions = {
  buyStock: ({ commit }, order) => {
    commit("BUY_STOCK", order);
  },
  initStocks: ({ commit }) => {
    commit("SET_STOCKS", stocksList);
  },
  //   rndStocks: ({ commit }) => {
  //     commit('RND_STOCKS');
  //   },
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
