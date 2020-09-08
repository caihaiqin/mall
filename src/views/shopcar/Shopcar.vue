<!-- 
 -->
<template>
  <div class="shopcar">
    <nav-bar class="shopcar-nav">
      <div slot="center">购物车({{this.carListLength}})</div>
    </nav-bar>
    <scroll class="content" ref="scroll" :probe-type="3" :pull-up-load="true">
      <car-list></car-list>
    </scroll>
    <car-list-bottom></car-list-bottom>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";
import CarListBottom from "views/shopcar/childCopms/CarListBottom";
//引用vuex 中的getters
import { mapGetters } from "vuex";
import CarList from "./childCopms/CarList";
export default {
  name: "shopcar",
  components: {
    NavBar,
    CarList,
    Scroll,
    CarListBottom,
  },
  activated() {
    // this.$refs.scroll.scrollTo(0, this.saveY, 0);
    this.$refs.scroll.refresh();
  },
  data() {
    return {};
  },
  computed: {
    //引用vuex 中的getters
    ...mapGetters(["carListLength"]),
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
};
</script>
<style scoped>
/* @import url(); 引入css类 <style scoped src='./assets/css/base.css'>*/
.shopcar-nav {
  background-color: pink;
  color: azure;
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