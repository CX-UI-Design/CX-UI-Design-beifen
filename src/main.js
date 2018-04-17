// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import store from './store/index'

import components from './components'

Vue.config.productionTip = false

// Import view related components (UI, animation, attachments, scripts...)
import viewSpt from './views'
import './mock'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  viewSpt,
  components,
  // axios,
  components: {App},
  template: '<App/>'
})
