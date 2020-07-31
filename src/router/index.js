import Vue from 'vue'
import Router from 'vue-router'

// 解决重复点击报错的问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
}
Vue.use(Router)

const PublishArticle = () => import('../components/views/PublishArticle')
const PublishArticleRouter = {
  path: '/publish-article',
  component: PublishArticle,
}

export default new Router({
  routes: [PublishArticleRouter],
  mode: 'history',
})
