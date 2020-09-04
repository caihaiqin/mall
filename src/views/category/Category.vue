<!--  -->
<template>
  <div class="wrapper">
    <ul class="content">
      <li>
        <img src="http://localhost:4000/goods-pop/pop1.jpg" alt />
      </li>
      <li>
        <img src="http://localhost:4000/goods-pop/pop1.jpg" alt />
      </li>
      <li>
        <img src="http://localhost:4000/goods-pop/pop1.jpg" alt />
      </li>
      <li>
        <img src="http://localhost:4000/goods-pop/pop1.jpg" alt />
      </li>
      <li>
        <img src="http://localhost:4000/goods-pop/pop1.jpg" alt />
      </li>
      <li>
        <img src="http://localhost:4000/goods-pop/pop1.jpg" alt />
      </li>
      <li>
        <img src="http://localhost:4000/goods-pop/pop1.jpg" alt />
      </li>
      <li>
        <img src="http://localhost:4000/goods-pop/pop1.jpg" alt />
      </li>
      <li>
        <img src="http://localhost:4000/goods-pop/pop1.jpg" alt />
      </li>
      <li>
        <img src="http://localhost:4000/goods-pop/pop1.jpg" alt />
      </li>
      <li>
        <img src="http://localhost:4000/goods-pop/pop1.jpg" alt />
      </li>
      <li>
        <img src="http://localhost:4000/goods-pop/pop1.jpg" alt />
      </li>
      <li>
        <img src="http://localhost:4000/goods-pop/pop1.jpg" alt />
      </li>
      <li>
        <img src="http://localhost:4000/goods-pop/pop1.jpg" alt />
      </li>
      <li>
        <img src="http://localhost:4000/goods-pop/pop1.jpg" alt />
      </li>
      <li>
        <img src="http://localhost:4000/goods-pop/pop1.jpg" alt />
      </li>
      <li>
        <img src="http://localhost:4000/goods-pop/pop1.jpg" alt />
      </li>
      <li>
        <img src="http://localhost:4000/goods-pop/pop1.jpg" alt />
      </li>
      <li>
        <img src="http://localhost:4000/goods-pop/pop1.jpg" alt />
      </li>
      <li>
        <img src="http://localhost:4000/goods-pop/pop1.jpg" alt />
      </li>
      <li>
        <img src="http://localhost:4000/goods-pop/pop1.jpg" alt />
      </li>
      <li>
        <img src="http://localhost:4000/goods-pop/pop1.jpg" alt />
      </li>
      <li>
        <img src="http://localhost:4000/goods-pop/pop1.jpg" alt />
      </li>
      <li>
        <img src="http://localhost:4000/goods-pop/pop1.jpg" alt />
      </li>
      <li>
        <img src="http://localhost:4000/goods-pop/pop1.jpg" alt />
      </li>
      <li>
        <img src="http://localhost:4000/goods-pop/pop1.jpg" alt />
      </li>
      <li>
        <img src="http://localhost:4000/goods-pop/pop1.jpg" alt />
      </li>
      <li>
        <img src="http://localhost:4000/goods-pop/pop1.jpg" alt />
      </li>
      <li>
        <img src="http://localhost:4000/goods-pop/pop1.jpg" alt />
      </li>
      <li>
        <img src="http://localhost:4000/goods-pop/pop1.jpg" alt />
      </li>
      <li>
        <img src="http://localhost:4000/goods-pop/pop1.jpg" alt />
      </li>
      <li>
        <img src="http://localhost:4000/goods-pop/pop1.jpg" alt />
      </li>
      <li>
        <img src="http://localhost:4000/goods-pop/pop1.jpg" alt />
      </li>
      <li>
        <img src="http://localhost:4000/goods-pop/pop1.jpg" alt />
      </li>
      <li>
        <img src="http://localhost:4000/goods-pop/pop1.jpg" alt />
      </li>
      <li>
        <img src="http://localhost:4000/goods-pop/pop1.jpg" alt />
      </li>
      <li>
        <img src="http://localhost:4000/goods-pop/pop1.jpg" alt />
      </li>
      <li>
        <img src="http://localhost:4000/goods-pop/pop1.jpg" alt />
      </li>
      <li>
        <img src="http://localhost:4000/goods-pop/pop1.jpg" alt />
      </li>
      <li>
        <img src="http://localhost:4000/goods-pop/pop1.jpg" alt />
      </li>
      <li>
        <img src="http://localhost:4000/goods-pop/pop1.jpg" alt />
      </li>
      <li>
        <img src="http://localhost:4000/goods-pop/pop1.jpg" alt />
      </li>
      <li>
        <img src="http://localhost:4000/goods-pop/pop1.jpg" alt />
      </li>
    </ul>
  </div>
</template>

<script>
import BScroll from "better-scroll";


export default {
  name: "category",
  data() {
    return { scroll: null };
  },
  methods: {},
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    this.scroll = BScroll(document.querySelector(".wrapper"), {
      probeType: 3,
      pullUpLoad: true,
    });
    this.scroll.on("scroll", (position) => {
      console.log(position);
    });
    this.scroll.on("pullingUp", () => {
      console.log("上拉");
    });
  },
};
</script>
<style scoped>
/* @import url(); 引入css类 <style scoped src='./assets/css/base.css'>*/
.wrapper {
  height: 100px;
  overflow: hidden;
  background: #eee;
}
</style>