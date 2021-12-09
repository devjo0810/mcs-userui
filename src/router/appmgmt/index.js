const UserManage = () => import('@/views/appmgmt/UserManage')

export default [
  {
    path: '/user/manage',
    name: 'UserManage',
    component: UserManage,
    meta: { auth: true }
  }
]
