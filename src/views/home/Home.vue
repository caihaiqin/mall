<!--  -->
<template>
  <div id="home">
    <!-- <h2>shouye</h2> -->
    <nav-bar class="home-nav">
      <div slot="center">精品馆</div>
    </nav-bar>
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      :pull-up-load="true"
      @scroll="contentScroll"
      @pullingUp="loadMore"
    >
      <home-swiper :banner="banner"></home-swiper>
      <home-recommend-view :recommend="recommend"></home-recommend-view>
      <feature-view></feature-view>
      <tab-control :title="['流行','新款','样式']" class="tab-control" @tabClick="tabClick"></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top @click.native="backTop" v-show="isBackTopShow"></back-top>
    <!-- 监听组件事件时需要添加.native -->
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommendView from "./childComps/HomeRecommendView";
import FeatureView from "./childComps/FeatureView";

import Scroll from "components/common/scroll/Scroll";
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import BackTop from "components/content/backTop/BackTop";

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
    Scroll,
    BackTop,
  },
  computed: {
    showGoods() {
      return this.goods[this.tabControlType].list;
    },
  },
  data() {
    return {
      isBackTopShow: false,
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
  mounted() {
    // 监听goodsItem中图片加载完成事件，//在main.js中使用Vue对象作为事件总线
    // 使用防抖动防止频繁刷新
    const refresh = this.debounce(this.$refs.scroll.refresh, 50);
    this.$bus.$on("itemImageLoad", () => {
      // console.log("--");

      // this.$refs.scroll.refresh();
      refresh();
    });
  },
  methods: {
    // 防抖动函数
    debounce(func, delay) {
      let timer = null;
      return function (...args) {
        if (timer) {
          clearTimeout(timer);
        }
        timer = setTimeout(() => {
          func.apply(this, args);
        }, delay);
      };
    },
    loadMore() {
      console.log("上拉");
      this.getHomeGoods(this.tabControlType);
      // console.log(this.goods[this.tabControlType].page);
      // this.$refs.scroll.scroll.refresh();
    },
    contentScroll(position) {
      // console.log(position);
      if (position.y < -1000) {
        this.isBackTopShow = true;
      } else {
        this.isBackTopShow = false;
      }
    },
    //事件监听方法
    tabClick(index) {
      // console.log(index);
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
    backTop() {
      this.$refs.scroll.backTopClick(0, 0, 1000);
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
        let arr = Object.keys(res[type]);
        // console.log(arr.length);
        if (page > arr.length) {
          console.log("已无商品");
          this.$refs.scroll.finishPullUp();
        } else {
          this.goods[type].list.push(...res[type][page].list);
          this.$refs.scroll.finishPullUp();
          this.goods[type].page = page;
        }
      });
    },
  },
};
</script>
<style scoped>
/* @import url(); 引入css类 <style scoped src='./assets/css/base.css'>*/
#home {
  /* position: relative; */
  padding-top: 44px;
  /* height: 100hv; */
}
.tab-control {
  position: sticky;
  /* 当top达到44px时自动变为fixed */
  top: 44px;
}
.home-nav {
  background-color: #ccc;
  color: white;
  position: fixed;
  top: 0;
  z-index: 9;
  width: 100%;
}
.content {
  position: fixed;
  /* height: calc(100%-93px); */
  overflow: hidden;
  top: 45px;
  bottom: 50px;
  left: 0;
  right: 0;
}
</style>