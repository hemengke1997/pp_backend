// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store';
import Cookies from 'js-cookies'
import ElementUI from 'element-ui';
import 'normalize.css/normalize.css'
// import 'element-ui/lib/theme-chalk/index.css';
import './styles/element-variables.scss'
import './styles/index.scss' // global css
import './icons'
Vue.use(ElementUI)
Vue.use(Cookies)


const path = require('path')
Vue.use(path)

// 设置为 false 以阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false
/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  router,
  store,
  render: h=>h(App),
})


