import Vue from 'vue'
import App from './App.vue'

import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'

import router from './router'

import axios from 'axios'
 
Vue.prototype.$axios=axios //定义为全局
Vue.config.productionTip = false

Vue.use(ViewUI)

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app')
