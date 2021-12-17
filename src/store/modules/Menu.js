// import Vue from "vue"

const SAMPLE = [
  {
    appName: 'appmgmt',
    title: '앱',
    menuStep: 1,
    menuId: '1',
    path: '/appmgmt/app/menu1',
    items: [
      { appName: 'appmgmt', title: '앱 메뉴 1', menuStep: 2, menuId: '100', path: '/appmgmt/app/menu1' },
      { appName: 'appmgmt', title: '앱 메뉴 2', menuStep: 2, menuId: '110', path: '/appmgmt/app/menu2' },
      { appName: 'appmgmt', title: '앱 메뉴 3', menuStep: 2, menuId: '120', path: '/appmgmt/app/menu3' },
      { appName: 'appmgmt', title: '앱 메뉴 4', menuStep: 2, menuId: '130', path: '/appmgmt/app/menu4' }
    ]
  },
  {
    appName: 'appmgmt',
    title: '기준·공통',
    menuStep: 1,
    menuId: '2',
    path: '/appmgmt/common/menu1',
    items: [
      { appName: 'appmgmt', title: '기준·공통 메뉴 1', menuStep: 2, menuId: '200', path: '/appmgmt/common/menu1' },
      { appName: 'appmgmt', title: '기준·공통 메뉴 2', menuStep: 2, menuId: '210', path: '/appmgmt/common/menu2' },
      { appName: 'appmgmt', title: '기준·공통 메뉴 3', menuStep: 2, menuId: '220', path: '/appmgmt/common/menu3' },
      { appName: 'appmgmt', title: '기준·공통 메뉴 4', menuStep: 2, menuId: '230', path: '/appmgmt/common/menu4' }
    ]
  },
  {
    appName: 'appmgmt',
    title: '사용자',
    menuStep: 1,
    menuId: '3',
    path: '/appmgmt/user/manage'
  }
]

const state = {
  appName: '',
  menuList: [],
  currentMenu: {},
  mainMenuIndex: -1,
  subMenuIndex: -1
}

const getters = {
  getAppName (state) {
    return state.appName
  },
  getMenuList (state) {
    return state.menuList
  },
  getSubMenuList (state) {
    const { menuList, mainMenuIndex } = state
    if (menuList.length && mainMenuIndex > -1) {
      return state.menuList[state.mainMenuIndex].items || []
    } else {
      return []
    }
  },
  getMainMenuIndex (state) {
    return state.mainMenuIndex
  },
  getMainMenuTitle (state) {
    const { menuList, mainMenuIndex } = state
    if (menuList.length && mainMenuIndex > -1) {
      return state.menuList[state.mainMenuIndex].title || ''
    } else {
      return ''
    }
  },
  getCurrentMenuTitle (state) {
    return state.currentMenu.title || ''
  },
  getSubMenuIndex (state) {
    return state.subMenuIndex
  }
}

const mutations = {
  setAppName (state, { appName }) {
    state.appName = appName
  },
  setMenuList (state, { menuList }) {
    state.menuList = [...menuList]
  },
  setCurrentMenu (state, { menu }) {
    state.currentMenu = { ...menu }
  },
  setMainMenuIndex (state, { menuIndex }) {
    state.mainMenuIndex = menuIndex
  },
  setSubMenuIndex (state, { menuIndex }) {
    state.subMenuIndex = menuIndex
  }
}

const actions = {
  async changeMenuByApp ({ state, commit }, { appName }) {
    if (state.appName === appName) return
    // const { data } = await Vue.api.get(`/api/appmgmt/menu/list/${appName}`)
    const menuList = SAMPLE
    await Promise.all([
      commit('setAppName', { appName }),
      commit('setMenuList', { menuList })
    ])
  },
  changeMenu ({ state, commit }, { path }) {
    if (!state.menuList.length) {
      commit('setMainMenuIndex', { menuIndex: -1 })
      return
    }
    const menuItem = recursiveFindItemByPath(state.menuList, path)
    if (!menuItem) {
      commit('setMainMenuIndex', { menuIndex: -1 })
    } else {
      const mainMenuIndex = state.menuList.findIndex(item => item.menuId.charAt(0) === menuItem.menuId.charAt(0))
      const mainMenu = state.menuList.find(item => item.menuId.charAt(0) === menuItem.menuId.charAt(0))
      commit('setMainMenuIndex', { menuIndex: mainMenuIndex })
      commit('setCurrentMenu', { menu: menuItem })
      if (mainMenu.items && mainMenu.items.length) {
        const subMenuIndex = mainMenu.items.findIndex(item => item === menuItem)
        commit('setSubMenuIndex', { menuIndex: subMenuIndex })
      }
    }
  }
}

function recursiveFindItemByPath (items, path) {
  for (const item of items) {
    if (item.items && item.items.length) {
      const findItem = recursiveFindItemByPath(item.items, path)
      if (findItem) return findItem
    }
    if (item.path === path) return item
  }
  return null
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
