import axios from "../../axios-auth/axios-auth.js";
import globalAxios from "axios";
import router from "../../router/index.js";

const state = {
  idToken: null,
  userId: null,
  user: null,
};

const mutations = {
  userAuth(state, userData) {
    state.idToken = userData.token;
    state.userId = userData.userId;
  },
  fetchUserData(state, user) {
    state.user = user;
  },
  userLogout(state) {
    state.idToken = null;
    state.userId = null;
  },
};

const actions = {
  signUp({ commit, dispatch }, authData) {
    axios
      .post("/accounts:signUp?key=AIzaSyAKQyJtqvi2jpcVfbhvqu1F6-NEdioJeX4", {
        email: authData.email,
        password: authData.password,
        age: authData.age,
        name: authData.name,
        returnSecureToken: true,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.idToken);
        localStorage.setItem("userId", res.data.localId);
        console.log(res);
        commit("userAuth", {
          token: res.data.idToken,
          userId: res.data.localId,
        });
        dispatch("storeUser", authData);
      })
      .catch((err) => console.log(err));
  },
  signIn({ commit }, authData) {
    axios
      .post(
        "/accounts:signInWithPassword?key=AIzaSyAKQyJtqvi2jpcVfbhvqu1F6-NEdioJeX4",
        {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true,
        }
      )
      .then((res) => {
        localStorage.setItem("token", res.data.idToken);
        localStorage.setItem("userId", res.data.localId);
        console.log(res);
        commit("userAuth", {
          token: res.data.idToken,
          userId: res.data.localId,
        });
      })
      .catch((err) => console.log(err));
  },
  storeUser({ state }, userData) {
    if (!state.idToken) {
      return;
    }
    globalAxios
      .post("/users.json" + "?auth=" + state.idToken, userData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  },
  fetchUser({ commit, state }) {
    globalAxios
      .get("/users.json" + "?auth=" + state.idToken)
      .then((res) => {
        console.log(res);
        const data = res.data;
        let users = [];
        for (let key in data) {
          const user = data[key];
          user.id = key;
          users.push(user);
        }
        commit("fetchUserData", users[1]);
      })
      .catch((err) => console.log(err));
  },
  logout({ commit }) {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    commit("userLogout");
    router.replace("/");
  },
  tryUserAutoLogin({ commit }) {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    if (token && userId) {
      commit("userAuth", {
        token: token,
        userId: userId,
      });
    }
  },
};

const getters = {
  user(state) {
    return state.user;
  },
  isAuthenticated(state) {
    return state.idToken !== null;
  },
  userIdToken(state) {
    return state.idToken;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
