import type { RouteRecordRaw } from 'vue-router'

// 路由规则
const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginPage.vue')
  },
  {
    path: '/micro/:chapters*',
    name: 'MicroApp',
    component: () => import('@/views/HomePage.vue')
  }
]

export default routes
