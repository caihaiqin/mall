<!--  -->
<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
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
.nav-bar {
  display: flex;
  /* height: 44px; */
  text-align: center;
  line-height: 44px;
}
.nav-bar .left,
.nav-bar .right {
  width: 60px;
  /* background-color: red; */
}
.nav-bar .center {
  flex: 1;
  /* background-color: blue; */
}
</style>