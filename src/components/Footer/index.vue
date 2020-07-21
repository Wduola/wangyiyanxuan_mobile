<template>
  <div>
    <mt-tabbar :selected.sync="selected" fixed v-model="active">
      <mt-tab-item :id="menu.name" v-for="(menu, key) in menus" :key="key">
        <!-- <img slot="icon" :class="{ active: bottomNav === key }" /> -->
        <i slot="icon" :class="'iconfont ' + menu.icon"></i>
        {{ menu.name }}
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
        },
        {
          name: "分类",
          path: "1",
          icon: "icon-iconset0497",
        },
        {
          name: "值得买",
          path: "2",
          icon: "icon-tupian",
        },
        {
          name: "购物车",
          path: "3",
          icon: "icon-gouwuchezhengpin",
        },
        {
          name: "个人",
          path: "4",
          icon: "icon-yonghu",
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
  methods: {
    tabChanged(data) {
      this.active = data;
    },
  },
  components: {
    Tabbar,
    TabItem,
  },
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.iconfont
  font-size 40px
.txt
  display block
  margin-top .09333rem
  font-size .32rem
  color #666
  line-height 1
.active
   color #DD1A21
</style>
