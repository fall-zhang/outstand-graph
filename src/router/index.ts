import { createRouter, createWebHashHistory } from 'vue-router'

import type { RouteRecordRaw } from 'vue-router'
import constRoute from './constRouter'
import asyncRoute from './asyncRouter'

let routeSum = asyncRoute.concat(constRoute) as RouteRecordRaw[]
// console.log(routeSum)

const router = createRouter({
  history: createWebHashHistory(),
  routes: routeSum
})

export default router
