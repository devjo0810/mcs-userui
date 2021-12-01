
const state = {
  menuList: [
    { title: 'Login', path: '/login' }
  ],
  currentMenu: null
}

const getters = {
  getMenuList (state) {
    return state.menuList
  }
}

const mutations = {

}

const actions = {

}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
