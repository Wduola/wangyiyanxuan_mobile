<template>
  <div class="homeContainer">
    <!-- 搜索区 -->
    <header class="head">
      <img class="headImg" src="../../../public/images/logo.png" alt="网易严选logo" />
      <div class="search" @click="toSearch">
        <i class="iconfont icon-search"></i>
        <span class="placeholder">搜索商品, 共34087款好物</span>
      </div>
      <router-link to="/login">
        <button class="btn">登录</button>
      </router-link>
    </header>
    <!-- 导航区域 -->
    <div class="wrapper" ref="wrapper" v-if="indexData.kingKongModule">
      <ul class="content" ref="cont" :style="{ width: '' }">
        <li class="item" @click="changeNavId(0, 0)" :class="{ activeClass: navId === 0 }">
          推荐
        </li>
        <li
          class="item"
          v-for="(navItem, index) in indexData.kingKongModule.kingKongList"
          :key="index"
          @click="changeNavId(index + 1, navItem.L1Id)"
          :class="{ activeClass: navId === index + 1 }"
        >
          {{ navItem.text }}
        </li>
      </ul>
      <div class="toggleWrap">
        <div class="linear"></div>
        <div class="toggle"><i class="iconfont icon-xiala"></i></div>
      </div>
    </div>

    <!-- 推荐组件 -->
    <Recommend v-if="navId === 0"></Recommend>
    <CategorgList v-else :navId="navId"></CategorgList>
    <!-- 底部固定导航 -->
    <Footer></Footer>
  </div>
</template>

<script>
import BScroll from "better-scroll"; //横向导航组件
import Footer from "@/components/Footer"; //固定底部导航
// 引入组件
import Recommend from "@/components/Recommend"; //推荐
import CategorgList from "@/components/CategorgList";
import { mapActions, mapState } from "vuex";

export default {
  name: "Home",

  // 动态数据
  data() {
    return {
      navId: 0, // 导航动态class标识
      navIndex: 0, // 导航对应页面标识
    };
  },

  async mounted() {
    // 分发action请求获取indexData数据到state中
    await this.getIndexData();
    // 等待请求结束，数据更新，创建scroll对象
    // nextTick作用：通过测试，它是将你传进去的回调函数等所在函数的所有同步代码执行完后才会调用，mounted所有同步代码执行完毕，nextTick回调执行
    this.$nextTick(() => {
      this.verScroll();
    });
  },

  // 方法
  methods: {
    // 触发action
    ...mapActions({
      getIndexData: "getIndexData",
    }),

    // 点击导航变色
    changeNavId(navId, navIndex) {
      navId !== this.navId && ((this.navId = navId), (this.navIndex = navIndex));
    },

    // 跳转搜索页面
    toSearch() {
      // 编程式路由跳转
      this.$router.push("/search");
    },

    // better-scroll
    verScroll() {
      // let width = this.List.length * 60; // 动态计算出滚动区域的大小
      // this.$refs.cont.style.width = width + "px"; // 修改滚动区域的宽度
      // console.log("11", this.$refs.cont);
      if (!this.scroll) {
        this.scroll = new BScroll(this.$refs.wrapper, {
          startX: 0,
          click: true,
          scrollX: true,
          scrollY: false,
          eventPassthrough: "vertical",
        });
      } else {
        this.scroll.refresh(); //如果dom结构发生改变调用该方法
      }
    },
  },

  // 计算属性
  computed: {
    // 读取state数据
    ...mapState({
      indexData: (state) => state.home.indexData,
    }),
  },

  // 监视属性
  watch: {
    navId(newValue) {
      this.comName = newValue === 0 ? "Recommend" : "CategorgList";
    },
  },

  // 注册组件
  components: {
    Recommend,
    Footer,
    CategorgList,
  },
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.head
  display flex
  align-items center
  justify-content space-between
  highgt 88px
  padding 16px 30px
  .headImg
    width 138px
    height 40px
    display inline-block
    margin-right 20px
  .search
    height 56px
    width 442px
    -webkit-flex-grow: 1
    display flex
    flex-flow row nowrap
    align-items center
    justify-content center
    font-size 12px
    background-color #ededed
    border-radius .10667rem
    .placeholder
      font-size .37333rem
      border 0
      line-height 56px
    .iconfont
      font-size .47333rem
      display inline-block
      margin-right .13333rem
  .btn
    width .98667rem
    height .53333rem
    line-height .53333rem
    text-align center
    color #DD1A21
    border 1px solid #DD1A21
    border-radius .10667rem
    margin-left .21333rem
    font-size .37333rem

// batter-scroll 横向滑动
.wrapper
  height 61px
  display flex
  overflow hidden
  position relative
  .content
    position relative
    height 100%
    list-style none
    white-space nowrap
    font-size .37333rem
    text-align center
    padding-right .24rem
    .item
      position relative
      display inline-block
      width 140px
      height 60px
      line-height 60px
      &.activeClass
        color #DD1A21
      &.activeClass:after
        content ''
        height 5px
        width 100%
        position absolute
        bottom 0
        left 0
        background #DD1A21
// batter-scroll 下拉
.toggleWrap
  width 160px
  height 60px
  display: flex;
  flex-grow: 0;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
  .linear
    width 60px
    height 60px
    background-image linear-gradient(to right,rgba(255,255,255,0) 0,#fff 100%)
  .toggle
    width 100px
    height 60px
    text-align center
    background #fff
    .iconfont
      color #666
      font-size 40px




.test
  font-size 0
</style>
