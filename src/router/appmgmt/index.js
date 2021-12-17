const AppManage = () => import('@/views/appmgmt/app/AppManage')
const AppMenu1 = () => import('@/views/appmgmt/app/AppMenu1')
const AppMenu2 = () => import('@/views/appmgmt/app/AppMenu2')
const AppMenu3 = () => import('@/views/appmgmt/app/AppMenu3')
const AppMenu4 = () => import('@/views/appmgmt/app/AppMenu4')
const CommonManage = () => import('@/views/appmgmt/common/CommonManage')
const CommonMenu1 = () => import('@/views/appmgmt/common/CommonMenu1')
const CommonMenu2 = () => import('@/views/appmgmt/common/CommonMenu2')
const CommonMenu3 = () => import('@/views/appmgmt/common/CommonMenu3')
const CommonMenu4 = () => import('@/views/appmgmt/common/CommonMenu4')
const UserManage = () => import('@/views/appmgmt/user/UserManage')

export default [
  {
    path: '/appmgmt',
    redirect: '/appmgmt/app/menu1'
  },
  {
    path: '/appmgmt/app/manage',
    name: 'AppManage',
    component: AppManage,
    meta: { auth: true, header: true, layout: 'Appmgmt', appName: 'appmgmt' }
  },
  {
    path: '/appmgmt/app/menu1',
    name: 'AppMenu1',
    component: AppMenu1,
    meta: { auth: true, header: true, layout: 'Appmgmt', appName: 'appmgmt' }
  },
  {
    path: '/appmgmt/app/menu2',
    name: 'AppMenu2',
    component: AppMenu2,
    meta: { auth: true, header: true, layout: 'Appmgmt', appName: 'appmgmt' }
  },
  {
    path: '/appmgmt/app/menu3',
    name: 'AppMenu3',
    component: AppMenu3,
    meta: { auth: true, header: true, layout: 'Appmgmt', appName: 'appmgmt' }
  },
  {
    path: '/appmgmt/app/menu4',
    name: 'AppMenu4',
    component: AppMenu4,
    meta: { auth: true, header: true, layout: 'Appmgmt', appName: 'appmgmt' }
  },
  {
    path: '/appmgmt/common/manage',
    name: 'CommonManage',
    component: CommonManage,
    meta: { auth: true, header: true, layout: 'Appmgmt', appName: 'appmgmt' }
  },
  {
    path: '/appmgmt/common/menu1',
    name: 'CommonMenu1',
    component: CommonMenu1,
    meta: { auth: true, header: true, layout: 'Appmgmt', appName: 'appmgmt' }
  },
  {
    path: '/appmgmt/common/menu2',
    name: 'CommonMenu2',
    component: CommonMenu2,
    meta: { auth: true, header: true, layout: 'Appmgmt', appName: 'appmgmt' }
  },
  {
    path: '/appmgmt/common/menu3',
    name: 'CommonMenu3',
    component: CommonMenu3,
    meta: { auth: true, header: true, layout: 'Appmgmt', appName: 'appmgmt' }
  },
  {
    path: '/appmgmt/common/menu4',
    name: 'CommonMenu4',
    component: CommonMenu4,
    meta: { auth: true, header: true, layout: 'Appmgmt', appName: 'appmgmt' }
  },
  {
    path: '/appmgmt/user/manage',
    name: 'UserManage',
    component: UserManage,
    meta: { auth: true, header: true, layout: 'Appmgmt', appName: 'appmgmt' }
  }
]
