/*
 * router for project
 */
import Vue from 'vue'
import Router from 'vue-router'
import {getNode} from "../components/BackToTop/index";

Vue.use(Router)


const _import = require('./_import_' + process.env.NODE_ENV)

// App
const App = resolve => require(['@/App'], resolve)
/* ---  前台入口 --- */
const Front = resolve => require(['@/views/front/index'], resolve)
/* ---  工作台主模块入口  --- */
const Layout = resolve => require(['@/views/layout/layout'], resolve)

const iniView = '/front';
const error = '/errorpage/404';

export const constantRouterMap = [
  // 错误页面
  {
    path: '/errorpage',
    component: App,
    redirect: 'noredirect',
    name: '错误页面',
    children: [
      {path: '401', component: _import('errorpage/401'), name: '错误-401'},
      {path: '404', component: _import('errorpage/404'), name: '错误-404'},

    ]
  },

  // 前台登录
  {
    path: '/front',
    component: Front,
    redirect: '/front/login',
    name: "前台",
    children: [
      {path: 'login', component: _import('front/login'), name: '登录'},

    ]
  },

  // 主页
  {
    path: '/home',
    component: Layout,
    redirect: '/home/dashboard',
    name: "主页",
    children: [
      {path: 'dashboard', component: _import('dashboard/index'), meta: {requireAuth: true}, name: '欢迎页面'},
    ]
  },
  // guide
  {
    path: '/guide',
    component: Layout,
    redirect: '/guide/install/install',
    name: "开发指南",
    children: [
      {path: 'install', component: _import('guide/install/install'), meta: {requireAuth: true}, name: '安装'},
      {path: 'fastwork', component: _import('guide/fastwork/fastwork'), meta: {requireAuth: true}, name: '快速上手'},
      {path: 'language', component: _import('guide/language/language'), meta: {requireAuth: true}, name: '国际化'},
    ]
  },
  //component
  {
    path: '/components',
    component: Layout,
    redirect: '/components/basic/icon',
    name: "组件",
    children: [
      //basic
      {
        path: '/components/basic',
        component: _import('components/basic/index'),
        redirect: '/components/basic/icon',
        meta: {requireAuth: true},
        children: [
          {path: 'icon', component: _import('components/basic/icon/icon'), meta: {requireAuth: true}, name: '图标'},
          {path: 'button', component: _import('components/basic/button'), meta: {requireAuth: true}, name: '按钮'},
        ]
      },
      //normal
      {
        path: '/components/normal',
        component: _import('components/normal/index'),
        redirect: '/components/normal/radio',
        meta: {requireAuth: true},
        children: [
          {path: 'radio', component: _import('components/normal/radio/radio'), meta: {requireAuth: true}, name: '单选框'},
          {path: 'checkbox', component: _import('components/normal/checkbox/checkbox'), meta: {requireAuth: true}, name: '多选框'},
          {path: 'input', component: _import('components/normal/input/input'), meta: {requireAuth: true}, name: '输入框'},
          {path: 'select', component: _import('components/normal/select'), meta: {requireAuth: true}, name: '选择器'},
          {path: 'cascader', component: _import('components/normal/cascader'), meta: {requireAuth: true}, name: '级联选择器'},
          {path: 'switch', component: _import('components/normal/switch'), meta: {requireAuth: true}, name: '开关'},
          {path: 'slider', component: _import('components/normal/slider'), meta: {requireAuth: true}, name: '滑块'},
          {path: 'timePicker', component: _import('components/normal/timePicker'), meta: {requireAuth: true}, name: '时间选择器'},
          {path: 'datePicker', component: _import('components/normal/datePicker'), meta: {requireAuth: true}, name: '日期选择器'},
          {path: 'dateTimePicker', component: _import('components/normal/dateTimePicker'), meta: {requireAuth: true}, name: '日期时间选择器'},
          {path: 'upload', component: _import('components/normal/upload'), meta: {requireAuth: true}, name: '上传'},
          {path: 'transfer', component: _import('components/normal/transfer'), meta: {requireAuth: true}, name: '穿梭框'},
        ]
      },
      //extra
      {
        path: '/components/extra',
        component: _import('components/extra/index'),
        redirect: '/components/extra/avatar',
        meta: {requireAuth: true},
        children: [
          {path: 'avatar', component: _import('components/extra/avatar'), meta: {requireAuth: true}, name: '头像图片'},
          {path: 'separator', component: _import('components/extra/separator'), meta: {requireAuth: true}, name: '分割操作线'},
          {path: 'base-table', component: _import('components/extra/base-table'), meta: {requireAuth: true}, name: '基础表单'},
          {path: 'text', component: _import('components/extra/text'), meta: {requireAuth: true}, name: '文字标签'},
        ]
      },
      //business
      {
        path: '/components/business',
        component: _import('components/business/index'),
        redirect: '/components/business/avatar',
        meta: {requireAuth: true},
        children: [
          {path: 'role-check-btn', component: _import('components/business/role-check-btn'), meta: {requireAuth: true}, name: '按钮权限'},
          {path: 'role-manage-range', component: _import('components/business/role-manage-range'), meta: {requireAuth: true}, name: '数据权限范围'},
          {path: 'role-employee', component: _import('components/business/role-employee'), meta: {requireAuth: true}, name: '员工角色'},
          {path: 'role-group', component: _import('components/business/role-group'), meta: {requireAuth: true}, name: '角色组操作'},
          {path: 'role-authorizer', component: _import('components/business/role-authorizer'), meta: {requireAuth: true}, name: '授权人操作'},
          {path: 'simple-tree', component: _import('components/business/simple-tree'), meta: {requireAuth: true}, name: '简单树状组件'},
          {path: 'simple-tree-select', component: _import('components/business/simple-tree-select'), meta: {requireAuth: true}, name: '下拉内置树状组件'},
          {path: 'area-linkage', component: _import('components/business/area-linkage'), meta: {requireAuth: true}, name: '地域选择'},
          {path: 'customer-info-linkage', component: _import('components/business/customer-info-linkage'), meta: {requireAuth: true}, name: '选人信息联动'},
          {path: 'customer-info-single', component: _import('components/business/customer-info-single'), meta: {requireAuth: true}, name: '搜索选人'},
          {path: 'time-interval', component: _import('components/business/time-interval'), meta: {requireAuth: true}, name: '时间频率'},
        ]
      },
      //other
      {
        path: '/components/other',
        component: _import('components/other/index'),
        redirect: '/components/other/dialog',
        meta: {requireAuth: true},
        children: [
          {path: 'dialog', component: _import('components/other/dialog'), meta: {requireAuth: true}, name: '对话框'},
        ]
      },
      //form
      {
        path: '/components/form',
        component: _import('components/form/index'),
        redirect: '/components/form/dynamicAndLocal',
        meta: {requireAuth: true},
        children: [
          {path: 'dynamicAndLocal', component: _import('components/form/dynamicAndLocal/dynamicAndLocal'), meta: {requireAuth: true}, name: '动/静态数据表单'},
          {path: 'modify', component: _import('components/form/modify/modify'), meta: {requireAuth: true}, name: '表单数据修改'},
          {path: 'interacting', component: _import('components/form/interacting/interacting'), meta: {requireAuth: true}, name: '表单行为交互'},
          {path: 'submitAndReset', component: _import('components/form/submitAndReset/submitAndReset'), meta: {requireAuth: true}, name: '表单提交与重置'},

        ]
      },
    ]
  },


  // 主页
  {
    path: '/autoForm',
    component: Layout,
    redirect: '/autoForm/index',
    name: "自动表单",
    children: [
      {path: 'index', component: _import('auto-form/index'), meta: {requireAuth: true}, name: '自动表单说明'},
      {path: 'overview', component: _import('auto-form/overview'), meta: {requireAuth: true}, name: '总体概览'},
    ]
  },

  // 初始及错误路由导向匹配
  {path: '/', redirect: iniView},
  {path: '*', redirect: error},
];


export default new Router({
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      getNode('main').scrollTo(0, 0);
      return {x: 0, y: 0}
    }
  },
  routes: constantRouterMap
})


