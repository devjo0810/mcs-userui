
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
  setMenuList (state, { menuList }) {
    state.menuList = [...menuList]
  }
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
