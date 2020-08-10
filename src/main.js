import Vue from "vue"
import App from "./App.vue"

import ViewUI from "view-design"
import "view-design/dist/styles/iview.css"

import router from "./router"

import axios from "axios"

import hljs from "highlight.js"
import "highlight.js/styles/atom-one-dark.css"

Vue.use(ViewUI)

Vue.prototype.$axios = axios //定义为全局
Vue.config.productionTip = false

Vue.directive("highlight", function(el) {
  let blocks = el.querySelectorAll("pre")
  blocks.forEach((block) => {
    hljs.highlightBlock(block)
  })
})

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app")
