<!--  -->
<template>
  <div class="recommend">
    <div v-for="item in recommend" :key="item.index" class="recommend-item">
      <a :href="item.link">
        <img :src="item.pic" alt />
      </a>
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommendView",
  props: {
    recommend: {
      type: Object,
      default() {
        return {};
      },
    },
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
.recommend {
  display: flex;
  /* height: 130px; */
  border-bottom: solid #f6f6f6 5px;
  padding: 10px;
}
.recommend-item {
  /* display: block; */
  flex: 1;
  margin: 0 2px;

  padding: 5px;
  text-align: center;

  /* overflow: hidden; */
  /* float: left; */
}
.recommend-item img {
  width: 100%;
  border-radius: 50%;
}
</style>