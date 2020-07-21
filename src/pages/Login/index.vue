<template>
  <div class="loginContainer">
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

    <div class="loginTypesWrap" style="height: 623px; display: block;">
      <div class="m-loginTypes">
        <div class="cont">
          <div class="logoWrap"><img src="//yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png" /></div>
          <div class="btnWrap">
            <div class="w-button w-button-xl w-button-block"><i class="u-icon iconfont icon-shouji1"></i><span>手机号快捷登录</span></div>
            <div class="w-button w-button-xl w-button-block w-button-ghostRed"><i class="u-icon iconfont icon-youxiang"></i><span>邮箱帐号登录</span></div>
          </div>
        </div>
        <div class="thirdWrap">
          <div class="itemWrap">
            <span class="item"><i class="icon icon-weixin"></i><span class="name">微信</span></span>
          </div>
          <div class="itemWrap">
            <span class="item"><i class="icon icon-qq"></i><span class="name">QQ</span></span>
          </div>
          <div class="itemWrap">
            <span class="item"><i class="icon icon-weibo"></i><span class="name">微博</span></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  components: {},
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.iconfont
  font-size 50px
.loginContainer
  .m-topBar
    border-bottom 1px solid #999
    .bd
      osition relative
      background-color #fafafa
      height 1.16rem
      .row
        z-index 1
        width 10rem
        margin auto
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
  .loginTypesWrap
    height: 623px;
    display: block;
    .m-loginTypes
      position: relative;
      height: 100%;
      background: #F2F5F4;
      .logoWrap
        text-align: center;
        padding-top: 2.13333rem;
        padding-bottom: 3.09333rem;
        img
          width: 3.57333rem;
          height: 1.2rem;
      .btnWrap
        padding: 0 .53333rem;
        margin-bottom: 2.73333rem;
        .w-button
          margin-bottom: .42667rem;
          overflow: visible;
          vertical-align: middle;
          display: block;
          height 76px
          width: 100%;
          text-align: center;
          line-height: .90667rem;
          font-size: .37333rem;
          color: #fff;
          border: 1px solid #DD1A21;
          background-color: #DD1A21;
          border-radius: 4px;
          overflow: hidden;
        .w-button-ghostRed
          border: 0 solid #DD1A21;
          border: 1Px solid #DD1A21;
          border-radius: 2px;
          color: #DD1A21;
          background-color: transparent;
        .w-button
          border: 0 solid #DD1A21;
          background-color: #DD1A21;
        .w-button-xl
          height: 1.25333rem;
          line-height: 1.05333rem;
        .w-button-ghostRed
          border: 0 solid #DD1A21;
          border: 1Px solid #DD1A21;
          border-radius: 2px;
          color: #DD1A21;
          background-color: transparent;
.u-icon
  font-size 30px
  margin-right: .21333rem;
  position: relative;
  top: -.02667rem;
</style>
