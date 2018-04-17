/*
 * router for project
 */
import Vue from 'vue'
import Router from 'vue-router'

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
  scrollBehavior: () => ({y: 0}),
  routes: constantRouterMap
})


