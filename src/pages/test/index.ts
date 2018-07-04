import Vue from 'vue'

import App from './App.vue'

import '@/assets/styles/index.scss'

import router from './router'

new Vue({
  name: 'app',
  router,
  render: h => h(App)
}).$mount('#app')
