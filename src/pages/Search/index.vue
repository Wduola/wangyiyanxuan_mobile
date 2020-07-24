<template>
  <div class="searchContainer">
    <div class="search">
      <div class="searchInp">
        <i class="iconfont icon-search"></i>
        <input type="text" placeholder="搜索好物" />
      </div>
      <button @click="toBack">取消</button>
    </div>
    <div class="m-searchSuggestionsViews">
      <div class="m-searchSuggestions">
        <header class="hd"><h3 class="tit">热门搜索</h3></header>
        <nav class="list">
          <a class="item highlight">梅雨季必备</a>
          <a class="item">拖鞋</a>
          <a class="item highlight">毛巾</a>
          <a class="item">猫粮</a>
          <a class="item highlight">717吃吃节</a>
          <a class="item">耳机</a>
          <a class="item highlight">牛奶</a>
          <a class="item">拖把</a>
          <a class="item highlight">口罩专区</a>
          <a class="item">风扇</a>
          <a class="item">乳胶枕</a>
          <a class="item">水杯</a>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import { Search } from "mint-ui";
export default {
  name: "Search",
  data() {
    return {
      value: "",
    };
  },
  methods: {
    // 返回上一页
    toBack() {
      // 编程式路由跳转
      this.$router.back();
    },
  },
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.searchContainer
  .search
    padding-right .4rem
    background-color #fff
    display flex
    justify-content space-between
    flex-direction row
    z-index 1
    margin 20px auto
    overflow hidden
    position relative
    padding 0 .21333rem 0 .32rem
    align-items center
    .searchInp
    position relative
      padding-top 0
      padding-left .26667rem
      padding-bottom 0
      border 0
      height .74667rem
      border-radius: 4px
      input
        font-size .35rem
        border 0
        width 604px
        height 52px
        padding-left 70px
        box-sizing border-box
        background-color #f4f4f4
      .iconfont
        position absolute
        top 6px
        left 60px
        content ' '
        font-size 0.45rem
    button
      border 0
      font-size 0.4rem
      background #fff
  .m-searchSuggestionsViews
    background-color #eee
    position relative
    z-index 1
    font-size .37333rem
    .m-searchSuggestions
      padding 0 .4rem .4rem
      background-color #fff
      overflow hidden
      .hd
        height 1.2rem
        color #999
        display flex
        align-items center
        h3
          font-size .37333rem
          font-weight 100
      .list
        margin-right -.4rem
        margin-bottom -.42667rem
        zoom 1
        .item
          font-size 24px
          float left
          padding 0 .2rem
          margin-right .42667rem
          margin-bottom .42667rem
          line-height .61333rem
          border 1px solid #999
          border-radius 4px
          color #333
          &.highlight
            border-color #DD1A21
            color #DD1A21
</style>
