<template>
  <div>
    <mt-tabbar :selected.sync="selected" fixed v-model="active">
      <mt-tab-item :id="menu.toUrl" v-for="(menu, index) in menus" :key="index" class="tabbarItem">
        <router-link :to="menu.toUrl">
          <div class="routerBox">
            <i slot="icon" :class="'iconfont ' + menu.icon"></i>
            {{ menu.name }}
          </div>
        </router-link>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabItem } from "mint-ui";

export default {
  name: "Footer",
  data() {
    return {
      selected: "首页",
      active: "0",
      bottomNav: 0,
      menus: [
        {
          name: "首页",
          path: "0",
          icon: "icon-shouye",
          toUrl: "/home",
        },
        {
          name: "分类",
          path: "1",
          icon: "icon-iconset0497",
          toUrl: "/category",
        },
        {
          name: "值得买",
          path: "2",
          icon: "icon-tupian",
          toUrl: "/worthtobuy",
        },
        {
          name: "购物车",
          path: "3",
          icon: "icon-gouwuchezhengpin",
          toUrl: "/cart",
        },
        {
          name: "个人",
          path: "4",
          icon: "icon-yonghu",
          toUrl: "/personal",
        },
      ],
    };
  },
  watch: {
    selected: function(val, oldVal) {
      console.log(val);
      // click后打印出当前mt-tab-item的id
    },
  },
  methods: {},
  components: {
    Tabbar,
    TabItem,
  },
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.mint-tab-item-label
  font-size 28px
  margin-top 15px
.iconfont
  font-size 36px
  margin-bottom 5px
.mint-tab-item-icon
  width 40px
  height 40px
.tabbarItem
  box-sizing border-box
.mint-tabbar > .mint-tab-item.is-selected
  background-color #eaeaea
  color #dd1a21
a:hover
  color #dd1a21 !important
.routerBox
  display flex
  flex-direction column
.router-link-active
  color #DD1A21
</style>
