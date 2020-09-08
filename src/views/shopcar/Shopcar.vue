<!-- 
 -->
<template>
  <div class="shopcar">
    <nav-bar class="shopcar-nav">
      <div slot="center">购物车({{this.carListLength}})</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
//引用vuex 中的getters
import { mapGetters } from "vuex";
export default {
  name: "shopcar",
  components: {
    NavBar,
  },

  data() {
    return {};
  },
  computed: {
    //引用vuex 中的getters
    ...mapGetters("carListLength"),
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
</style>