// 所有路由配置的数组

// 引入组件
import Home from "@/pages/Home";
import Category from "@/pages/Category";
import WorthToBuy from "@/pages/WorthToBuy";
import Cart from "@/pages/Cart";
import Personal from "@/pages/Personal";

import Login from "@/pages/Login";
import Search from "@/pages/Search";
import Register from "@/pages/Register";

export default [
  // 五个底部导航
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/category",
    component: Category,
  },
  {
    path: "/worthtobuy",
    component: WorthToBuy,
  },
  {
    path: "/cart",
    component: Cart,
  },
  {
    path: "/personal",
    component: Personal,
  },
  //登录/注册
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  // 搜索
  {
    path: "/search",
    component: Search,
  },
];
