<template>
  <div class="personalContainer">
    <!-- 头部 -->
    <div class="header">
      <img src="./images/user.png" alt="" />
      <div class="userName">
        <p>用户名</p>
        <span>普通用户</span>
      </div>
      <div class="erCode">
        <i class="iconfont icon-youxiang"></i>
      </div>
    </div>
    <!-- 我的资产 -->
    <div class="property">
      <h3>我的资产</h3>
      <div class="propertyList">
        <div class="propertyItem">
          <p>$00</p>
          <p class="itemP">回馈金</p>
        </div>
        <div class="propertyItem">
          <p>0</p>
          <p class="itemP">回馈金</p>
        </div>
        <div class="propertyItem">
          <p>0</p>
          <p class="itemP">回馈金</p>
        </div>
        <div class="propertyItem">
          <p>0</p>
          <p class="itemP">回馈金</p>
        </div>
        <div class="propertyItem">
          <p>0</p>
          <p class="itemP">回馈金</p>
        </div>
      </div>
    </div>
    <!-- 功能区 -->
    <div class="func">
      <div class="funcItem">
        <i class="iconfont icon-dingdan"></i>
        <p>我的订单</p>
      </div>
      <div class="funcItem">
        <i class="iconfont icon-rili"></i>
        <p>周六一起拼</p>
      </div>
      <div class="funcItem">
        <i class="iconfont icon-shouhou"></i>
        <p>售后服务</p>
      </div>
      <div class="funcItem">
        <i class="iconfont icon-shouhou"></i>
        <p>邀请返利</p>
      </div>
      <div class="funcItem">
        <i class="iconfont icon-gouwu"></i>
        <p>优先购</p>
      </div>
      <div class="funcItem">
        <i class="iconfont icon-huiyuantequanfenxianglibao2"></i>
        <p>积分中心</p>
      </div>
      <div class="funcItem">
        <i class="iconfont icon-huiyuan"></i>
        <p>会员俱乐部</p>
      </div>

      <div class="funcItem">
        <i class="iconfont icon-dizhi"></i>
        <p>地址管理</p>
      </div>
      <div class="funcItem">
        <i class="iconfont icon-tubiaolunkuo-"></i>
        <p>账号安全</p>
      </div>
      <div class="funcItem">
        <i class="iconfont icon-kefu"></i>
        <p>帮助与客服</p>
      </div>
      <div class="funcItem">
        <i class="iconfont icon-yijian"></i>
        <p>意见管理</p>
      </div>
    </div>
    <div class="out">
      <h3>退出登录</h3>
    </div>
    <!-- 底部固定导航 -->
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/components/Footer"; //固定底部导航
export default {
  name: "Personal",
  // 注册组件
  components: {
    Footer,
  },
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.personalContainer
  width 750px
  margin 0 auto
  padding-bottom 98px
.header
  height 270px
  background-image url(./images/bg.webp)
  display flex
  justify-content space-between
  align-items center
  padding 0 20px
  img
    width 142px
    height 142px
    border-radius 50%
  .userName
    width 480px
    font-size 40px
    color #fff
    span
      font-size 30px
  .icon-youxiang
    color red
.property
  height 285px
  background: #FFF;
  border-bottom: .26667rem solid #F4F4F4;
  padding 0 20px
  h3
    height 105px
    line-height 105px
    font-size 30px
    font-weight 100
    border-bottom 1px solid #efefef
    padding 0 20px
  .propertyList
    height 160px
    width 100%
    display flex
    flex 1
    align-items center
    justify-content space-between
    .propertyItem
      font-size .42667rem
      text-align center
      .itemP
        margin-top 15px
.func
  display flex
  flex-wrap wrap
  background #efefef
  .funcItem
    text-align center
    width 249px
    height 180px
    padding-top 30px
    margin-left 1px
    border-bottom 1px solid #efefef
    background #fff
    box-sizing border-box
    font-size: .32rem;
    .iconfont
      font-size: 1rem;
.out
  height 100px
  background #efefef
  padding 30px 0 10px 0
  h3
    font-size 30px
    text-align center
    font-weight 300
    line-height 100px
    background #fff
</style>
