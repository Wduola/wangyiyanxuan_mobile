<template>
  <div class="recommendContainer">
    <!-- 轮播图 -->
    <mt-swipe>
      <mt-swipe-item :auto="4000" v-for="(banner, index) in indexData.focusList" :key="index">
        <img class="mt-swipe-item-img" :src="banner.picUrl" />
      </mt-swipe-item>
    </mt-swipe>

    <!-- policyDescList 三个横向图标 -->
    <div class="policyDescList">
      <div class="policyDescItem" v-for="(item, index) in indexData.policyDescList" :key="index">
        <img :src="item.icon" alt="" />
        <span>{{ item.desc }}</span>
      </div>
    </div>

    <!-- kingKongList 10个图标列表 -->
    <div class="kingKongList" v-if="indexData.kingKongModule">
      <div
        class="kingKongItem"
        v-for="(item, index) in indexData.kingKongModule.kingKongList"
        :key="index"
      >
        <img :src="item.picUrl" mode="" />
        <span>{{ item.text }}</span>
      </div>
    </div>

    <!-- 广告区域 -->
    <div class="addvertisementContainer">
      <!-- 广告1号 -->
      <div class="addvertisement">
        <img
          src="https://yanxuan.nosdn.127.net/d9b021de430394e9b274bf0455b53120.gif?imageView&quality=75"
          alt=""
        />
      </div>
      <!-- 广告2号 -->
      <div class="advertisement2">
        <img
          src="https://yanxuan.nosdn.127.net/8b5c103801f035cc7369afc1a46e0bc5.png?quality=75&type=webp&imageView&thumbnail=375x0"
        />
        <img
          class="last"
          src="https://yanxuan.nosdn.127.net/01fae6d1209f9904af34095feb394325.png?quality=75&type=webp&imageView&thumbnail=375x0"
          alt=""
        />
      </div>
    </div>

    <!-- 新人专享 -->
    <div class="newPerson">
      <div class="title">
        <span>- 新人专享礼 -</span>
      </div>
      <div class="group">
        <div class="left">
          <div class="title">新人专享礼包</div>
          <div class="xinrenimg">
            <img src="//yanxuan.nosdn.127.net/352b0ea9b2d058094956efde167ef852.png" alt="" />
          </div>
        </div>
        <div class="right">
          <div class="topa">
            <div class="picWrap">
              <img
                src="https://yanxuan-item.nosdn.127.net/02b395ef8e9c2c2f4e8b5a530c24fafa.png?quality=75&type=webp&imageView&thumbnail=200x200"
                alt=""
              />
              <div class="discount">
                <div class="line1">¥28</div>
                <div class="line1" style="text-decoration:line-through">
                  ¥98
                </div>
              </div>
              <div class="wenzi">
                <p class="fu">福利社</p>
                <p class="jin">今日特价</p>
              </div>
            </div>
          </div>
          <div class="bottom">
            <div class="picWrap">
              <img
                src="https://yanxuan-item.nosdn.127.net/0064e22029d052276c2f8e49b1f3973d.png?quality=75&type=webp&imageView&thumbnail=200x200"
                alt=""
              />
              <div class="discount">
                <div class="line1">¥48</div>
                <div class="line1" style="text-decoration:line-through">
                  ¥78
                </div>
              </div>
              <div class="wenzi">
                <p class="fu">新人拼团</p>
                <p class="jin">1元起包邮</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 类目热销榜 -->
    <div class="categoryHot">
      <div class="title">类目热销榜</div>
      <div class="categoryList" v-if="indexData.categoryHotSellModule">
        <div
          class="categoryItem"
          v-for="(cateItem, index) in indexData.categoryHotSellModule.categoryList"
          :key="index"
        >
          <div class="itemName">{{ cateItem.categoryName }}</div>
          <img :src="cateItem.picUrl" alt="" />
        </div>
      </div>
    </div>

    <!-- 限时购 -->
    <!-- 新品首发 -->

    <div class="bottom"></div>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from "mint-ui";
import { mapActions, mapState } from "vuex";

