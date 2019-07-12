import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'// svg component

// main.js中引入这个index 全局注册icon
Vue.component('svg-icon', SvgIcon)

const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)