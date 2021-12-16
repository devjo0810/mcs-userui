const AppMenuSelect = () => import('@/views/menu/AppMenuSelect')

export default [
  {
    path: '/menu',
    name: 'AppMenuSelect',
    component: AppMenuSelect,
    meta: { auth: true }
  }
]
