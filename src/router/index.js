import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    // 預防使用者因為輸入不存在的路徑跑到空白頁面
    path: '*',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('../views/login.vue'),
    children: [
      {
        path: '/',
        name: 'login',
        component: () => import('../views/loginPage.vue')
      },
      {
        path: '/register',
        name: 'Register',
        component: () => import('../views/registerPage.vue')
      }
    ]
  },
  {
    path: '/index',
    name: '',
    component: () => import('../views/main.vue'),
    children: [
      {
        path: '/',
        name: 'Dashboard',
        component: () => import('../views/Dashboard.vue')
      },
      {
        path: '/computerproperty',
        name: '電腦資產管理',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/ComputerProperty.vue')
      },
      {
        path: '/demo',
        name: 'demoPage',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/demoPage.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
