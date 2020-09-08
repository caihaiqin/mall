<!--  -->
<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
    <scroll class="content" @scroll="contentScroll" ref="scroll">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <div>{{this.detail.desc}}</div>
      <img src="http://localhost:4000/detail/swiperimg/pop1-2/2.jpg" alt />
      <img src="http://localhost:4000/detail/swiperimg/pop1-2/2.jpg" alt />
      <img src="http://localhost:4000/detail/swiperimg/pop1-2/2.jpg" alt />
      <img src="http://localhost:4000/detail/swiperimg/pop1-2/2.jpg" alt />
      <img src="http://localhost:4000/detail/swiperimg/pop1-2/2.jpg" alt />
      <img src="http://localhost:4000/detail/swiperimg/pop1-2/2.jpg" alt />
      <img src="http://localhost:4000/detail/swiperimg/pop1-2/2.jpg" alt />
      <img src="http://localhost:4000/detail/swiperimg/pop1-2/2.jpg" alt />
      <img src="http://localhost:4000/detail/swiperimg/pop1-2/2.jpg" alt />
      <img src="http://localhost:4000/detail/swiperimg/pop1-2/2.jpg" alt />
      <img src="http://localhost:4000/detail/swiperimg/pop1-2/2.jpg" alt />
      <img src="http://localhost:4000/detail/swiperimg/pop1-2/2.jpg" alt />
      <img src="http://localhost:4000/detail/swiperimg/pop1-2/2.jpg" alt />
      <img src="http://localhost:4000/detail/swiperimg/pop1-2/2.jpg" alt />
      <img src="http://localhost:4000/detail/swiperimg/pop1-2/2.jpg" alt />
      <img src="http://localhost:4000/detail/swiperimg/pop1-2/2.jpg" alt />
      <img src="http://localhost:4000/detail/swiperimg/pop1-2/2.jpg" alt />
      <img src="http://localhost:4000/detail/swiperimg/pop1-2/2.jpg" alt />
      <img src="http://localhost:4000/detail/swiperimg/pop1-2/2.jpg" alt />
      <img src="http://localhost:4000/detail/swiperimg/pop1-2/2.jpg" alt />
      <img src="http://localhost:4000/detail/swiperimg/pop1-2/2.jpg" alt />
    </scroll>
    <detail-bottom-bar></detail-bottom-bar>
    <back-top @click.native="backTop" v-show="isBackTopShow"></back-top>
  </div>
</template>

<script>
import DetailNavBar from "./detailItem/DetailNavBar";
import DetailSwiper from "./detailItem/DetailSwiper";
import DetailShopInfo from "./detailItem/DetailShopInfo";
import Scroll from "components/common/scroll/Scroll";
import DetailBottomBar from "./detailItem/DetailBottomBar";

import { getDetialData, Shop } from "network/detail.js";
import { backTopMixin } from "common/mixin.js";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailShopInfo,
    Scroll,
    DetailBottomBar,
  },
  mixins: [backTopMixin],
  data() {
    return { iid: null, detail: {}, topImages: [], shop: {} };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
    this.iid = this.$route.params.iid;
    // 根据ID获取详情数据
    getDetialData(this.iid).then((res) => {
      // 获取轮播图信息
      this.topImages = res[this.iid].swiperimg;
      console.log(this.topImages);
      // 获取店铺信息
      this.shop = new Shop(res.shop);
      console.log(this.shop);
    });
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
  methods: {
    contentScroll(position) {
      // console.log(position);
      // console.log(this.$refs.tabcontrol.getBoundingClientRect().top);
      // if (this.tabControlOffSetTop < -position.y) {
      //   this.isTabControlFixed = true;
      // } else {
      //   this.isTabControlFixed = false;
      // }
      if (position.y < -1000) {
        this.isBackTopShow = true;
      } else {
        this.isBackTopShow = false;
      }
    },
  },
};
</script>
<style scoped>
/* @import url(); 引入css类 <style scoped src='./assets/css/base.css'>*/
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.content {
  position: fixed;
  /* height: calc(100%-93px); */
  overflow: hidden;
  top: 45px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>