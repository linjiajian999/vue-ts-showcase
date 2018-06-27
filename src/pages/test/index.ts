import Vue from 'vue'

import App from './App.vue'
import router from './router'

new Vue({
  name: 'app',
  router,
  render: h => h(App)
}).$mount('#app')
