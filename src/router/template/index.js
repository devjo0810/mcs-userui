const TemplateMain = () => import(/* webpackChunkName: "template" */ '@/views/template/TemplateMain')
const TemplateGrid1 = () => import(/* webpackChunkName: "template" */ '@/views/template/grid/TemplateGrid1')
const TemplateGrid2 = () => import(/* webpackChunkName: "template" */ '@/views/template/grid/TemplateGrid2')
const TemplateGrid3 = () => import(/* webpackChunkName: "template" */ '@/views/template/grid/TemplateGrid3')

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
  },
  {
    path: '/template/grid2',
    name: 'TemplateGrid2',
    component: TemplateGrid2,
    meta: { auth: false, layout: 'Template', header: false }
  },
  {
    path: '/template/grid3',
    name: 'TemplateGrid3',
    component: TemplateGrid3,
    meta: { auth: false, layout: 'Template', header: false }
  }
]
