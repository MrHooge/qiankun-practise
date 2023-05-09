import type { RouteRecordRaw } from 'vue-router'

// 路由规则
const routes: RouteRecordRaw[] = [
  {
    path: '/micro',
    name: 'micro',
    // component: () => import('@/views/HomePage.vue')
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/HomePage.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginPage.vue')
  }
]

export default routes
