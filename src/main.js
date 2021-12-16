import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import globalDialog from './plugins/global-dialog'
import globalSpinner from './plugins/global-spinner'
import api from './plugins/api'
import './assets/scss/main.scss'

Vue.use(globalDialog)
Vue.use(globalSpinner)
Vue.use(api)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
