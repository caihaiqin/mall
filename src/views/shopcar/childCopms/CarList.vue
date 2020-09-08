<!-- 
 -->
<template>
  <div class="car-list">
    <car-list-item v-for="(item,index) in carList" :key="index" :product="item"></car-list-item>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CarListItem from "./CarListItem";

export default {
  name: "CarList",
  data() {
    return {};
  },
  components: {
    CarListItem,
  },
  computed: {
    ...mapGetters(["carList"]),
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
};
</script>
<style scoped>
/* @import url(); 引入css类 <style scoped src='./assets/css/base.css'>*/
</style>