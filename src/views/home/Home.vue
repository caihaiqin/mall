<!--  -->
<template>
  <div id="home">
    <!-- <h2>shouye</h2> -->
    <nav-bar class="home-nav">
      <div slot="center">精品馆</div>
    </nav-bar>
    <tab-control
      ref="tabcontrol1"
      :title="['流行','新款','精选']"
      id="tabcontrolfixed"
      @tabClick="tabClick"
      v-show="isTabControlFixed"
    ></tab-control>
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      :pull-up-load="true"
      @scroll="contentScroll"
      @pullingUp="loadMore"
    >
      <home-swiper :banner="banner" @swiperImgLoad="swiperImgLoad"></home-swiper>
      <home-recommend-view :recommend="recommend"></home-recommend-view>
      <feature-view></feature-view>
      <tab-control
        ref="tabcontrol2"
        :title="['流行','新款','精选']"
        class="tab-control"
        @tabClick="tabClick"
      ></tab-control>
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
import { debounce } from "common/utils";

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
      isTabControlFixed: false,
      saveY: 0,

      banner: {},
      recommend: {},
      goods: {
        pop: { page: 0, list: [] },
        news: { page: 0, list: [] },
        select: { page: 0, list: [] },
      },
      tabControlType: "pop",
      tabControlOffSetTop: 0,
    };
  },
  // 解决切换到其他页面返回时页面停留在离开时的位置，首先在APP.vue添加keep-alive
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
    this.$refs.scroll.refresh();
  },
  deactivated() {
    this.saveY = this.$refs.scroll.getScrollY();
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
    const refresh = debounce(this.$refs.scroll.refresh, 50);
    this.$bus.$on("itemImageLoad", () => {
      refresh();
    });
    // console.log(this.$refs.tabcontrol.$el.offsetTop);
  },
  methods: {
    //录播图加载完后保存tabcontrol距离顶部位置
    swiperImgLoad() {
      this.tabControlOffSetTop = this.$refs.tabcontrol2.$el.offsetTop;
    },

    loadMore() {
      console.log("上拉");
      this.getHomeGoods(this.tabControlType);
      // console.log(this.goods[this.tabControlType].page);
      // this.$refs.scroll.scroll.refresh();
    },
    contentScroll(position) {
      // console.log(position);
      // console.log(this.$refs.tabcontrol.getBoundingClientRect().top);
      if (this.tabControlOffSetTop < -position.y) {
        this.isTabControlFixed = true;
      } else {
        this.isTabControlFixed = false;
      }
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
      this.$refs.tabcontrol1.currentIndex = index;
      this.$refs.tabcontrol2.currentIndex = index;
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

#tabcontrolfixed {
  position: relative !important;
  /* left: 0;
  right: 0;
  top: 44px; */
  z-index: 100 !important;
}

.home-nav {
  background-color: #ccc;
  color: white;
  /* position: fixed;
  top: 0;
  z-index: 9; */
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