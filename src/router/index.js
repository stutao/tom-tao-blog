import Vue from "vue"
import Router from "vue-router"

// 解决重复点击报错的问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
}
Vue.use(Router)

const PublishArticle = () => import("@/components/views/PublishArticle")
const Index = () => import("@/components/index/Index")
const List = () => import("@/components/articles/List")
const CMS = () => import("@/components/cms/CMS")
const Details = () => import("@/components/articles/details")

const rootRouter = {
  path: "/",
  redirect: "/index",
}

const CMSRouter = {
  path: "/CMS",
  component: CMS,
  children: [
    {
      path: "/CMS/publish-article",
      component: PublishArticle,
    },
  ],
}

const indexRouter = {
  path: "/index",
  component: Index,
  children: [
    {
      path: "/index/:article_type",
      component: List,
    },
    {
      path: "",
      component: List,
    },
  ],
}

const detailRouter = {
  path: "/article/:article_id",
  component: Details,
}

export default new Router({
  routes: [rootRouter, CMSRouter, indexRouter,detailRouter],
  mode: "history",
})



