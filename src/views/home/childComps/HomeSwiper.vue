<!--  -->
<template>
  <swiper>
    <el-carousel-item v-for="item in banner" :key="item.index">
      <a :href="item.link" class="imgbox">
        <img :src="item.pic" @load="imgLoad" />
      </a>
    </el-carousel-item>
  </swiper>
</template>

<script>
import Swiper from "components/common/swiper/Swiper";
export default {
  name: "HomeSwiper",
  methods: {
    imgLoad() {
      if (!this.imgIsLoad) {
        console.log("imgload");
        this.$emit("swiperImgLoad");
        this.imgIsLoad = true;
      }
    },
  },
  components: {
    Swiper,
  },
  props: {
    banner: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return { imgIsLoad: false };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
};
</script>
<style >
/* @import url(); 引入css类 <style scoped src='./assets/css/base.css'>*/
</style>