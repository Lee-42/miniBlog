import Vue from "vue";
import Router from "vue-router";

// import TryOne from "./components/tryVueComponent/TryOne.vue";
// import TryTwo from "./components/tryVueComponent/TryTwo.vue";


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: () =>
        import( "./views/Home.vue" )
    },
    {
      path: "/articles",
      name: "articles",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () =>
      //   import( "./views/Articles.vue")
    },
    // {
    //   path:'/tryOne',
    //   name:"tryOne",
    //   component: TryOne
    // },
    // {
    //   path:'/tryTwo',
    //   name:"tryTwo",
    //   component: TryTwo
    // }
  ]
});
