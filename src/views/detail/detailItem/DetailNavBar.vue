<!--  -->
<template>
  <div>
    <nav-bar class="detailnavber">
      <div slot="left" @click="backClick">
        <img src="~assets/img/detail/detailNavBarBack.png" class="back" alt />
      </div>
      <div slot="center" class="title">
        <div
          v-for="(item,index) in title"
          class="title-item"
          :key="index"
          :class="{active:index===currentIndex}"
          @click="DetailNavBarClick(index)"
        >{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "",
  methods: {
    DetailNavBarClick(index) {
      this.currentIndex = index;
    },
    backClick() {
      this.$router.back();
    },
  },
  components: {
    NavBar,
  },
  data() {
    return { title: ["商品", "参数", "评论", "推荐"], currentIndex: 0 };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
};
</script>
<style scoped>
/* @import url(); 引入css类 <style scoped src='./assets/css/base.css'>*/
.title {
  display: flex;
}
.title-item {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
.back {
  margin-top: 10px;
}
.detailnavber {
  /* background-color: #f6f6f6; */
  border-bottom: darkgray 2px solid;
}
</style>