<template>
  <div class="phoneContainer">
    <!-- Header组件 -->
    <Header></Header>

    <form action="www">
      <div class="inpt user">
        <input type="text" name="username" placeholder="邮箱号登陆" />
        <i class="iconfont icon-qingchu"></i>
      </div>
      <div class="inpt user">
        <input type="text" name="username" placeholder="请输入密码" />
      </div>
      <div class="inpt help">
        <span>遇到问题？</span>
        <span>使用手机验证登陆</span>
      </div>
      <button class="btn">登 陆</button>
      <div class="protocol">
        <input type="checkbox" checked />
        <span>我同意<i>《服务条款》</i>和<i>《网络隐私政策》</i></span>
      </div>
    </form>

    <div class="other">其它方式登陆 ></div>
  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  data() {
    return {};
  },
  components: { Header },
  methods: {
    goPhoneLogin() {
      this.$router.push("/phonelogin");
    },
  },
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.phoneContainer
  padding 0 20px
  .inpt
    height 100px
    display flex
    justify-content space-between
    align-items center
    border-bottom 1px solid #efefef
    font-size 30px
    color #999
    input
      border 0
      padding 20px 0
      color #666
    .user
      width 295px
      margin 20px
.verification
  border 1px solid #999
  span
    color #666
    display block
    padding 5px 10px
.btn
  height 90px
  background #DD1A21
  width 100%
  border 0
  color #ffffff
  font-size 30px
.protocol
  margin-top 20px
  input
    width 30px
    height 30px
    margin-right 20px
  span
    font-size 28px
    i
      color blue
.other
  margin-top 60px
  font-size 30px
  text-align center
</style>
