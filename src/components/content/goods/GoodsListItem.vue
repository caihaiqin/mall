<!--  -->
<template>
  <div class="goods-list-item" @click="clickGoodsItem">
    <!-- 使用懒加载v-lazy -->
    <img v-lazy="goodsItem.img" @load="imageLoad" />
    <!-- 监听图片加载是否完成，加载完成刷新scroll 重新计算滚动高度 -->
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
  methods: {
    imageLoad() {
      // console.log("imageload");
      //在main.js中使用Vue对象作为事件总线$bus
      this.$bus.$emit("itemImageLoad");
    },
    clickGoodsItem() {
      console.log(this.goodsItem.iid);
      this.$router.push("/detail/" + this.goodsItem.iid);
    },
  },
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