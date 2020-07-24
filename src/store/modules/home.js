// 管理首页数据的vuex模块

import { reqIndexData, reqIndexCategorys, reqIndexNavp, reqCateLists } from "@/api";

export default {
  // *********状态数据
  state: {
    indexData: {}, //首页数据
    indexCategorys: {}, //接收保存首页nav数据
    IndexNavp: {}, //分类左侧导航数据
    CateLists: {}, //分类右侧侧导航数据
  },

  // *********直接更新stata数据的方法对象
  mutations: {
    // 1.接收保存首页数据
    RECEIVE_INDEX_DATA(state, indexData) {
      state.indexData = indexData;
    },
    // 2.接收保存首页nav数据
    RECEIVE_INDEX_CATEGORYS(state, indexCategorys) {
      state.indexCategorys = indexCategorys;
    },
    // 3.分类左侧导航数据
    RECEIVE_INDEX_NAVP(state, IndexNavp) {
      state.IndexNavp = IndexNavp;
    },
    // 4.分类右侧导航数据
    RECEIVE_CATELISTS(state, CateLists) {
      state.CateLists = CateLists;
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
    // 2.获取首页分类数据异步actions
    async getIndexCategorys({ commit }) {
      const result = await reqIndexCategorys();
      if (result.code === 200) {
        const indexCategorys = result.data;
        commit("RECEIVE_INDEX_CATEGORYS", indexCategorys);
      }
    },
    // 3.分类左侧导航数据
    async getIndexNavp({ commit }) {
      const result = await reqIndexNavp();
      if (result.code === 200) {
        const IndexNavp = result.data;
        commit("RECEIVE_INDEX_NAVP", IndexNavp);
      }
    },
    // 3.分类右侧侧导航数据
    async getCateLists({ commit }) {
      const result = await reqCateLists();
      if (result.code === 200) {
        const CateLists = result.data;
        commit("RECEIVE_CATELISTS", CateLists);
      }
    },
  },

  // *********保存计算属性的方法对象
  getters: {},
};
