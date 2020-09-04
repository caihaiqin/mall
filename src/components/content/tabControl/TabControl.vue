<!--  -->
<template>
  <div class="tab-control">
    <div
      v-for="(item,index) in title"
      :key="item"
      class="tab-control-item"
      :class="{active:currentIndex===index}"
      @click="tabItemClick(index)"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    title: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return { currentIndex: 0 };
  },
  methods: {
    tabItemClick(index) {
      this.currentIndex = index;
      this.$emit("tabClick", index); //子组件事件往父组件传递
    },
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
};
</script>
<style scoped>
/* @import url(); 引入css类 <style scoped src='./assets/css/base.css'>*/
.tab-control {
  display: flex;
  text-align: center;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
}
.tab-control-item {
  flex: 1;
}
.tab-control-item span {
  padding: 5px;
}
.active {
  color: var(--color-high-text);
}
.active span {
  border-bottom: solid 2px var(--color-high-text);
}
</style>