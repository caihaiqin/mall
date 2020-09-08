<!--  -->
<template>
  <div class="car-list-bottom">
    <div class="checkbutton">
      <check-button :isChecked="isAllChecked" class="check-button" @click.native="checkAllClick"></check-button>
      <span>全选</span>
    </div>
    <div class="sumprice">合计：{{totalPrice}}</div>
    <div class="settlement">去结算({{totalCount}})</div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";
export default {
  name: "CarListBottom",
  data() {
    return {};
  },
  methods: {
    checkAllClick() {
      if (this.isAllChecked) {
        this.$store.state.carList.forEach((item) => (item.checked = false));
      } else {
        this.$store.state.carList.forEach((item) => (item.checked = true));
      }
    },
  },
  computed: {
    totalPrice() {
      return (
        "￥" +
        this.$store.state.carList
          .filter((item) => {
            return item.checked;
          })
          .reduce((preValue, item) => {
            return preValue + item.price * item.count;
          }, 0)
      );
    },
    totalCount() {
      return this.$store.state.carList
        .filter((item) => {
          return item.checked;
        })
        .reduce((preValue, item) => {
          return preValue + item.count;
        }, 0);
    },
    //全选按钮逻辑
    isAllChecked() {
      if (this.$store.state.carList.length === 0) {
        return false;
      } else {
        return !this.$store.state.carList.find((item) => !item.checked);
      }
    },
  },
  components: { CheckButton },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
};
</script>
<style scoped>
/* @import url(); 引入css类 <style scoped src='./assets/css/base.css'>*/
.car-list-bottom {
  height: 40px;
  /* background-color: #ccc; */
  position: fixed;
  display: flex;
  bottom: 49px;
  left: 0;
  right: 0;
}
.checkbutton {
  flex: 2;
  background-color: #f6f6f6;
}
.sumprice {
  flex: 4;
  background-color: #f6f6f6;
  text-align: center;
  line-height: 40px;
}
.settlement {
  flex: 2;
  font-size: 16px;
  text-align: center;
  line-height: 40px;
  color: white;
  background-color: rgb(235, 62, 10);
}
</style>