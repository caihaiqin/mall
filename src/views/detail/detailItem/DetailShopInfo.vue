<!--  -->
<template>
  <div class="shop-info">
    <div class="shop-top">
      <img :src="shop.logo" alt />
      <span class="shopname">{{shop.name}}</span>
    </div>
    <div>
      <span>评分：{{shop.score}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shop: {
      type: Object,
      default: {},
    },
  },
  data() {
    return {};
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
};
</script>
<style scoped>
/* @import url(); 引入css类 <style scoped src='./assets/css/base.css'>*/
.shopname {
  font-size: 30px;
}
.shop-top img {
  vertical-align: bottom;
}
</style>