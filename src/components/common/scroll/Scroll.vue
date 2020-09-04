<!--  -->
<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  data() {
    return { scroll: null };
  },
  methods: {
    backTopClick(x, y, time = 1000) {
      this.scroll.scrollTo(x, y, time);
    },
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  mounted() {},
  //生命周期 - 挂载完成（访问DOM元素）
  // mounted() {
  //   this.scroll = BScroll(this.$refs.wrapper, {
  //     probeType: 3,
  //     // pullUpLoad: true,
  //     click: true,
  //   });
  //   this.scroll.on("scroll", (position) => {
  //     console.log(position);
  //   });
  //   this.scroll.on("pullingUp", () => {
  //     console.log("上拉");
  //   });
  // },
  updated() {
    this.scroll = BScroll(this.$refs.wrapper, {
      probeType: 3,
      pullUpLoad: true,
      click: true,
    });
    this.scroll.on("scroll", (position) => {
      // console.log(position);
    });
    this.scroll.on("pullingUp", () => {
      console.log("上拉");
    });
  },
};
</script>
<style scoped>
/* @import url(); 引入css类 <style scoped src='./assets/css/base.css'>*/
/* .wrapper {
  height: 400px;
  overflow: hidden;
  background: #eee;
} */
</style>