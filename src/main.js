import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from '../node_modules/axios'
import $ from 'jquery'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import echarts from 'echarts'
// import * as THREE from 'three'

Vue.config.productionTip = false
Vue.use(ElementUI)
// Vue.use(echarts)
// Vue.use(THREE)
Vue.prototype.$axios = axios;

axios.defaults.baseURL = 'http://49.235.155.249:8081'
new Vue({
  router,
  store,
  axios,
  $,
  render: h => h(App)
}).$mount('#app')
