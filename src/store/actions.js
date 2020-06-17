import axios from "axios";

export const loadData = ({ commit }) => {
  axios.get("/data.json").then((res) => {
    if (res.data) {
      const data = res.data;

      const funds = data.funds;
      const stockPortfolio = data.stockPortfolio;
      const stocks = data.stocks;

      const portfolio = {
        funds,
        stockPortfolio,
      };

      commit("SET_STOCKS", stocks);
      commit("SET_PORTFOLIO", portfolio);
    }
  });
};
