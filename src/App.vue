<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <router-view />
    <main-tab-bar />
    <h2>hello</h2>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import MainTabBar from "@/components/content/mainTabbar/MainTabBar";
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
