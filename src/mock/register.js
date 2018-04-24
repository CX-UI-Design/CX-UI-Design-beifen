/*
* Created by Broccoli spring( gcx ) on 2018/1/15.
* register data for mock.
*/
//登录
import loginAPI from './user/login'

//权限模块
import roleSideBar from './role/role-side-bar/index'//侧边栏
import roleButtonList from './role/role-button-list/index'//按钮权限列表

import templateAutoForm from './Form/template-auto-form'//表单你示例
import autoFormSubmit from './Form/submit/index'//表单提交

import CxEasyForm from '../../../cx-easy-form/dist/cx-easy-form.min';

let easyFormMock = CxEasyForm.mock


//data register list
const registerList = [
  //user
  {url: /\/oauth\/login/, method: 'post', target: loginAPI.loginByUserName, remarks: 'user login'},
  /* ============ role ============ */
  //role - button-list
  {url: /\/system\/permission\/list-button/, method: 'post', target: roleButtonList.buttonList, remarks: 'get role button list for every web(获取按钮权限列表)'},
  //role - Sidebar
  {url: /\/system\/permission\/list-menu/, method: 'post', target: roleSideBar.sidebar, remarks: 'get role sidebar data'},

  //template-auto-form
  {url: /\/mock\/autoForm\/template/, method: 'get', target: templateAutoForm.autoform, remarks: 'template-auto-form'},
  //submit
  {url: /\/mock\/autoForm\/submit/, method: 'post', target: autoFormSubmit.submit, remarks: 'form submit'},


  ...easyFormMock
]


export default registerList;

