/**
 * import { mapGetters, mapMutations, mapActions } from 'vuex'
 */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  // 数据状态
  state: { payload: "" },

  // 获取 getter
  getters: {
    payload: (state, getters) => {
      return state.payload;
    },
  },

  // 同步 setter
  mutations: {
    setPayload(state, payload) {
      state.payload = payload;
    },
  },

  // 异步 setter
  actions: {
    setPayload({ commit }, payload) {
      commit("setPayload", payload);
    },
  },
});

export default store;
