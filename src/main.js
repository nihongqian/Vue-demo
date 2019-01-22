import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import './assets/css/base.css'
// import './assets/css/style.css'
import './assets/js/font'

import axios from './plugins/axios'
Vue.use(axios)

// import $ from 'jquery'
// window.$ = $;
// import './assets/js/jquery-1.7.2'  //看库如何输出，决定如何引入

//安装通用组件
import loading from './components/loading'
Vue.use(loading);

//引入动画库
import 'animate.css'; 

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')