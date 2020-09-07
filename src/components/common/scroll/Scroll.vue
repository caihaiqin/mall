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
  props: {
    probeType: { type: Number, default: 0 },
    pullUpLoad: { type: Boolean, default: false },
  },
  data() {
    return { scroll: null };
  },
  methods: {
    scrollTo(x, y, time) {
      this.scroll.scrollTo(x, y, time);
    },
    getScrollY() {
      return this.scroll ? this.scroll.y : 0;
    },
    backTopClick(x, y, time = 1000) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },
    refresh() {
      this.scroll && this.scroll.refresh();
      console.log("刷新");
    },
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},

  updated() {},
  mounted() {
    // 创建滚动对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      click: true,
    });
    if (this.probeType == 2 || this.probeType == 3) {
      this.scroll.on("scroll", (position) => {
        this.$emit("scroll", position);
        // console.log(this.pullUpLoad);
      });
    }
    if (this.pullUpLoad) {
      this.scroll.on("pullingUp", () => {
        console.log("上拉");
        this.$emit("pullingUp");
      });
    }
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