/*
 * login-fetch for login
 * created: 2017/9/30.
 * author: Broccoli spring( 高仓雄 - gcx )
 * copyright (c) 2017 Broccoli spring( gcx )
 */
/*==========================================================================================================================*/
import fetch from '@/utils/fetch/fetch'
import {dataFilter} from '@/utils/fetch/fetchDataType'

/*==========================================================================================================================*/

/**
 * get role button list for every web  ( 获取按钮权限列表 )
 * @param head
 */

export function roleButtonList(head) {
  //Filter data
  dataFilter(head);
  //fetch out
  return fetch({
    url: '/system/permission/list-button',
    method: 'post',
    headers: head,
  })
}

