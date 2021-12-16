const AppManage = () => import('@/views/appmgmt/app/AppManage')
const CommonManage = () => import('@/views/appmgmt/common/CommonManage')
const UserManage = () => import('@/views/appmgmt/user/UserManage')

export default [
  {
    path: '/appmgmt',
    redirect: '/appmgmt/app/manage'
  },
  {
    path: '/appmgmt/app/manage',
    name: 'UserManage',
    component: AppManage,
    meta: { auth: true, header: true }
  },
  {
    path: '/appmgmt/common/manage',
    name: 'CommonManage',
    component: CommonManage,
    meta: { auth: true, header: true }
  },
  {
    path: '/appmgmt/user/manage',
    name: 'UserManage',
    component: UserManage,
    meta: { auth: true, header: true }
  }
]
