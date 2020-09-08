import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//移动端减少300ms延迟fastClick
import FastClick from 'fastclick'
//使用图片懒加载插件
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload)

Vue.config.productionTip = false
//在main.js中使用Vue对象作为事件总线
Vue.prototype.$bus = new Vue()
Vue.use(ElementUI);
FastClick.attach(document.body)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
