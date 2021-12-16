import Vue from 'vue'
import VueRouter from 'vue-router'
import AppmgmtRoutes from './appmgmt'
import SignRoutes from './sign'
import MenuRoutes from './menu'
import TemplateRoutes from './template'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  ...AppmgmtRoutes,
  ...SignRoutes,
  ...MenuRoutes,
  ...TemplateRoutes
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(async (to, from, next) => {
  if (to.meta.auth) {
    const isLogin = await store.dispatch('Login/isLogin')
    console.log('router beforeEach isLogin :', isLogin)
    if (!isLogin) {
      await Vue.dialog.alert('로그인후 이용 가능합니다.')
      return next('/')
    }
  }
  return next()
})

export default router
