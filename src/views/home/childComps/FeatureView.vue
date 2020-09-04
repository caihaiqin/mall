<!--  -->
<template>
  <div class="featureVivew">
    <a href="https://item.jd.com/70749544557.html">
      <img src="~assets/img/home/featureview.jpg" alt />
    </a>
  </div>
</template>

<script>
export default {
  name: "FeatureView",
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
.featureVivew {
  margin-top: 10px;
  /* height: 100px; */
}
.featureVivew img {
  width: 100%;
}
</style>