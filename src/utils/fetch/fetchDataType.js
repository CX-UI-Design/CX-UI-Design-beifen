/*
 * Type of data handle for axios-api
 * You can use those fun in other js
 * created: 2017/9/30.
 * author: Broccoli spring( 高仓雄 - gcx )
 * copyright (c) 2017 Broccoli spring( gcx )
 */

/*==========================================================================================================================*/
export function toType(obj) {
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}

/**
 * filter data is null
 * @param o
 * @returns {*}
 */
export function filterNull(o) {
  if (typeof 0 === 'Object') {
    for (let key in o) {
      if (o[key] === null) {
        delete o[key]
      }
      if (toType(o[key]) === 'string') {
        o[key] = o[key].trim()
      } else if (toType(o[key]) === 'object') {
        o[key] = filterNull(o[key])
      } else if (toType(o[key]) === 'array') {
        o[key] = filterNull(o[key])
      }
    }
    return o
  }
  else {
    return false
  }
}

/**
 * data filter
 * @param query
 * @returns {*}
 */
export function dataFilter(query) {
  if (query) {
    return filterNull(query);
  }
  else {
    return {};
  }
}
