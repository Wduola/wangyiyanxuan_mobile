<template>
  <div class="recommendContainer">
    <!-- 轮播图 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item>
        <img class="mt-swipe-item-img" src="https://yanxuan.nosdn.127.net/e1d32c538a9fcf420411592746098ad2.jpg?type=webp&amp;imageView&amp;quality=75&amp;thumbnail=750x0" />
      </mt-swipe-item>
      <mt-swipe-item>
        <img class="mt-swipe-item-img" src="https://yanxuan.nosdn.127.net/7e01b30c2c440e118cf09e14c7a69266.jpg?type=webp&amp;imageView&amp;quality=75&amp;thumbnail=750x0" />
      </mt-swipe-item>
      <mt-swipe-item>
        <img class="mt-swipe-item-img" src="https://yanxuan.nosdn.127.net/e14d684c9dc43de2af5215c3d49b6870.jpg?type=webp&amp;imageView&amp;quality=75&amp;thumbnail=750x0" />
      </mt-swipe-item>
      <mt-swipe-item>
        <img class="mt-swipe-item-img" src="https://yanxuan.nosdn.127.net/a7075ca5e6c79367d89a088d7d572b78.jpg?type=webp&imageView&quality=75&thumbnail=750x0" />
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from "mint-ui";
export default {
  name: "Recommend",
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
// 轮播图
.mint-swipe
  height: 296px;
  .mt-swipe-item-img
      width 100%
      height 296px



.test
  font-size 0
</style>
