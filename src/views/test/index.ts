import { RouteConfig } from 'vue-router'

const test0 = () =>  import(/* webpackChunkName: "0-login" */ './test-0.vue')
const test1 = () =>  import(/* webpackChunkName: "0-login" */ './test-1.vue')
 const test2 = () =>  import(/* webpackChunkName: "0-login" */ './test-2.vue')

export const routes: RouteConfig[] = [
  {
    path: '/',
    alias: ['/test0'],
    name: '',
    component: test0,
    meta: {
      level: 0,
      title: 'test0',
      requireAuth: false
    }
  },
  {
    path: '/test1',
    name: 'test1',
    component: test1,
    meta: {
      level: 0,
      title: 'test1',
      requireAuth: false
    }
  },
  {
    path: '/test2',
    name: 'test2',
    component: test2,
    meta: {
      level: 0,
      title: 'test2',
      requireAuth: false
    }
  }
]
