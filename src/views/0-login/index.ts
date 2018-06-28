import { RouteConfig } from 'vue-router'

const login = () =>  import(/* webpackChunkName: "0-login" */ './Login.vue')

export const routes: RouteConfig[] = [
  {
    path: '/',
    alias: '/loign',
    name: 'login',
    component: login,
    meta: {
      level: 0,
      title: '登录',
      requireAuth: false
    }
  }
]
