<!--  -->
<template>
  <div id="home">
    <!-- <h2>shouye</h2> -->
    <nav-bar class="home-nav">
      <div slot="center">精品馆</div>
    </nav-bar>
    <home-swiper :banner="banner"></home-swiper>
    <home-recommend-view :recommend="recommend"></home-recommend-view>
    <feature-view></feature-view>
    <tab-control :title="['流行','新款','样式']" class="tab-control" @tabClick="tabClick"></tab-control>
    <goods-list :goods="showGoods"></goods-list>
    <ul>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
      <li>11111</li>
    </ul>
  </div>
  <!-- <nav-bar><nav-bar/> -->
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommendView from "./childComps/HomeRecommendView";
import FeatureView from "./childComps/FeatureView";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";

import { getHomeMultidata, getHomeGoods } from "network/home";

export default {
  name: "home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommendView,
    FeatureView,
    TabControl,
    GoodsList,
  },
  computed: {
    showGoods() {
      return this.goods[this.tabControlType].list;
    },
  },
  data() {
    return {
      banner: {},
      recommend: {},
      goods: {
        pop: { page: 0, list: [] },
        news: { page: 0, list: [] },
        select: { page: 0, list: [] },
      },
      tabControlType: "pop",
    };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
    //获取图片数据
    this.getHomeMultidata();

    this.getHomeGoods("pop");
    this.getHomeGoods("news");
    this.getHomeGoods("select");
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
  methods: {
    //事件监听方法
    tabClick(index) {
      console.log(index);
      switch (index) {
        case 0:
          this.tabControlType = "pop";
          break;
        case 1:
          this.tabControlType = "news";
          break;
        case 2:
          this.tabControlType = "select";
          break;
      }
    },
    // 网络请求方法
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        // console.log(res);
        this.banner = res.banner;
        // console.log(this.banner.img_01);
        this.recommend = res.recommend;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;

      getHomeGoods(type, page).then((res) => {
        // console.log(res);

        // console.log(res[type][page].list);
        this.goods[type].list.push(...res[type][page].list);
      });
      this.goods[type].page = page;
    },
  },
};
</script>
<style scoped>
/* @import url(); 引入css类 <style scoped src='./assets/css/base.css'>*/
#home {
  padding-top: 44px;
}
.tab-control {
  position: sticky;
  /* 当top达到44px时自动变为fixed */
  top: 44px;
}
.home-nav {
  background-color: var(--color-tint);
  color: white;
  position: fixed;
  top: 0;
  z-index: 9;
  width: 100%;
}
</style>