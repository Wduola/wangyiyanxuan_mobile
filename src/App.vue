<template>
  <div id="app">
    <!-- 显示当前匹配的路由组件 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",

  async mounted() {
    // 通过异步action获取异步获取数据到vuex的state中
    this.$store.dispatch("getIndexData");
  },
  // 注册组件
  components: {
    // Footer,
  },
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
/*每个页面公共css */
</style>
