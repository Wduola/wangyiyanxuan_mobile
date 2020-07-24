<template>
  <div>
    <!-- Header组件 -->
    <Header></Header>
    <div class="m-swiperTab-container m-main-container">
      <div class="m-swiperTab-title">
        <img src="./images/topic_logo.c2284970.png" class="u-title" />
        <div class="u-text">严选好物&nbsp;用心生活</div>
        <img src="./images/bg.png" class="u-bg" />
      </div>
      <!-- swiper -->
      <div class="m-swiper m-swiperTab">
        <div class="swiper-container u-swiperContainer">
          <div class="swiper-wrapper">
            <!-- swiper -->
            <swiper ref="mySwiper" :options="swiperOptions">
              <swiper-slide>
                <div class="u-swiperPage swiper-slide swiper-slide-active">
                  <div class="u-group">
                    <a href="javascript:;" data-yxstat="" class="u-item">
                      <div class="m-topContainer">
                        <img src="./images/e21381b7e1e7caebbe72488db9542163.gif" class="u-topPic" />
                      </div>
                      <div class="m-detail">
                        <div class="u-mainText">9.9超值</div>
                        <div class="u-descText">爆品定价直降</div>
                      </div>
                    </a>
                    <a href="javascript:;" class="u-item u-bottom">
                      <div class="m-topContainer">
                        <img src="./images/74db07fdd266ea7282a55f4b1aeaf74c.png" class="u-topPic" />
                      </div>
                      <div class="m-detail">
                        <div class="u-mainText">每月好物</div>
                        <div class="u-descText">当季必买清单</div>
                      </div>
                    </a>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="u-swiperPage swiper-slide swiper-slide-next">
                  <div class="u-group">
                    <a href="javascript:;" class="u-item">
                      <div class="m-topContainer">
                        <img src="./images/98f47f438097516c3c4b09adce6f486d.png" class="u-topPic" />
                      </div>
                      <div class="m-detail">
                        <div class="u-mainText">员工精选</div>
                        <div class="u-descText">每天1款内部价</div>
                      </div>
                    </a>
                    <a href="javascript:;" class="u-item u-bottom">
                      <div class="m-topContainer">
                        <img src="./images/9d8114ce4ef435ceac5e82120efeec4c.png" class="u-topPic" />
                      </div>
                      <div class="m-detail">
                        <div class="u-mainText">晒单</div>
                        <div class="u-descText">入选就有红包</div>
                      </div></a
                    >
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide
                ><div class="u-swiperPage swiper-slide">
                  <div class="u-group">
                    <a href="javascript:;" class="u-item"
                      ><div class="m-topContainer">
                        <img src="./images/e92a567f96b94dcea29eafea9ab42440.png" class="u-topPic" />
                      </div>
                      <div class="m-detail">
                        <div class="u-mainText">好物大赏</div>
                        <div class="u-descText">官方排名发布</div>
                      </div></a
                    ><a href="javascript:;" class="u-item u-bottom"
                      ><div class="m-topContainer">
                        <img src="./images/84395807297dbc88f6569e16960695f1.png" class="u-topPic" />
                      </div>
                      <div class="m-detail">
                        <div class="u-mainText">甄选家</div>
                        <div class="u-descText">爆品免费试用</div>
                      </div></a
                    >
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="u-swiperPage swiper-slide">
                  <div class="u-group">
                    <a href="javascript:;" class="u-item"
                      ><div class="m-topContainer">
                        <img src="./images/1d94b7dcbf10a3e836bab65729eeaaad.png" class="u-topPic" />
                      </div>
                      <div class="m-detail">
                        <div class="u-mainText">明星商品</div>
                        <div class="u-descText">百万粉丝之选</div>
                      </div></a
                    ><a href="javascript:;" class="u-item u-bottom"
                      ><div class="m-topContainer">
                        <img src="./images/d98cef378330167ef79c5f956814836e.png" class="u-topPic" />
                      </div>
                      <div class="m-detail">
                        <div class="u-mainText">选购指南</div>
                        <div class="u-descText">破解选择困难</div>
                      </div></a
                    >
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="u-swiperPage swiper-slide">
                  <div class="u-group">
                    <a href="javascript:;" class="u-item"
                      ><div class="m-topContainer">
                        <img src="./images/ee3e05fed85f623c92256d5371087480.png" class="u-topPic" />
                      </div>
                      <div class="m-detail">
                        <div class="u-mainText">中国风物志</div>
                        <div class="u-descText">系列微纪录片</div>
                      </div></a
                    ><a href="javascript:;" class="u-item u-bottom"
                      ><div class="m-topContainer">
                        <img src="./images/f7eabd045aeaf6ea4379abdb7f45ad8e.png" class="u-topPic" />
                      </div>
                      <div class="m-detail">
                        <div class="u-mainText">好吃研究所</div>
                        <div class="u-descText">时令美食抢先尝</div>
                      </div></a
                    >
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="u-swiperPage swiper-slide">
                  <div class="u-group">
                    <a href="javascript:;" class="u-item"
                      ><div class="m-topContainer">
                        <img src="./images/c1fe06034fb5b4e378277e590d04845c.png" class="u-topPic" />
                      </div>
                      <div class="m-detail">
                        <div class="u-mainText">每日穿搭</div>
                        <div class="u-descText">时尚买手力荐</div>
                      </div></a
                    ><a href="javascript:;" class="u-item u-bottom"
                      ><div class="m-topContainer">
                        <img src="./images/17f2bc11d23d2be6b8d8fdf066bb68c9.png" class="u-topPic" />
                      </div>
                      <div class="m-detail">
                        <div class="u-mainText">特色系列</div>
                        <div class="u-descText">发现格调好货</div>
                      </div></a
                    >
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="u-swiperPage swiper-slide">
                  <div class="u-group">
                    <a href="javascript:;" class="u-item"
                      ><div class="m-topContainer">
                        <img src="./images/2e038945352b0a8e7a339741b8c5f229.png" class="u-topPic" />
                      </div>
                      <div class="m-detail">
                        <div class="u-mainText">全球好物</div>
                        <div class="u-descText">0关税即时达</div>
                      </div></a
                    ><a href="javascript:;" class="u-item u-bottom"
                      ><div class="m-topContainer">
                        <!----><img
                          src="./images/e29bd9f1a9f61e37b969d59566ea15b2.png"
                          class="u-topPic"
                        />
                      </div>
                      <div class="m-detail">
                        <div class="u-mainText">工厂考察团</div>
                        <div class="u-descText">探访严选工厂</div>
                      </div></a
                    >
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="u-swiperPage swiper-slide">
                  <div class="u-group">
                    <a href="javascript:;" class="u-item">
                      <div class="m-topContainer">
                        <img src="./images/321dac9cf0fa0edd8da0092a753531f3.png" class="u-topPic" />
                      </div>
                      <div class="m-detail">
                        <div class="u-mainText">HOME</div>
                        <div class="u-descText">实景家居专栏</div>
                      </div>
                    </a>
                  </div>
                </div>
              </swiper-slide>
              <div class="swiper-pagination swiper-pagination-bullets" slot="pagination">
                <span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
                <span class="swiper-pagination-bullet"></span>
              </div>
            </swiper>
          </div>
          <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
        </div>
      </div>
    </div>

    <!-- 瀑布流 -->
    <div class="m-wrappers">
      <div class="m-lookList">
        <div class="m-lookColumn">
          <div class="m-lookBlock m-shadow" data-id="114916">
            <div class="m-innerWrapper">
              <div>
                <div>
                  <div class="m-lookImageWrapper" style="width: 100%; height: 100%;">
                    <img
                      src="./images/764e1c023fb0be39d60c7f0111e4b645.jpg"
                      class="m-image"
                      style="width: 100%; height: 100%;"
                    /><!---->
                  </div>
                  <div class="m-lookDesc">
                    夏天懂得穿亚麻的男人，真的很会穿
                  </div>
                  <div class="u-placeHolder"></div>
                  <div class="m-lookDetail">
                    <div class="m-userInfo">
                      <img src="./images/cf448802a04b820c0a80760ccd3aa3be.jpg" class="m-userpic" />
                      <div class="m-userName">网易游戏：波涛</div>
                    </div>
                    <div class="m-upArea">
                      <img src="" class="m-hand" />
                      <div class="m-upText">11K</div>
                    </div>
                  </div>
                  <div class="m-singleGoods">
                    <div class="u-singleGoods">
                      <div class="u-goodsname">
                        棉麻系列 男式亚麻合体休闲长裤
                      </div>
                      <div class="u-goBuy">
                        <span class="u-buyText">去购买</span><img src="" class="u-arrow" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="m-lookBlock m-shadow" data-id="115348">
            <div class="m-innerWrapper">
              <div>
                <div>
                  <div class="m-lookImageWrapper" style="width: 100%; height: 6.13879rem;">
                    <img
                      src="./images/0ff69282dded0e1816defa041687cd55.jpg"
                      class="m-image"
                      style="width: 100%; height: 6.13879rem;"
                    /><!---->
                  </div>
                  <div class="m-lookDesc">
                    1****7的晒图
                  </div>
                  <div class="u-placeHolder"></div>
                  <div class="m-lookDetail">
                    <div class="m-userInfo">
                      <img src="./images/485ff1be6912be6ae696b6d360d1b101.png" class="m-userpic" />
                      <div class="m-userName">1****7</div>
                    </div>
                    <div class="m-upArea">
                      <img src="" class="m-hand" />
                      <div class="m-upText">3</div>
                    </div>
                  </div>
                  <!---->
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="m-lookColumn">
          <div class="m-lookBlock m-shadow" data-id="115388">
            <div class="m-innerWrapper">
              <div>
                <div>
                  <div class="m-lookImageWrapper" style="width: 100%; height: 1.91667rem;">
                    <img
                      src="./images/907c8b9f11bf0357d80da0fd8d1b8436.jpg"
                      class="m-image"
                      style="width: 100%; height: 1.91667rem;"
                    /><!---->
                  </div>
                  <div
                    data-yxstat='{"event_name":"click_recognition_recommendcontent","event_action":"click","page_name":"recognition","parameters":{"topicId":"115388","extra":"","type":1}}'
                    class="m-lookDesc"
                  >
                    喝到这一口，我的快乐回来了！
                  </div>
                  <div class="u-placeHolder"></div>
                  <div class="m-lookDetail">
                    <div class="m-userInfo">
                      <img src="./images/3769578a6595d8e3c61d1186123141e0.png" class="m-userpic" />
                      <div class="m-userName">好物大赏</div>
                    </div>
                    <div class="m-upArea">
                      <img
                        src="https://yanxuan.nosdn.127.net/041d52d113c20c2ad6cf6654e4dacb30.jpg?imageView&thumbnail=345y345&quality=95"
                        class="m-hand"
                      />
                      <div class="m-upText">31</div>
                    </div>
                  </div>
                  <!---->
                </div>
              </div>
            </div>
          </div>
          <div class="m-lookBlock m-shadow" data-id="115298">
            <div class="m-innerWrapper">
              <div>
                <div>
                  <div class="m-lookImageWrapper" style="width: 100%; height: 1.91667rem;">
                    <img
                      src="./images/9f8dfdd09a17b898a36df37fef666000.jpg"
                      class="m-image"
                      style="width: 100%; height: 1.91667rem;"
                    /><!---->
                  </div>
                  <div class="m-lookDesc">
                    夏日健康大作战！品质健康新品重磅发布
                  </div>
                  <div class="u-placeHolder"></div>
                  <div class="m-lookDetail">
                    <div class="m-userInfo">
                      <img src="./images/b910e3add3b805143a824591ff85d43c.png" class="m-userpic" />
                      <div class="m-userName">新品放映室</div>
                    </div>
                    <div class="m-upArea">
                      <img
                        src="https://yanxuan.nosdn.127.net/380d365a0e46f36be6c58bee53913bfc.jpg?imageView&thumbnail=345y345&quality=95"
                        class="m-hand"
                      />
                      <div class="m-upText">12K</div>
                    </div>
                  </div>
                  <!---->
                </div>
              </div>
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
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/swiper.less";
import "swiper/swiper-bundle.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer"; //固定底部导航
export default {
  name: "WorthToBuy",
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  mounted() {
    new Swiper(".swiper-container", {
      loop: true,
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      }, //这样写小圆点就有了
      // 如果需要前进后退按钮
      nextButton: ".swiper-button-next",
      prevButton: ".swiper-button-prev",
      // 如果需要滚动条
      scrollbar: ".swiper-scrollbar",
    });
  },
  components: {
    Footer,
    Header,
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
};
</script>

