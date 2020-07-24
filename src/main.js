import Vue from "vue";
import App from "./App.vue";
import "lib-flexible/flexible"; //移动端十等分支配
import Mint from "mint-ui"; //引入mintUI库
import "mint-ui/lib/style.css"; //进入mintUI样式

import router from "./router"; //引入路由器
import store from "./store";
import * as API from "@/api"; // 引入所有接口请求函数并包装在API对象中
import waterfall from "vue-waterfall2";
import "./validate";

Vue.config.productionTip = false; //关闭生产提示

// 让所有组件对象可以直接看到API对象
Vue.prototype.$API = API;

Vue.use(Mint); // 使用mintUI库
Vue.use(waterfall); //瀑布流

new Vue({
  render: (h) => h(App),
  router, // 配置路由器  所有组件对象都可以通过$router属性得到router对象
  store, // 配置vuex的store  所有组件对象都可以通过$store属性得到store对象
}).$mount("#app");
