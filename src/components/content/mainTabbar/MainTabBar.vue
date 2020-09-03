<!--  -->
<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="blue">
      <img slot="item-ico" src="~assets/img/tabbar/home.jpg" alt />
      <img slot="item-ico-active" src="~assets/img/tabbar/home-active.gif" alt />
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="blue">
      <img slot="item-ico" src="~assets/img/tabbar/class.jpg" alt />
      <img slot="item-ico-active" src="~assets/img/tabbar/home-active.gif" alt />

      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/shopcar" activeColor="blue">
      <img slot="item-ico" src="~assets/img/tabbar/shopcar.jpg" alt />
      <img slot="item-ico-active" src="~assets/img/tabbar/home-active.gif" alt />

      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="red">
      <img slot="item-ico" src="~assets/img/tabbar/profile.jpg" alt />
      <img slot="item-ico-active" src="~assets/img/tabbar/home-active.gif" alt />

      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";
export default {
  name: "maintabbar",
  data() {
    return {};
  },
  components: { TabBar, TabBarItem },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
};
</script>
<style scoped>
/* @import url(); 引入css类 <style scoped src='./assets/css/base.css'>*/
</style>