import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import officeRouter  from './modules/office'



export  const router = new Router({
  routes:[
    {
      path:'/',
      name:'index',
      meta:{title:'首页'}
    },
    officeRouter,
  ]
})