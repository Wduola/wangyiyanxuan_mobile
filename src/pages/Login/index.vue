<template>
  <div class="loginContainer">
    <!-- Header组件 -->
    <Header></Header>
    <div class="loginTypesWrap">
      <div class="m-loginTypes">
        <div class="cont">
          <div class="logoWrap">
            <img src="//yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png" />
          </div>
          <div class="btnWrap">
            <div class="w-button w-button-xl w-button-block" @click="goPhoneLogin">
              <i class="u-icon iconfont icon-shouji1"></i><span>手机号快捷登录</span>
            </div>
            <div class="w-button w-button-xl w-button-ghostRed" @click="goEmailLogin">
              <i class="u-icon iconfont icon-youxiang"></i><span>邮箱帐号登录</span>
            </div>
            <router-view></router-view>
          </div>
        </div>
        <div class="thirdWrap">
          <div class="itemWrap">
            <span class="item">
              <i class="iconfont icon-gongzhonghao"></i>
              <span class="name">微信</span>
            </span>
          </div>
          <div class="itemWrap">
            <span class="item"><i class="iconfont icon-qq"></i><span class="name">QQ</span></span>
          </div>
          <div class="itemWrap">
            <span class="item">
              <i class="iconfont icon-weibo"></i>
              <span class="name">微博</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";

export default {
  name: "Login",
  components: { Header },
  methods: {
    goPhoneLogin() {
      this.$router.push("/phonelogin");
    },
    goEmailLogin() {
      this.$router.push("/emaillogin");
    },
  },
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.iconfont
  font-size 50px
.loginContainer
  height 100%
  background #efefef
  .loginTypesWrap
    display: block;
    .m-loginTypes
      position: relative;
      height: 100%;
      background: #F2F5F4;
      .cont
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
            border-radius: 4px;
            overflow: hidden;
          .w-button-ghostRed
            border: 0 solid #DD1A21;
            border: 1px solid #DD1A21;
            border-radius: 2px;
            color: #DD1A21;
            background-color: transparent;
          .w-button-block
            border: 0 solid #DD1A21;
            background-color: #DD1A21;
          .w-button-xl
            height: 1.25333rem;
            line-height: 1.05333rem;
      .thirdWrap
        position: absolute;
        width: 100%;
        left: 0;
        height: .53333rem;
        text-align: center;
        .itemWrap
          height: .53333rem;
          border-right: 1px solid #979797;
          display: inline-block;
          text-align: center;
          padding: 0 .53333rem;
          .item
            height: .53333rem;
            position: relative;
            top: -.13333rem;
            font-size 30px
            color: #7F7F7F;
            .name
              font-size: .37333rem;
              line-height: .53333rem;
              height: .53333rem;
              color: #7F7F7F;
              margin-left: .06667rem;
.u-icon
  font-size 30px
  margin-right: .21333rem;
  position: relative;
  top: -.02667rem;
</style>
