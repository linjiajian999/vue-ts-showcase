import Vue from 'vue'
import Router from 'vue-router'

import { routes as loginRoutes } from '@/views/0-login'
import { routes as homeRoutes } from '@/views/1-home'

Vue.use(Router)

export default new Router({
  routes: [
    ...homeRoutes,
    ...loginRoutes,
  ]
})
