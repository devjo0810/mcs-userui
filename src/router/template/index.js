const Template1 = () => import(/* webpackChunkName: "template" */ '@/views/template/Template1')

export default [
  {
    path: '/template1',
    name: 'Template1',
    component: Template1,
    meta: { auth: false, layout: 'Template', header: true }
  }
]
