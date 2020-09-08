<!--  -->
<template>
  <div class="car-list-item">
    <div class="item-selector">
      <check-button :is-checked="product.checked" @click.native="checkClick"></check-button>
    </div>

    <div class="car-list-item-img">
      <img :src="product.image" alt />
    </div>
    <div class="car-list-item-info">
      <div>{{product.desc}}</div>
      <div>数量：{{product.count}}</div>
    </div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";

export default {
  name: "CarListItem",
  data() {
    return {};
  },
  components: { CheckButton },
  props: {
    product: { type: Object, default: {} },
  },
  methods: {
    checkClick() {
      this.product.checked = !this.product.checked;
    },
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
};
</script>
<style scoped>
/* @import url(); 引入css类 <style scoped src='./assets/css/base.css'>*/
.car-list-item {
  display: flex;
  height: 100px;
  border-bottom: solid 1px #ccc;
  padding: 10px 5px;
}
.car-list-item-img {
  flex: 5;
  /* height: 100%; */
}
.car-list-item-img img {
  height: 100%;
  width: 100%;
  border-radius: 5px;
}
.car-list-item-info {
  flex: 10;
}
.item-selector {
  /* width: 10px; */
  flex: 2;
  display: flex;
  align-items: center;
  vertical-align: center;
  text-align: center;
}
</style>