export default {
  name: "Recommend",
  async mounted() {
    // 分发action请求获取indexData数据到state中
    await this.getIndexData();
  },
  methods: {
    // 触发action
    ...mapActions({
      getIndexData: "getIndexData",
    }),
  },
  // 计算属性
  computed: {
    // 读取state数据
    ...mapState({
      indexData: (state) => state.home.indexData,
    }),
  },
  // 注册组件
  comments: {},
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.recommendContainer
  background #efefef
  width 750px
  margin 0 auto
  // 轮播图
  .mint-swipe
    background: white;
    height: 296px;
    .mt-swipe-item-img
      width 100%
      height 296px
  //policyDescList 三个横向图标
  .policyDescList
    display flex
    background: white;
    padding: 20px 0;
    .policyDescItem
      flex 1
      text-align center
      img
        width 32px
        height 32px
        vertical-align middle
        margin-right 6px
      span
        font-size 24px
        vertical-align middle
  // kingKongList 10个图标列表
  .kingKongList
    background: white;
    display flex
    flex-wrap wrap
    .kingKongItem
      width 20%
      display flex
      flex-direction column
      align-items center
      margin-bottom 20px
      img
        width 110px
        height 110px
      span
        font-size 24px
        line-height 50px
  // 新人专享首单0元购
  .addvertisementContainer
    background-color: rgb(230, 73, 4);
    background-image: none;
    background-size: 100% 100%;
    margin-top 20px
    .addvertisement
      img
        width 100%
        height 100%
    .advertisement2
      height: 2.48rem;
      display: flex;
      padding: 20px 0;
      align-items: center;
      justify-content: space-between;
      margin: 0 .26667rem .10667rem;
      img
        width: 4.68rem;
  // 新人专享礼
  .newPerson
    background: #fff;
    margin 20px 0
    .title
      height: 1.2rem;
      width: 100%;
      line-height: 1.2rem;
      text-align: center;
      font-family: PingFangSC-Regular;
      font-size: .42667rem;
    .group
      padding-left: .4rem;
      overflow: hidden;
      padding-bottom: 30px;
      .left
        display: block;
        width: 4.57333rem;
        height: 5.78667rem;
        background: #F9E9CF;
        border-radius: .05333rem;
        margin-right: .05333rem;
        float: left;
        color: #333;
        .title
          font-family: PingFangSC-Medium;
          font-size: .42667rem;
          padding: .4rem 0 0 .4rem;
          .xinrenimg
            margin: .49333rem auto;
            width: 3.44rem;
            height: 3.42667rem;
            position: relative;
      .right
        float: left;
        .topa
          background: #FBE2D3;
          border-radius: 4px;
          width: 4.57333rem;
          height: 2.86667rem;
          position: relative;
          margin-bottom: .05333rem;
          .picWrap
            display: block;
            color: #333;
            float: left;
            border-radius: .05333rem;
            margin: 0 .05333rem .05333rem 0;
            font-size: .32rem;
            padding: .26667rem 0 0 .4rem;
            img
              position: absolute;
              right: 45px;
              top: 33px;
            .discount
              position: absolute;
              top: 30px;
              right: .4rem;
              width: 80px;
              height: 80px;
              opacity: .8;
              background: #F59524;
              border-radius: 50%;
              padding-top: .13333rem;
              color: #fff;
              text-align: center;
            .wenzi
              position: relative;
              .fu
                font-family: PingFangSC-Medium;
                font-size: .42667rem;
              .jin
                color: #7F7F7F;
        .bottom
          background: #FFECC2;
          border-radius: 4px;
          width: 4.57333rem;
          height: 2.86667rem;
          position: relative;
          .picWrap
            display: block;
            color: #333;
            float: left;
            border-radius: .05333rem;
            margin: 0 .05333rem .05333rem 0;
            font-size: .32rem;
            padding: .26667rem 0 0 .4rem;
            img
              position: absolute;
              right: 45px;
              top: 33px;
            .discount
              position: absolute;
              top: 30px;
              right: .4rem;
              width: 80px;
              height: 80px;
              opacity: .8;
              background: #F59524;
              border-radius: 50%;
              padding-top: .13333rem;
              color: #fff;
              text-align: center;
            .wenzi
              position: relative;
              .fu
                font-family: PingFangSC-Medium;
                font-size: .42667rem;
              .jin
                position: relative;
                display: inline-block;
                padding: 0 .13333rem;
                height: .42667rem;
                background: #CBB693;
                border-radius: .05333rem;
                color: #fff;
                font-size: .29333rem;
                line-height: .42667rem;
                text-align: center;
  // 类目热销榜
  .categoryHot
    height 710px
    background white
    padding: 0 .26667rem .26667rem .4rem;
    overflow: hidden;
    .title
      width: 100%;
      height: 1.33333rem;
      line-height: 1.33333rem;
      padding: 0 .4rem;
      background: #fff;
      overflow: hidden;
      font-size: .42667rem;
      font-family: PingFangSC-Regular;
    .categoryItem
      display: block;
      width: 2.2rem;
      height: 2.4rem;
      background: #F5F5F5;
      border-radius: .05333rem;
      float: left;
      margin: 0 .13333rem .13333rem 0;
      &:nth-of-type(1),&:nth-of-type(2)
        width: 4.53333rem;
        height: 2.66667rem;
        background: #F9F3E4;
        .itemName
          display inline-block
          float left
          line-height: 2.4rem;
          padding-left 40px
          font-size 20px
          font-size: .32rem;
        img
          margin-top 20px
          float rigth
      &:nth-of-type(1)
        background: #EBEFF6;
      .itemName
        margin-top: .13333rem;
        text-align: center;
        font-size: .32rem;
        color: #333;
        font-family: PingFangSC-Medium;
      img
        width: 1.6rem;
        height: 1.6rem;
        margin: .02667rem 0 0 .30667rem;
  // 限时购




.test
  font-size 0
</style>
