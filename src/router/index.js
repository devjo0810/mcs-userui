import Vue from 'vue'
import VueRouter from 'vue-router'
import AppmgmtRoutes from './appmgmt'
import SignRoutes from './sign'
import TemplateRoutes from './template'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  ...AppmgmtRoutes,
  ...SignRoutes,
  ...TemplateRoutes
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(async (to, from, next) => {
  console.log('router beforeEach to :', to)
  if (to.meta.auth) {
    const isLogin = await store.dispatch('Login/isLogin')
    if (!isLogin) return next('/')
  }
  return next()
})

export default router
