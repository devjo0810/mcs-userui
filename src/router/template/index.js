const TemplateMain = () => import(/* webpackChunkName: "template" */ '@/views/template/TemplateMain')
const TemplateGrid1 = () => import(/* webpackChunkName: "template" */ '@/views/template/grid/TemplateGrid1')

export default [
  {
    path: '/template',
    redirect: '/template/main'
  },
  {
    path: '/template/main',
    name: 'TemplateMain',
    component: TemplateMain,
    meta: { auth: false, layout: 'Template', header: false }
  },
  {
    path: '/template/grid1',
    name: 'TemplateGrid1',
    component: TemplateGrid1,
    meta: { auth: false, layout: 'Template', header: false }
  }
]
