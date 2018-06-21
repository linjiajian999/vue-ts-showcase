import { RouteConfig } from 'vue-router'
const login = () =>  import(/* webpackChunkName: "0-login" */ './login.vue')
export const routes: RouteConfig[] = [
  {
    path: '/',
    alias: ['/login', '*'],
    name: 'login',
    component: login,
    meta: {
      level: 0,
      title: '登录',
      requireAuth: false
    }
  }
]
