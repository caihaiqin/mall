<!--  -->
<template>
  <div class="goods-list-item">
    <img :src="goodsItem.img" alt />
    <div>
      <p class="goods-list-item-title">{{goodsItem.title}}</p>
      <span class="goods-list-item-price">{{goodsItem.price}}</span>
      <span class="goods-list-item-cfav">收藏{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
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
<style >
/* @import url(); 引入css类 <style scoped src='./assets/css/base.css'>*/
.goods-list-item {
  /* float: left; */
  width: 48%;
  /* margin-left: 5px; */
  /* margin-right: 5px; */

  margin-top: 10px;
  text-align: center;
}
.goods-list-item img {
  width: 100%;
  border-radius: 10px;
}
.goods-list-item-title {
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.goods-list-item-price {
  font-size: 10px;
  color: deeppink;
  /* vertical-align: bottom; */
  vertical-align: middle;
}
.goods-list-item-cfav {
  padding: 10px !important;
  font-size: 10px;
  color: coral;
  vertical-align: bottom;
}
</style>