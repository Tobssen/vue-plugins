import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Tarife from '../views/Tarife.vue'
import Details from '../views/Details.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/tarife',
      name: 'Tarife',
      component: Tarife
    },
    {
      path: '/details/:id',
      name: 'Details',
      props: true,
      component: Details
    },
    {
      path: '/hardware',
      name: 'Hardware',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: 'hardware' */ '../views/Hardware.vue')
    }
  ]
})
