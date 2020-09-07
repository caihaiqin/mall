<!--  -->
<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
    <scroll class="content">
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
  </div>
</template>

<script>
import DetailNavBar from "./detailItem/DetailNavBar";
import DetailSwiper from "./detailItem/DetailSwiper";
import DetailShopInfo from "./detailItem/DetailShopInfo";
import Scroll from "components/common/scroll/Scroll";

import { getDetialData, Shop } from "network/detail.js";
export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailShopInfo,
    Scroll,
  },

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
  bottom: 0;
  left: 0;
  right: 0;
}
</style>