<style type="text/css">
.m-main-container {
  background: #eee;
  padding-bottom: 20px;
}
.m-toptab {
  font-size: 0.36rem;
  position: absolute;
  width: 1.5rem;
  text-align: center;
  line-height: 0.4rem;
  height: 0.4rem;
  left: 50%;
  top: 50%;
  margin-left: -0.75rem;
  margin-top: -0.2rem;
}
.m-swiperTab-container {
  position: relative;
  padding-top: 1.45rem;
  background: #eee;
  margin-bottom: 20px;
  width: 750px;
  margin: auto;
}
.m-swiperTab-container .m-swiperTab-title {
  position: absolute;
  top: 0;
  z-index: 1;
}
.m-swiperTab-container .m-swiperTab-title .u-title {
  position: absolute;
  width: 1.3rem;
  height: auto;
  top: 0.6rem;
  left: 0.12rem;
  z-index: 2;
}
.m-swiperTab-container .m-swiperTab-title .u-text {
  font-size: 0.3rem;
  line-height: 0.44rem;
  height: 0.44rem;
  position: absolute;
  font-family: "PingFangSC-Regular";
  left: 1.46rem;
  top: 0.79rem;
  color: #fff;
}
.m-swiperTab-container .m-swiperTab-title .u-bg {
  width: 100%;
  height: auto;
}
.m-swiperTab-container .m-swiperTab {
  z-index: 2;
}
.m-wrappers {
  width: 750px;
  margin: 0 auto;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: #eeeeee;
}
.m-lookList {
  width: 100%;
  padding: 0 20px;
  min-height: 10rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  margin: 0 auto;
  margin-top: 0.3rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
.m-lookColumn {
  width: 345px;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}
</style>
<style type="text/css">
.u-swiperContainer {
  background: #fff;
  border-radius: 0.16rem;
  height: 6.3rem !important;
}
.u-swiperPage .u-group {
  padding: 0.06rem;
  width: 180px;
  background: #fff;
  padding-top: 0.36rem;
}
.u-swiperPage .u-oddGroup {
  height: 2.73rem;
  padding: 0.06rem;
  width: 1.68rem;
  background: #fff;
  padding-top: 0.36rem;
}
.u-swiperPage .u-item {
  display: inline-block;
  position: relative;
  width: 1.68rem;
  height: 2.01rem;
  word-wrap: break-word;
  word-break: normal;
}
.u-swiperPage .u-item.u-bottom {
  margin-top: 0.28rem;
}
.u-swiperPage .u-item .m-topContainer {
  position: relative;
  width: 1.2rem;
  height: 1.2rem;
  margin: 0 auto;
}
.u-swiperPage .u-item .m-topContainer .u-topPic {
  width: 120px;
  height: 120px;
}
.u-swiperPage .u-item .m-topContainer .u-remind-tag {
  position: absolute;
  background: #e23c42;
  top: -0.05rem;
  right: -0.05rem;
  width: 0.58rem;
  height: 0.24rem;
  border-radius: 0.12rem;
  font-size: 0.18rem;
  color: #fff;
  line-height: 0.24rem;
  text-align: center;
}
.u-swiperPage .u-item .m-detail {
  width: 180px;
  margin-top: 0.58rem;
}
.u-swiperPage .u-item .m-detail .u-mainText {
  font-family: "PingFang-SC-Bold";
  font-weight: bold;
  font-size: 0.28rem;
  width: 1.68rem;
  height: 0.4rem;
  white-space: nowrap;
  overflow: hidden;
  color: #333333;
  text-align: center;
  line-height: 0.4rem;
}
.u-swiperPage .u-item .m-detail .u-descText {
  width: 1.68rem;
  margin-top: 0.02rem;
  font-family: "PingFangSC-Regular";
  font-size: 0.2rem;
  color: #999999;
  text-align: center;
  height: 0.3rem;
  line-height: 0.3rem;
  white-space: nowrap;
  overflow: hidden;
}
.m-swiper {
  width: 710px;
  /* padding: 0 20px; */
  margin: 0 20px;
  background: #fff;
  border-radius: 0.16rem;
  margin: 0 auto;
}
.swiper-pagination.swiper-pagination-bullets {
  bottom: 0.18rem;
}
.swiper-pagination .swiper-pagination-bullet {
  width: 0.392rem;
  height: 0.04rem;
  background: #d9d9d9;
  margin: 0 !important;
  border-radius: 0;
  opacity: 1;
}
.swiper-pagination .swiper-pagination-bullet-active {
  background: #dd1a21;
}
</style>
<style type="text/css">
.m-lookBlock {
  width: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin-bottom: 0.2rem;
  border-radius: 0.16rem;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  overflow: hidden;
}
.m-videoIconWrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  flex-direction: row;
  align-items: center;
  display: flex;
  justify-content: center;
}
.m-videoIcon {
  width: 0.8rem;
  height: 0.8rem;
}
.m-lookDesc {
  width: 100%;
  box-sizing: border-box;
  padding: 0.18rem 0.16rem 0;
  color: #333;
  font-size: 0.28rem;
  line-height: 0.4rem;
  flex-direction: row;
  flex-wrap: wrap;
  /* lines: 2; */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  font-family: "PingFangSC-Regular";
  background-color: #fff;
  text-align: left;
}
.m-lookDetail {
  width: 100%;
  font-size: 0.24rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0.17rem 0.16rem 0.24rem;
  flex-direction: row;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  background-color: #fff;
}
.u-placeHolder {
  width: 100%;
  height: 0.17rem;
  background-color: #fff;
}
.m-lookImageWrapper {
  position: relative;
  background-color: #f2f2f2;
}
.m-lookImageWrapper .m-image {
  width: 100%;
}
.m-userInfo {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-direction: row;
  justify-content: right;
}
.m-userpic {
  width: 0.48rem;
  height: 0.48rem;
  box-sizing: border-box;
  border-radius: 0.24rem;
  border: 1px solid #d9d9d9;
}
.m-userName {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 0.22rem;
  color: #7f7f7f;
  height: 0.48rem;
  line-height: 0.48rem;
  margin-left: 0.08rem;
}
.m-upArea {
  width: 1rem;
  flex-direction: row;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.m-upText {
  font-size: 0.24rem;
  color: #7f7f7f;
  max-width: 0.9rem;
  text-align: right;
  height: 0.32rem;
  line-height: 0.32rem;
  margin-left: 0.02rem;
}
.m-hand {
  width: 0.32rem;
  height: 0.32rem;
}
.m-singleGoods {
  width: 100%;
  background: #fff;
  font-family: "PingFangSC-Light";
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.m-singleGoods .u-singleGoods {
  width: 3.05rem;
  border-top: 0.5px solid #d9d9d9;
  margin: 0 auto;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
}
.m-singleGoods .u-singleGoods .u-goodsname {
  vertical-align: middle;
  display: inline-block;
  width: 2.07rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 0.22rem;
  color: #333333;
  line-height: 0.32rem;
  height: 0.32rem;
}
.m-singleGoods .u-singleGoods .u-goBuy {
  display: inline-block;
  vertical-align: baseline;
  vertical-align: middle;
  width: 0.88rem;
  height: 0.32rem;
  overflow: hidden;
  text-align: right;
  position: relative;
  right: -0.1rem;
}
.m-singleGoods .u-singleGoods .u-goBuy .u-buyText {
  display: inline-block;
  vertical-align: top;
  font-size: 0.22rem;
  color: #dd1a21;
  line-height: 0.32rem;
  height: 0.32rem;
}
.m-singleGoods .u-singleGoods .u-goBuy .u-arrow {
  width: 0.1rem;
  height: 0.18rem;
  line-height: 0.32rem;
  margin-left: 0.04rem;
  display: inline-block;
  vertical-align: baseline;
  position: relative;
  top: -0.04rem;
}
.m-collectionInfo {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 0.28rem 0.18rem 0.36rem 0.18rem;
}
.m-collectionIcon {
  position: absolute;
  left: 0.2rem;
  bottom: 0.2rem;
  width: 0.37rem;
  height: 0.29rem;
}
.m-collectionTitle {
  display: block;
  width: 3.09rem;
  font-size: 0.32rem;
  font-weight: bold;
  color: #333;
  line-height: 0.48rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  /* lines: 1; */
  -webkit-line-clamp: 1;
  text-align: center;
}
.m-collectionLine {
  display: block;
  width: 0.48rem;
  height: 0.04rem;
  margin: 0 auto;
  background: #333;
  margin-top: 0.21rem;
  margin-bottom: 0.24rem;
}
.m-collectionText {
  width: 3.09rem;
  margin-top: 0.18rem;
  font-size: 0.24rem;
  line-height: 0.36rem;
  color: #333;
  -ms-flex-direction: row;
  flex-direction: row;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  /* lines: 2; */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-align: center;
}
.m-collectBgDefault {
  background-color: #f4f4f4;
}
.m-collectBg0 {
  background-color: #ffe1b2;
}
.m-collectBg1 {
  background-color: #ffcabe;
}
.m-collectBg2 {
  background-color: #f6d9ff;
}
.m-collectBg3 {
  background-color: #d7defa;
}
.m-collectBg4 {
  background-color: #c4e2ff;
}
.m-innerWrapper {
  width: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 0.16rem;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  overflow: hidden;
}
.m-lookBlock {
  width: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin-bottom: 0.2rem;
  border-radius: 0.16rem;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  overflow: hidden;
}
.m-videoIconWrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.m-videoIcon {
  width: 0.8rem;
  height: 0.8rem;
}
.m-lookDesc {
  width: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0.18rem 0.16rem 0;
  color: #333;
  font-size: 0.28rem;
  line-height: 0.4rem;
  -ms-flex-direction: row;
  flex-direction: row;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  /* lines: 2; */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-family: "PingFangSC-Regular";
  background-color: #fff;
  text-align: left;
}
.m-lookDetail {
  width: 100%;
  font-size: 0.24rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0.17rem 0.16rem 0.24rem;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  background-color: #fff;
}
.u-placeHolder {
  width: 100%;
  height: 0.17rem;
  background-color: #fff;
}
.m-lookImageWrapper {
  position: relative;
  background-color: #f2f2f2;
}
.m-lookImageWrapper .m-image {
  width: 100%;
}
.m-userInfo {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: right;
  -ms-flex-pack: right;
  justify-content: right;
}
.m-userpic {
  width: 0.48rem;
  height: 0.48rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 0.24rem;
  border: 1px solid #d9d9d9;
}
.m-userName {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 0.22rem;
  color: #7f7f7f;
  height: 0.48rem;
  line-height: 0.48rem;
  margin-left: 0.08rem;
}
.m-upArea {
  width: 1rem;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.m-upText {
  font-size: 0.24rem;
  color: #7f7f7f;
  max-width: 0.9rem;
  text-align: right;
  height: 0.32rem;
  line-height: 0.32rem;
  margin-left: 0.02rem;
}
.m-hand {
  width: 0.32rem;
  height: 0.32rem;
}
.m-singleGoods {
  width: 100%;
  background: #fff;
  font-family: "PingFangSC-Light";
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.m-singleGoods .u-singleGoods {
  width: 3.05rem;
  border-top: 0.5px solid #d9d9d9;
  margin: 0 auto;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
}
.m-singleGoods .u-singleGoods .u-goodsname {
  vertical-align: middle;
  display: inline-block;
  width: 2.07rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 0.22rem;
  color: #333333;
  line-height: 0.32rem;
  height: 0.32rem;
}
.m-singleGoods .u-singleGoods .u-goBuy {
  display: inline-block;
  vertical-align: baseline;
  vertical-align: middle;
  width: 0.88rem;
  height: 0.32rem;
  overflow: hidden;
  text-align: right;
  position: relative;
  right: -0.1rem;
}
.m-singleGoods .u-singleGoods .u-goBuy .u-buyText {
  display: inline-block;
  vertical-align: top;
  font-size: 0.22rem;
  color: #dd1a21;
  line-height: 0.32rem;
  height: 0.32rem;
}
.m-singleGoods .u-singleGoods .u-goBuy .u-arrow {
  width: 0.1rem;
  height: 0.18rem;
  line-height: 0.32rem;
  margin-left: 0.04rem;
  display: inline-block;
  vertical-align: baseline;
  position: relative;
  top: -0.04rem;
}
.m-collectionInfo {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 0.28rem 0.18rem 0.36rem 0.18rem;
}
.m-collectionIcon {
  position: absolute;
  left: 0.2rem;
  bottom: 0.2rem;
  width: 0.37rem;
  height: 0.29rem;
}
.m-collectionTitle {
  display: block;
  width: 3.09rem;
  font-size: 0.32rem;
  font-weight: bold;
  color: #333;
  line-height: 0.48rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  /* lines: 1; */
  -webkit-line-clamp: 1;
  text-align: center;
}
.m-collectionLine {
  display: block;
  width: 0.48rem;
  height: 0.04rem;
  margin: 0 auto;
  background: #333;
  margin-top: 0.21rem;
  margin-bottom: 0.24rem;
}
.m-collectionText {
  width: 3.09rem;
  margin-top: 0.18rem;
  font-size: 0.24rem;
  line-height: 0.36rem;
  color: #333;
  -ms-flex-direction: row;
  flex-direction: row;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  /* lines: 2; */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-align: center;
}
.m-collectBgDefault {
  background-color: #f4f4f4;
}
.m-collectBg0 {
  background-color: #ffe1b2;
}
.m-collectBg1 {
  background-color: #ffcabe;
}
.m-collectBg2 {
  background-color: #f6d9ff;
}
.m-collectBg3 {
  background-color: #d7defa;
}
.m-collectBg4 {
  background-color: #c4e2ff;
}
.m-innerWrapper {
  width: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 0.16rem;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  overflow: hidden;
}
</style>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.swiper-container
  --swiper-theme-color #ff6600
  --swiper-pagination-color #00ff33/* 两种都可以 */

.swiper-slide
  width: 180px!important;
  height 100%
</style>
