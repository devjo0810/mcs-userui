import Vue from 'vue'
import Vuex from 'vuex'
import Menu from './modules/Menu'
import Login from './modules/Login'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Menu,
    Login
  }
})
