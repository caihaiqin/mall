<!--  -->
<template>
  <el-carousel>
    <slot></slot>
  </el-carousel>
</template>

<script>
export default {
  name: "Swiper",
  data() {
    return {};
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
};
</script>
<style>
/* @import url(); 引入css类 <style scoped src='./assets/css/base.css'>*/
.el-carousel {
  text-align: center;
  height: 200px;
  margin-bottom: 5px;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.imgbox img {
  /* height: 100%; */
  width: 100%;
}
</style>