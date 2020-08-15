import Vue from "vue"
import App from "./App.vue"

import ViewUI from "view-design"
import "view-design/dist/styles/iview.css"

import router from "./router"

import axios from "axios"

import hljs from "highlight.js"
import "highlight.js/styles/atom-one-dark.css"

import store from "./store"

Vue.use(ViewUI)

Vue.prototype.$axios = axios //定义为全局
Vue.config.productionTip = false

Vue.directive("highlight", function(el) {
  let blocks = el.querySelectorAll("pre")
  blocks.forEach((block) => {
    hljs.highlightBlock(block)
  })
})

const whiteList = ["/index"]
router.beforeEach(async (to, from, next) => {
  if (whiteList.include(to.path)) {
    return next()
  }
  const isAuthentication = await store.dispatch("validate_token")
})
new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app")
