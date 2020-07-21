import Vue from "vue";
import App from "./App.vue";
import "lib-flexible/flexible"; //移动端十等分支配
import Mint from "mint-ui"; //引入mintUI库
import "mint-ui/lib/style.css"; //进入mintUI样式

import router from "./router"; //引入路由器

Vue.config.productionTip = false; //关闭生产提示

// 使用mintUI库
Vue.use(Mint);

new Vue({
  render: (h) => h(App),
  router, //配置路由器
}).$mount("#app");
