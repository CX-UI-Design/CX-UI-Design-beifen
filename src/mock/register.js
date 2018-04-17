/*
* Created by Broccoli spring( gcx ) on 2018/1/15.
* register data for mock.
*/
//登录
import loginAPI from './user/login'

//权限模块
import roleSideBar from './role/role-side-bar/index'//侧边栏
// import roleButtonList from './role/role-button-list/index'//按钮权限列表

import cx_easy_form from 'cx-easy-form';

let easyFormMock = cx_easy_form.mock


//data register list
const registerList = [
  //user
  {url: /\/oauth\/login/, method: 'post', target: loginAPI.loginByUserName, remarks: 'user login'},
  /* ============ role ============ */
  //role - Sidebar
  {url: /\/system\/permission\/list-menu/, method: 'post', target: roleSideBar.sidebar, remarks: 'get role sidebar data'},
  //role - button-list
  // {url: /\/system\/permission\/list-button/, method: 'post', target: roleButtonList.buttonList, remarks: 'get role button list for every web(获取按钮权限列表)'},
  ...easyFormMock
]


export default registerList;

