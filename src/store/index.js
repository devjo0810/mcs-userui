import Vue from 'vue'
import Vuex from 'vuex'
import Header from './modules/Header'
import Login from './modules/Login'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Header,
    Login
  }
})
