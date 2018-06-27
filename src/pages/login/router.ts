import Vue from 'vue'
import Router from 'vue-router'

import { routes as loginRoutes } from '@/views/0-login'

Vue.use(Router)

export default new Router({
  routes: [
    ...loginRoutes,
  ]
})
