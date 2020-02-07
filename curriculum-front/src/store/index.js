import Vue from "vue";
import Vuex from "vuex";

// vuex 状态持久化
import VuexPersistence from "vuex-persist";

import actions from "./actions";
import mutations from "./mutations";
import state from "./state";

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
});

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters: {},
  plugins: [vuexLocal.plugin]
});
