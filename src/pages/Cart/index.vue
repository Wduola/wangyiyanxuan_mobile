<template>
  <div class="cartContainer">
    <div class="m-cartHd">
      <span class="logo">购物车</span>
      <div class="right">
        <div class="cart-coupon"><span class="txt">领券</span></div>
        <span class="cart-btn"></span>
      </div>
    </div>

    <div>
      <ul class="m-servicePolicy">
        <li class="item"><i class="u-icon u-icon-servicePolicy"></i><span>30天无忧退货</span></li>
        <li class="item"><i class="u-icon u-icon-servicePolicy"></i><span>48小时快速退款</span></li>
        <li class="item"><i class="u-icon u-icon-servicePolicy"></i><span>满99元免邮费</span></li>
      </ul>
    </div>

    <div class="m-defaultPage m-defaultPage-noCart">
      <div class="container">
        <div class="img"></div>
        <div class="txt">
          <div class="noCart-login" @click="goLogin">
            <div class="noCart-title"></div>
            <div class="noCart-btn">登录</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部固定导航 -->
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "../../components/Footer"; //固定底部导航
export default {
  name: "Cart",
  components: {
    Footer,
  },
  methods: {
    // 去登录页
    goLogin() {
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.cartContainer
  .m-cartHd
    height 1.17333rem
    padding 0 .4rem
    line-height 1.17333rem
    text-align center
    background-color #fff
    position relative
    .logo
      float left
      font-size .48rem
    .right
      position absolute
      top 0
      right .4rem
      height 1.17333rem
      font-size .4rem
  .m-servicePolicy
    position relative
    z-index 1
    height .93333rem
    padding 0 .4rem
    background #eee
    display -moz-flex
    display flex
    flex-flow row nowrap
    align-items center
    justify-content space-between
    .item
      display -moz-flex
      display flex
      align-items center
      font-size .32rem
      color #666
  .m-defaultPage
    position fixed
    top 1.17333rem
    left 0
    bottom 0
    z-index 0
    width 100%
    background-color #f4f4f4
    text-align center
    .container
      position absolute
      top -.66667rem
      right 0
      bottom 0
      left 0
      height 4rem
      margin auto
      .img
        vertical-align middle
        width 3.30667rem
        height 3.30667rem
        margin-bottom .10667rem
        background-size 3.30667rem 3.30667rem
        background-position center center
        background-repeat no-repeat
        background-image url(./images/cart.webp)
        margin 0 auto
      .txt
        font-size .37333rem
        line-height 1
        color #7f7f7f
        .noCart-login
          margin-top -.26667rem
          .noCart-title
            margin-bottom .66667rem
            line-height 1
            font-size .37333rem
            color #999
          .noCart-btn
            margin auto
            width 6.4rem
            height 1.22667rem
            font-size .4rem
            line-height 1.22667rem
            color #fff
            background-color #DD1A21
            border-radius .04rem
            text-align center
</style>
