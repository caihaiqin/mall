<!--  -->
<template>
  <div id="home">
    <!-- <h2>shouye</h2> -->
    <nav-bar class="home-nav">
      <div slot="center">精品馆</div>
    </nav-bar>
    <home-swiper :banner="banner"></home-swiper>
    <home-recommend-view :recommend="recommend"></home-recommend-view>
  </div>
  <!-- <nav-bar><nav-bar/> -->
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommendView from "./childComps/HomeRecommendView";
import { getHomeMultidata } from "network/home";

export default {
  name: "home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommendView,
  },
  data() {
    return {
      banner: {},
      recommend: {},
    };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
    //获取图片数据
    getHomeMultidata().then((res) => {
      // console.log(res);
      this.banner = res.banner;
      // console.log(this.banner.img_01);
      this.recommend = res.recommend;
    });
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
};
</script>
<style scoped>
/* @import url(); 引入css类 <style scoped src='./assets/css/base.css'>*/
.home-nav {
  background-color: var(--color-tint);
  color: white;
}
</style>