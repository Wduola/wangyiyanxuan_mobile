// 管理首页数据的vuex模块

import { reqIndexData } from "@/api";

export default {
  // *********状态数据
  state: {
    indexData: {}, //首页数据
  },

  // *********直接更新stata数据的方法对象
  mutations: {
    // 1.接收保存首页数据
    RECEIVE_INDEX_DATA(state, indexData) {
      state.indexData = indexData;
    },
  },

  // *********间接更新state的方法对象
  actions: {
    // 1.获取首页的数据异步actions
    async getIndexData({ commit }) {
      // 发异步ajax请求
      const result = await reqIndexData();
      // 成功后提交mutation保存数据
      if (result.code === 200) {
        const indexData = result.data;
        commit("RECEIVE_INDEX_DATA", indexData);
      }
    },
  },

  // *********保存计算属性的方法对象
  getters: {},
};
