import type { RouteRecordRaw } from 'vue-router'
import { BlankLayout } from '../layout'
const constRouters: RouteRecordRaw[] = [

  {
    path: '/',
    redirect: '/home-page'
  },
  {
    path: '/home-page',
    component: () =>/* 首页 */ import('@V/home-page/home-page.vue')
  },
  {
    path: '/flow-page',
    component: () => /* 流程设计 */import('@V/flow-page/flow-page.vue')
  },

  {
    path: '/',
    name: 'home',
    component: () => import('@V/filling-chart/MainView.vue'),
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@V/filling-chart/MainView.vue')
  },
  // {
  //   path: '/chart/:id',
  //   name: 'chart',
  //   // component: BlankRouter,
  //   component: () => import('@/views/MainView.vue'),
  //   // children: [
  //   //   {
  //   //     path: '/echarts/echarts-gen-tool',
  //   //     name: 'echarts-gen-tool',
  //   //     component: () => import('@/views/echarts-gen-tool/MainView.vue'),
  //   //     meta: { menuName: "生成echarts" },
  //   //   }
  //   // ]
  // },
  {
    path: '/*',
    redirect: '/home-page'
  },
]
export default constRouters
