/*
 * login-fetch for login
 * created: 2017/9/30.
 * author: Broccoli spring( 高仓雄 - gcx )
 * copyright (c) 2017 Broccoli spring( gcx )
 */
/*==========================================================================================================================*/
import fetch from '../../utils/fetch/fetch'
import {dataFilter} from '@/utils/fetch/fetchDataType'


/*==========================================================================================================================*/

/**
 * role-Sidebar (fetch-login axios for login)
 * @param query
 * back-API-link：http://192.168.1.254:8771/swagger-ui.htm
 */

export function sideBar(query) {
  //Filter data
  dataFilter(query);
  //fetch out
  return fetch({
    // url: 'http://localhost:8088/static/side.json',
    url: '/system/permission/list-menu',
    method: 'post',
    data: query,
    // params: query,
  })
}

