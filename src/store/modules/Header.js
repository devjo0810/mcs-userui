// import Vue from "vue"

const state = {
  menuList: [
    { title: '앱', path: '/appmgmt/app/manage' },
    { title: '기준·공통', path: '/appmgmt/common/manage' },
    { title: '사용자', path: '/appmgmt/user/manage' }
  ]
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
  async setHeaderMenuByApp ({ commit }, { app, path }) {
    // const { data } = await Vue.api.get(`/api/appmgmt/menu/list/${app}`)

  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
