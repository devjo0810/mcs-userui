const TemplateMain = () => import(/* webpackChunkName: "template" */ '@/views/template/TemplateMain')
const TemplateGrid1 = () => import(/* webpackChunkName: "template" */ '@/views/template/grid/TemplateGrid1')
const TemplateGrid2 = () => import(/* webpackChunkName: "template" */ '@/views/template/grid/TemplateGrid2')
const TemplateGrid3 = () => import(/* webpackChunkName: "template" */ '@/views/template/grid/TemplateGrid3')
const TemplateTable1 = () => import(/* webpackChunkName: "template" */ '@/views/template/table/TemplateTable1')
const TemplateComponent1 = () => import(/* webpackChunkName: "template" */ '@/views/template/component/TemplateComponent1')
const TemplateLayout1 = () => import(/* webpackChunkName: "template" */ '@/views/template/layout/TemplateLayout1')
const TemplatePopup1 = () => import(/* webpackChunkName: "template" */ '@/views/template/popup/TemplatePopup1')
const TemplateWindowPopup1 = () => import(/* webpackChunkName: "template" */ '@/views/template/popup/TemplateWindowPopup1')

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
  },
  {
    path: '/template/table1',
    name: 'TemplateTable1',
    component: TemplateTable1,
    meta: { auth: false, layout: 'Template', header: false }
  },
  {
    path: '/template/component1',
    name: 'TemplateComponent1',
    component: TemplateComponent1,
    meta: { auth: false, layout: 'Template', header: false }
  },
  {
    path: '/template/layout1',
    name: 'TemplateLayout1',
    component: TemplateLayout1,
    meta: { auth: false, layout: 'Template', header: false }
  },
  {
    path: '/template/popup1',
    name: 'TemplatePopup1',
    component: TemplatePopup1,
    meta: { auth: false, layout: 'Template', header: false }
  },
  {
    path: '/template/popup/window1',
    name: 'TemplateWindowPopup1',
    component: TemplateWindowPopup1,
    meta: { auth: false, layout: 'No', header: false }
  }
]
