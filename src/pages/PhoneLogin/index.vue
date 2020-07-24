<template>
  <div class="phoneContainer">
    <!-- Header组件 -->
    <Header></Header>

    <div class="formContainer">
      <div class="logoWrap">
        <img src="//yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png" />
      </div>

      <ValidationObserver ref="form">
        <form>
          <ValidationProvider name="手机号" :rules="{ required: true, regex: /^1\d{10}$/ }">
            <template slot-scope="{ errors, classes }">
              <div class="inpt user">
                <input
                  type="text"
                  name="username"
                  placeholder="手机号登陆"
                  v-model="mobile"
                  :class="classes"
                />
                <i class="iconfont icon-qingchu"></i>
                <span class="error-msg">{{ errors[0] }}</span>
              </div>
            </template>
          </ValidationProvider>

          <ValidationProvider name="密码" :rules="{ required: true, min: 6, max: 10 }">
            <template slot-scope="{ errors, classes }">
              <div class="inpt user">
                <input
                  type="text"
                  name="username"
                  placeholder="请输入密码验证码"
                  v-model="password"
                  :class="classes"
                />
                <span class="error-msg">{{ errors[0] }}</span>
              </div>
            </template>
          </ValidationProvider>

          <div class="inpt help">
            <span>遇到问题？</span>
            <span>使用密码验证登陆</span>
          </div>
          <button class="btn" @click.prevent="login">登 录</button>

          <ValidationProvider name="协议" :rules="{ oneOf: [true] }">
            <template slot-scope="{ errors, classes }">
              <div class="protocol">
                <input type="checkbox" v-model="isAgree" :class="classes" />
                <span>我同意<i>《服务条款》</i>和<i>《网络隐私政策》</i></span>
                <span class="error-msg">{{ errors[0] }}</span>
              </div>
            </template>
          </ValidationProvider>
        </form>
      </ValidationObserver>

      <div class="other">其它方式登陆 ></div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  data() {
    return {
      mobile: "", // 手机号
      password: "", // 密码
      isAgree: false, // 是否同意

      // / 把这个 Toast实例 注册到data中，只要在这个组件内部中，都能访问到
      toastInstanse: null,
    };
  },
  components: { Header },
  methods: {
    // 登陆用户信息验证
    login() {
      // 1. 做前台表单验证, 如果不通过, 直接提示
      this.$refs.form.validate().then(async (success) => {
        if (success) {
          const { mobile, password, isAgree } = this;
          // 2. 发送登陆的请求
          try {
            await this.$store.dispatch("login", {
              mobile,
              password,
              isAgree,
            });
            // 3.1. 如果成功了, 跳转到登陆的界面
            this.$router.replace("/home");
            // this.$message.success("登陆成功");
            // 每当调用的时候，Toast 有一个返回值，这个返回值 重新赋值给 toastInstanse ,以至于后边手动关闭Toast
            this.toastInstanse = Toast({
              message: "2秒我就消失", //弹窗内容
              position: "middle", //弹窗位置
              duration: -1, //弹窗时间毫秒,如果值为-1，则不会消失
              iconClass: "glyphicon glyphicon-heart", //设置 图标类
              className: "mytoast", //自定义Toast 样式，需要自己提供一个类名
            });
          } catch (error) {
            // 3.2. 如果失败了, 提示文本
            alert(error.message);
          }
        }
      });
    },
    // 跳转邮箱登陆页面
    goEmailLogin() {
      this.$router.push("/emaillogin");
    },
  },
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.formContainer
  padding 0 40px
  .logoWrap
    text-align center
    padding-top 70px
    padding-bottom 140px
    img
      width: 3.57333rem;
      height: 1.2rem;
.inpt
  position relative
  display flex
  justify-content space-between
  align-items center
  border-bottom 1px solid #efefef
  font-size 30px
  color #999
  margin 50px 0
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
  position absolute
  input
    width 30px
    height 30px
    margin-right 20px
  span
    font-size 28px
    i
      color blue
.other
  margin-top 160px
  font-size 30px
  text-align center
input
  width 270px
  height 38px
  padding-left 8px
  box-sizing border-box
  margin-left 5px
  outline none
  border 1px solid #999

.error-msg
  position absolute
  top 100%
  left 0
  color red
</style>
