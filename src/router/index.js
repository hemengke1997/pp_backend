import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/layout'

import componentsRouter from './modules/components'
import chartsRouter from './modules/charts'
import tableRouter from './modules/table'
import nestedRouter from './modules/nested'

// constantRoutes： 代表那些不需要动态判断权限的路由，如登录页、404、等通用页面。
export const constantRoutes = [
  {
    path: '/redirect',
    components: Layout,
    hidden: true,
    children: [
      {
        // param方式传递路由参数
        path: '/redirect/:path*',
        // 这种写法是路由懒加载  const Foo = () => import('./Foo.vue')   import返回promise对象
        component:() => import('@/views/redirect/index')
      }
    ]
  },
  {
    path:'/login',
    component:()=> import('@views/login/index'),
    hidden:true
  },
  {
    path:'/404',
    component:()=> import('@views/error-page/404'),
    hidden:true
  },
  // 以上是不显示在侧边栏的路由

  {
    path: '/',
    component:Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: ()=> import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta:{title:'Dashboard',icon:'dashboard',affix:true},
      }
    ]
  },

  {
    path:'/',
    component:Index,
    hidden:false
  },
]
