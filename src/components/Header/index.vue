<template>
  <div class="m-topBar">
    <div class="bd">
      <div class="row">
        <a class="iconfont icon-shouye"></a>
        <a href="/">
          <img class="logo" src="../../../public/images/logo.png" alt="网易严选logo" />
        </a>
        <div class="right">
          <a class="search" href="/search"><i class="iconfont icon-search"></i></a>
          <a class="cart" href="/cart"><i class="iconfont icon-gouwuchezhengpin"></i></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.iconfont
  font-size 50px
.m-topBar
  border-bottom 1px solid #999
  .bd
    osition relative
    background-color #fafafa
    height 1.16rem
    .row
      z-index 1
      overflow hidden
      position relative
      padding 0 .21333rem 0 .32rem
      height 1.17333rem
      display flex
      align-items center
      justify-content space-between
      .logo
        width 160px
        position absolute
        top 0
        right 0
        bottom 0
        left 0
        margin auto
        .u-icon-home
          font-size 60px
          width .64rem
          height .58667rem
          background-position 0 -.98667rem
      .right
        margin-left auto
        margin-right 50px
        .search
          margin-right .26667rem
        .u-icon-search1
          position relative
          bottom 0
</style>
