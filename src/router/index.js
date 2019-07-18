import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import officeRouter  from './modules/office'
import Layout from '@/layout'


export default new Router({
  routes:[
    {
      path:'/',
      name:'dashboard',
      meta:{title:'首页',icon:'dashboard',affix:true},
      component:Layout
    },
    officeRouter,
  ]
})