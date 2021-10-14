const TempCommon = () => import(/* webpackChunkName: "template" */ '@/views/template/TempCommon')

export default [
  {
    path: '/template/common',
    name: 'TempCommon',
    component: TempCommon
  }
]
