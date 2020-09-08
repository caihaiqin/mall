<!--  -->
<template>
  <div class="check-button">
    <img src="~assets/img/car/ok-circle.svg" :class="{'button-checked':isChecked}" alt />
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  data() {
    return {};
  },
  props: {
    isChecked: { type: Boolean, default: false },
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
};
</script>
<style scoped>
/* @import url(); 引入css类 <style scoped src='./assets/css/base.css'>*/
.check-button img {
  width: 20px;
  /* background-color: red; */
}
.button-checked {
  background-color: red;
  border-radius: 50%;
}
</style>