import Vue from "vue";
import App from "./App.vue";
import "lib-flexible/flexible"; //移动端十等分支配

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
