import Vue from 'vue'
import Router from 'vue-router'
import Pricing from "./views/Pricing";


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/pricing',
      name: 'pricing',
      component: Pricing
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
