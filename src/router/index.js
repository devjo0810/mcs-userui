import Vue from 'vue'
import VueRouter from 'vue-router'
import SignRoutes from './sign'
import TemplateRoutes from './template'

Vue.use(VueRouter)

const routes = [
  ...SignRoutes,
  ...TemplateRoutes
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
