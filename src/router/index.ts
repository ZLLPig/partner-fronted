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
      path: '/user/userLogin',
      name:'用户登录',
      component: () => import('../pages/UserLoginPage.vue')
    },
    {
      path: '/user/userRegister',
      name:'用户注册',
      component: () => import('../pages/UserRegisterPage.vue')
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
    },
    {
      path: '/user/result',
      name:'搜索结果',
      component: () => import('../pages/SearchResultPage.vue')
    }
  ]
})

export default router;
