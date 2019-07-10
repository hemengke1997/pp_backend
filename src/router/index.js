import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/layout'

import officeRouter  from './modules/office'

// constantRoutes： 那些基础的页面，所有角色都可以访问
export const constantRoutes = [
  {
    path: '/redirect',
    components: Layout,
    hidden: true,
    children: [
      {
        // params方式传递路由参数
        path: '/redirect/:path*',
        // 这种写法是路由懒加载  const Foo = () => import('./Foo.vue')   import返回promise对象
        component:() => import('@/views/redirect/index')
      }
    ]
  },
  // {
  //   path:'/login',
  //   component:()=> import('@views/login/index'),
  //   hidden:true
  // },
  // {
  //   path:'/404',
  //   component:()=> import('@views/error-page/404'),
  //   hidden:true
  // },
  // 以上是不显示在侧边栏的路由
  // 首页
  // {
  //   path: '/',
  //   component:Layout,
  //   redirect: '/dashboard',
  //   children: [
  //     {
  //       path: 'dashboard',
  //       component: ()=> import('@/views/dashboard/index'),
  //       name: 'Dashboard',
  //       meta:{title:'Dashboard',icon:'dashboard',affix:true},
  //     }
  //   ]
  // },
  {
    path:'/',
    component:Layout,
  }
]

// 需要一定的角色才能访问的路由
export const asyncRoutes = [
  officeRouter 
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router

