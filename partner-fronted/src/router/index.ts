import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: '主页',
      component: () => import('../pages/Index.vue')
    },
    {
      path: '/team',
      name: '队伍',
      component: () => import('../pages/TeamPage.vue')
    },
    {
      path: '/user',
      name: '用户',
      component: () => import('../pages/UserPage.vue')
    },
    {
      path:'/search',
      name:'搜索',
      component: () => import('../pages/SearchPage.vue')
    },
    {
      path: '/user/edit',
      name:'用户编辑',
      component: () => import('../pages/UserEditPage.vue')
    }
  ]
})

export default router;
