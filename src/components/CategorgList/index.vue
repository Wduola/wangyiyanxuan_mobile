<template>
  <div class="cateListContainer" v-if="cateObj">
    <!-- 轮播图 -->
    <mt-swipe>
      <!-- <mt-swipe-item :auto="4000" v-for="(swiperItem, index) in cateObj.subCateList" :key="index">
        <img class="mt-swipe-item-img" :src="cateObj.subCateList.wapBannerUrl" />
      </mt-swipe-item> -->
      <mt-swipe-item>
        <img
          src="https://yanxuan.nosdn.127.net/2895a663aa000e3b00602bd34a9be106.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
          alt=""
        />
      </mt-swipe-item>
      <mt-swipe-item>
        <img
          src="https://yanxuan.nosdn.127.net/3a61e8782c76ee48de7a48578ea6c430.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
          alt=""
        />
      </mt-swipe-item>
      <mt-swipe-item>
        <img
          src="https://yanxuan.nosdn.127.net/79b2dbf762217e6e532f335bda4c85b3.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
          alt=""
        />
      </mt-swipe-item>
    </mt-swipe>

    <div class="title">{{ cateObj.name }}</div>
    <div class="desc">{{ cateObj.name }}</div>

    <!-- <div class="listContainer">
      <div class="listItem" v-for="(item, index) in cateObj.subCateList" :key="index">
        <img :src="item.wapBannerUrl" />
        <p>{{ item.name }}</p>
        <p style="color: red;font-weight: bold;">$ {{ item.id }}</p>
      </div>
    </div> -->

    <ShopList :shopList="cateObj.subCateList"></ShopList>
  </div>
</template>

<script>
import ShopList from "@/components/ShopList";
import { Swipe, SwipeItem } from "mint-ui";
import { mapActions, mapState } from "vuex";
export default {
  props: ["navId"],
  components: {
    ShopList,
  },
  data() {
    return {
      cateList: [],
    };
  },
  async mounted() {
    // 分发action请求获取indexCategory数据到state中
    await this.getIndexCategorys();

    // this.cateList = this.indexCategorys;
  },
  methods: {
    // 触发action
    ...mapActions({
      getIndexCategorys: "getIndexCategorys",
    }),
  },
  computed: {
    // 读取state数据
    ...mapState({
      indexCategorys: (state) => state.home.indexCategorys,
    }),
    cateObj() {
      this.cateList = this.indexCategorys;
      if (this.cateList instanceof Array) {
        console.log(this.cateList[1]);
        return this.cateList[this.navId];
        // return this.cateList.find((item) => item.showIndex === this.navId);
      }
    },
  },
  watch: {
    newCategorys() {
      return this.cateList;
    },
  },
};
</script>

<style lang="stylus">
.cateListContainer
  height 296px
  width 750px
  margin 0 auto
	swiper
		width 100%
		height 370px
		image
			width 100%
			height 100%
.mint-swipe-item
  img
    width 100%
	.title
		display block
		text-align center
		font-size 34px
		color #333
		line-height 70px
	.desc
		display block
		text-align center
		font-size 24px
		color #999
		line-height 40px
</style>
