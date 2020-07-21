<template>
  <div>
    购物车
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
};
</script>

<style lang="less" scoped></style>
