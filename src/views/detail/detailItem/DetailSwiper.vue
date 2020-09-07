<!-- 
 -->
<template>
  <swiper class="detailswiper">
    <el-carousel-item v-for="item in topImages" :key="item">
      <img :src="item" alt />
    </el-carousel-item>
    <!-- <el-carousel-item>
      <img src="http://localhost:4000/detail/swiperimg/pop1-1/1.jpg" alt />
    </el-carousel-item>
    <el-carousel-item>
      <img src="http://localhost:4000/detail/swiperimg/pop1-1/2.jpg" alt />
    </el-carousel-item>
    <el-carousel-item>
      <img src="http://localhost:4000/detail/swiperimg/pop1-1/3.jpg" alt />
    </el-carousel-item>-->
  </swiper>
</template>

<script>
import Swiper from "components/common/swiper/Swiper";
export default {
  name: "DetailSwiper",
  props: {
    topImages: { type: Array, default: [] },
  },
  components: {
    Swiper,
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
/* .detailswiper {
  height: 100px;
} */
.detailswiper img {
  height: 100%;
  width: 100%;
}
</style>