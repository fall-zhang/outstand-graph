import type { RouteRecordRaw } from 'vue-router'
import { BlankLayout } from '../layout'
const constRouters: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main-page',
  }, {
    path: '/components',
    component: () => import('@C/_collection/index.vue'),
  }, {
    path: '/main-page',
    component: () => import('@V/main-page.vue'),
  }
]
export default constRouters
