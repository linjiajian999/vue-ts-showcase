import Vue from 'vue'
import Router from 'vue-router'

import { routes as testRoutes } from '@/views/test'

Vue.use(Router)

export default new Router({
  routes: [
    ...testRoutes
  ]
})
