import Vue from 'vue'
import VueRouter from 'vue-router'
import AppmgmtRoutes from './appmgmt'
import SignRoutes from './sign'
import MenuRoutes from './menu'
import TemplateRoutes from './template'
import NotFound from '@/views/NotFound'
import store from '@/store'

window.vueRouter = VueRouter

/**
 * Vue Router 예외제거
 * NavigationDuplicated
 */
const superPush = VueRouter.prototype.push
VueRouter.prototype.push = function (location) {
  return superPush.call(this, location).catch(err => {
    if (err.name !== 'NavigationDuplicated') throw err
  })
}

Vue.use(VueRouter)

const routes = [
  ...AppmgmtRoutes,
  ...SignRoutes,
  ...MenuRoutes,
  ...TemplateRoutes,
  { path: '*', name: 'NotFound', component: NotFound }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(async (to, from, next) => {
  // 화면 인증정보 확인
  if (to.meta.auth) {
    const isLogin = await store.dispatch('Login/isLogin')
    if (!isLogin) {
      await Vue.dialog.alert('로그인후 이용 가능합니다.')
      return next('/')
    }
  }

  // 화면 appName으로 메뉴 목록 갱신
  if (to.meta.appName) {
    await store.dispatch('Menu/changeMenuByApp', { appName: to.meta.appName })
  }
  window.log('router to :', to)
  store.dispatch('Menu/changeMenu', { path: to.path })
  return next()
})

export default router
