import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/layout'

import officeRouter  from './modules/office'



export default new Router({
  routes:[
    {
      path:'/',
      name:'index',
      meta:{title:'首页'}
    },
    officeRouter,
  ]
})