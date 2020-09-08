<!--  -->
<template>
  <div class="detailbottombar">
    <div class="bar-left">
      <div class="text">
        <span>客服</span>
      </div>
      <div class="text">
        <span>店铺</span>
      </div>
      <div class="text">
        <span>收藏</span>
      </div>
    </div>
    <div class="bar-right">
      <div class="cart" @click="cartClick">加入购物车</div>
      <div class="buy" @click="buyClick">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  data() {
    return {};
  },
  methods: { cartClick() {}, buyClick() {} },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
};
</script>
<style scoped>
/* @import url(); 引入css类 <style scoped src='./assets/css/base.css'>*/
.detailbottombar {
  height: 49px;
  background-color: #ccc;
  position: fixed;
  display: flex;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  line-height: 49px;
}
.bar-left {
  display: flex;
  flex: 1;
  background-color: ivory;
}
.bar-right {
  display: flex;
  flex: 1;
}

.text {
  flex: 1;
  text-align: center;
}
.cart,
.buy {
  flex: 1;
}
.cart {
  background-color: gold;
}
.buy {
  background-color: hotpink;
}
</style>