import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode:'history',
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import('./views/Home.vue')
    },
    {
      path: "/articles",
      name: "articles",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("./views/Articles.vue")
    },
    {
      path: "/articleDetail",
      name: "articleDetail",
      component: () => import("./views/ArticleDetail.vue")
    },
    {
      path: '/archive',
      name: 'archive',
      component: () => import("./views/Archive.vue")
    },
    {
      path: '/project',
      name: 'project',
      component: () => import('./views/Project.vue')
    },
    {
      path: '/message',
      name: 'message',
      component: () => import('./views/Message.vue')
    }
  ]
});
