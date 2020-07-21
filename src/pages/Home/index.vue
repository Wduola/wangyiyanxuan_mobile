<template>
  <div class="homeContainer">
    <!-- 搜索区 -->
    <header class="head">
      <img class="headImg" src="../../../public/images/logo.png" alt="网易严选logo" />
      <div class="search" @click="toSearch">
        <i class="iconfont icon-search"></i>
        <span class="placeholder">搜索商品, 共34087款好物</span>
      </div>
      <button class="btn">登录</button>
    </header>
    <!-- 导航区域 -->
    <div class="wrapper" ref="wrapper">
      <ul class="content" ref="cont">
        <li class="item active">推荐</li>
        <li class="item">居家生活</li>
        <li class="item">居家生活</li>
        <li class="item">居家生活</li>
        <li class="item">居家生活</li>
        <li class="item">居家生活</li>
        <li class="item">居家生活</li>
        <li class="item">居家生活</li>
        <li class="item">居家生活</li>
        <li class="item">居家生活</li>
        <li class="item">居家生活</li>
        <li class="item">居家生活</li>
        <li class="item">居家生活</li>
        <li class="item">居家生活</li>
        <li class="item">居家生活</li>
        <li class="item">居家生活</li>
        <li class="item">居家生活</li>
        <li class="item">居家生活</li>
        <li class="item">居家生活</li>
        <li class="item">居家生活</li>
        <li class="item">居家生活</li>
        <li class="item">居家生活</li>
        <li class="item">居家生活</li>
        <li class="item">居家生活</li>
      </ul>
      <div class="toggleWrap">
        <div class="linear"></div>
        <div class="toggle"><i class="iconfont icon-xiala"></i></div>
      </div>
    </div>

    <!-- 推荐组件 -->
    <Recommend></Recommend>

    <!-- 底部固定导航 -->
    <Footer></Footer>
  </div>
</template>

<script>
import BScroll from "better-scroll"; //横向导航组件
import Footer from "@/components/Footer"; //固定底部导航
// 引入组件
import Recommend from "@/components/recommend/recommend"; //推荐
import { mapActions, mapState } from "vuex";

export default {
  name: "Home",

  // 动态数据
  data() {
    return {
      keyword: "",
    };
  },

  async mounted() {
    // 分发action请求获取indexData数据到state中
    this.getIndexData();
  },

  // 方法
  methods: {
    ...mapActions({
      getIndexData: "getIndexData",
    }),

    // 跳转搜索页面
    toSearch() {
      // 编程式路由跳转
      this.$router.push("/search");
    },
  },

  // 计算属性
  computed: {
    ...mapState({
      indexData: (state) => state.home.indexData,
    }),
  },

  // 注册组件
  components: {
    Recommend,
    Footer,
  },
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.head
  display flex
  align-items center
  justify-content space-between
  highgt 88px
  background pink
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
  width 100%
  height 60px
  display flex
  overflow hidden
  position relative
  .content
    position relative
    height 100%
    width 100%
    overflow hidden
    list-style none
    white-space nowrap
    font-size .37333rem
    text-align center
    padding-right .24rem
    .item
      display inline-block
      width 140px
      height 60px
      line-height 60px
      .cont-dest
        margin .1rem 0
    .item.active
      &:after
      position absolute
        content ''
        display block
        height 58px
        width 100%
        position absolute
        border-bottom 2px solid #dd1a21
        bottom 0
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
