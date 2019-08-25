import Vue from 'vue'
import Router from 'vue-router'
import Pricing from "./views/Pricing";
import Forms from "./views/Forms";


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'pricing',
      component: Pricing
    },
    {
      path: '/forms',
      name: 'forms',
      component: Forms
    },
    {
      path: '/states',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
