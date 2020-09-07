<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <!-- 商品详情页每次需要刷新，不能keep-alive  -->
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>

    <main-tab-bar />
    <!-- <h2>hello</h2> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import MainTabBar from "components/content/mainTabbar/MainTabBar";
export default {
  name: "App",
  components: {
    // HelloWorld
    MainTabBar,
  },
};
</script>

<style>
@import "assets/css/base.css";
</style>
