<!--  -->
<template>
  <div class="goods">
    <goods-list-item
      v-for="item in goods "
      :key="item.index"
      :goodsItem="item"
      class="goods-list-item"
    />
  </div>
</template>

<script>
import GoodsListItem from "components/content/goods/GoodsListItem";

export default {
  name: "GoodsList",
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    GoodsListItem,
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
/* goods-list-item */
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0 5px;
}
.goods::after {
  content: "";
  width: 48%;
  flex: auto;
}
</style>