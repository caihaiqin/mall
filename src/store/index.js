import Vue from 'vue'
import Vuex from 'vuex'
// 加载插件
Vue.use(Vuex)
// 创建stroe对象
const store = new Vuex.Store({
  state: {
    carList: []
  },
  getters: {
    carListLength(state) {
      return state.carList.length
    }
  },
  actions: {
    addCart(context, payload) {
      const oldProduct = context.state.carList.find(item => item.iid === payload.iid)
      if (oldProduct) {
        context.commit('productAdd', oldProduct)
        // oldProduct.count += 1;
      } else {
        payload.count = 1;
        // state.carList.push(payload);
        context.commit('productPush', payload)
      }

    }
  },
  mutations: {
    // 将商品添加到购物车
    productAdd(state, payload) {
      payload.count++;
    },
    productPush(state, payload) {
      state.carList.push(payload);
    }

  }
})

export default store
