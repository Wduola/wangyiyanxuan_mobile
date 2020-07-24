<template>
  <div class="cateGoryContainer">
    <div class="header" @click="toSearch">
      <div class="search">
        <i class="iconfont icon-search"></i>
        搜索商品, 共34534款好物
      </div>
    </div>
    <div class="content">
      <!-- 左侧导航 -->
      <div class="leftContainer">
        <div class="scrollContainer">
          <div
            class="navItem "
            @click="changeNavIndex(navItem.id)"
            :class="{ active: navIndex === navItem.id }"
            v-for="(navItem, index) in IndexNavp.categoryL1List"
            :key="index"
          >
            {{ navItem.name }}
          </div>
        </div>
      </div>
      <!-- 右侧内容 -->
      <div class="rightContainer">
        <div class="scrollContainer">
          <div class="proList" v-if="cateGoryObj">
            <img
              class="proImg"
              src="https://yanxuan.nosdn.127.net/4353515be90c072be3f9dd8f003aac84.jpg?quality=75&type=webp&imageView&thumbnail=0x196"
            />
            <div class="proItem" v-for="(item, index) in cateGoryObj.categoryList" :key="index">
              <img :src="item.wapBannerUrl" mode="" />
              <span>{{ item.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部固定导航 -->
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/components/Footer"; //固定底部导航
import { Swipe, SwipeItem } from "mint-ui";
import { mapActions, mapState, createLogger } from "vuex";
export default {
  components: {},
  data() {
    return {
      cateGoryList: [], // 分类页数据
      navIndex: 0, // 导航标识id
    };
  },
  async mounted() {
    // 分发action请求获取indexCategory数据到state中
    this.getIndexNavp();
    this.getCateLists();

    this.cateGoryList = this.CateLists;
    // this.navIndex = this.cateGoryList[0].id;
    this.navIndex = 11;
    // console.log(this.navIndex);
    console.log(this.cateGoryList);
    console.log(this.CateLists);
  },
  methods: {
    // 跳转搜索页面
    toSearch() {
      // 编程式路由跳转
      this.$router.push("/search");
    },
    // 触发action
    ...mapActions({
      getIndexNavp: "getIndexNavp",
      getCateLists: "getCateLists",
    }),

    changeNavIndex(navIndex) {
      this.navIndex = navIndex;
    },
  },

  computed: {
    cateGoryObj() {
      this.cateGoryList = this.CateLists;
      if (this.cateGoryList instanceof Array) {
        return this.cateGoryList.find((item) => item.id === this.navIndex);
      }
    },
    // 读取state数据
    ...mapState({
      IndexNavp: (state) => state.home.IndexNavp,
      CateLists: (state) => state.home.CateLists,
    }),
  },

  // 注册组件
  components: {
    Footer,
  },
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.cateGoryContainer
  .header
    display flex
    align-items center
    height 80px
    padding 0 .4rem
    background-color #fff
    position relative
    padding 10px 0
    .search
      width 90%
      height 60px
      line-height 60px
      text-align center
      background #eee
      margin 0 auto
      display: flex
      flex-flow: row nowrap
      align-items: center
      justify-content: center
      font-size .37333rem
      background-color #ededed
      border-radius .10667rem

  .content
    float left
    width 100%
    background-color #fff
    position relative
    display flex
    height calc(100vh - 100px)
    border-top 1px solid #eee
    box-sizing border-box
    .leftContainer
      width 20%
      border-right 1px solid #EEEEEE
      box-sizing border-box
      .scrollContainer
        height 100%
        .navItem
          position relative
          font-size 26px
          text-align center
          height 80px
          line-height 80px
          &.active:after
            content ''
            height 70%
            width 4px
            position absolute
            top 15%
            left 8px
            background #BB2C08

    .rightContainer
      width 80%
      padding: .4rem .4rem .28rem;
      height: 100%;
      overflow: hidden;
      box-sizing border-box
      .scrollContainer
        height 100%
        width 100%
        .proList
          display flex
          width 100%
          flex-wrap wrap
          .proImg
            width 520px
            height 190px
            margin 20px auto
          .proItem
            width 33.333%
            display flex
            flex-direction column
            align-items center
            overflow hidden
            img
              width 144px
              height 144px
            text
              font-size 24px
              text-align center




.test
	font-size 0
</style>
